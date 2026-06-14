import { NextResponse } from 'next/server';
import { buildNovaSystemPrompt } from '@/lib/novaKnowledge';
import { buildNovaFallbackReply } from '@/lib/novaFallback';

const GROQ_MODEL = process.env.NOVA_MODEL || 'llama-3.3-70b-versatile';
const GROQ_CHAT_URL = 'https://api.groq.com/openai/v1/chat/completions';

function normalizeHistory(history = []) {
  return history
    .filter((msg) => msg && typeof msg.content === 'string' && msg.content.trim())
    .slice(-8)
    .map((msg) => ({
      role: msg.role === 'assistant' ? 'assistant' : 'user',
      content: msg.content.trim(),
    }));
}

function extractReply(data) {
  return data?.choices?.[0]?.message?.content?.trim() || '';
}

function formatAssistantReply(text) {
  if (!text) return '';

  return text
    .replace(/```[\s\S]*?```/g, '')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/^#{1,6}\s*/gm, '')
    .replace(/^\s*[-*]\s+/gm, '')
    .replace(/^\s*\d+[.)]\s+/gm, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

export async function POST(request) {
  try {
    const apiKey = process.env.GROQ_API_KEY;

    const body = await request.json();
    const message = typeof body?.message === 'string' ? body.message.trim() : '';
    const history = Array.isArray(body?.history) ? body.history : [];

    if (!message) {
      return NextResponse.json({ error: 'Message is required.' }, { status: 400 });
    }

    if (!apiKey) {
      return NextResponse.json({
        reply: formatAssistantReply(buildNovaFallbackReply(message)),
        mode: 'fallback',
        reason: 'missing_api_key',
      });
    }

    const messages = [
      { role: 'system', content: buildNovaSystemPrompt() },
      ...normalizeHistory(history),
      { role: 'user', content: message },
    ];

    const payload = {
      model: GROQ_MODEL,
      messages,
      max_tokens: 350,
      temperature: 0.65,
      top_p: 0.9,
      stream: false,
    };

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 6000); // 6 second timeout

    const response = await fetch(GROQ_CHAT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
      cache: 'no-store',
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!response.ok) {
      return NextResponse.json({
        reply: formatAssistantReply(buildNovaFallbackReply(message)),
        mode: 'fallback',
        reason: response.status === 429 ? 'quota_exceeded' : 'provider_error',
      });
    }

    const data = await response.json();
    const reply = formatAssistantReply(extractReply(data));

    if (!reply) {
      return NextResponse.json({
        reply: formatAssistantReply(buildNovaFallbackReply(message)),
        mode: 'fallback',
        reason: 'empty_provider_reply',
      });
    }

    return NextResponse.json({ reply, mode: 'groq' });
  } catch (error) {
    let message = '';
    try {
      const body = await request.clone().json();
      message = typeof body?.message === 'string' ? body.message : '';
    } catch {
      message = '';
    }

    const reason = error?.name === 'AbortError' ? 'api_timeout' : 'unexpected_server_error';

    return NextResponse.json({
      reply: formatAssistantReply(buildNovaFallbackReply(message)),
      mode: 'fallback',
      reason,
    });
  }
}
