import { NextResponse } from 'next/server';
import { buildNovaSystemPrompt } from '@/lib/novaKnowledge';
import { buildNovaFallbackReply } from '@/lib/novaFallback';

const QWEN_MODEL = process.env.NOVA_MODEL || 'qwen/qwen3.5-122b-a10b';
const NVIDIA_CHAT_URL = 'https://integrate.api.nvidia.com/v1/chat/completions';

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
    const apiKey = process.env.NVIDIA_API_KEY;

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
      model: QWEN_MODEL,
      messages,
      max_tokens: 420,
      temperature: 0.65,
      top_p: 0.9,
      stream: false,
      chat_template_kwargs: {
        enable_thinking: false,
      },
    };

    const response = await fetch(NVIDIA_CHAT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
      cache: 'no-store',
    });

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

    return NextResponse.json({ reply, mode: 'qwen' });
  } catch (error) {
    let message = '';
    try {
      const body = await request.clone().json();
      message = typeof body?.message === 'string' ? body.message : '';
    } catch {
      message = '';
    }

    return NextResponse.json({
      reply: formatAssistantReply(buildNovaFallbackReply(message)),
      mode: 'fallback',
      reason: 'unexpected_server_error',
    });
  }
}
