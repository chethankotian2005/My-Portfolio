'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const INITIAL_MESSAGE = {
  role: 'assistant',
  content:
    "Hi, I'm Nova. Ask me anything about Chethan's profile, projects, architecture decisions, implementation complexity, or research approach.",
};

const QUICK_PROMPTS = [
  'Tell me about Chethan',
  'Explain CliniQ architecture',
  'What was hard in Academic Setu?',
];

export default function NovaChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const chatRootRef = useRef(null);

  const canSend = input.trim().length > 0 && !isLoading;

  const conversationForApi = useMemo(
    () => messages.filter((msg) => msg.role === 'user' || msg.role === 'assistant'),
    [messages]
  );

  const sendMessage = async (textOverride = null) => {
    const userText = (textOverride ?? input).trim();
    if (!userText || isLoading) return;

    const userMessage = { role: 'user', content: userText };
    const nextMessages = [...messages, userMessage];

    setMessages(nextMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/nova', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userText,
          history: conversationForApi.slice(-10),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || 'Nova request failed.');
      }

      const assistantText =
        data?.mode === 'fallback'
          ? `Nova local mode: answering from portfolio knowledge while live AI is temporarily unavailable.\n\n${data.reply}`
          : data.reply;

      setMessages((prev) => [...prev, { role: 'assistant', content: assistantText }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            error.message || 'Nova is unavailable right now. Please try again in a moment.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const onKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      if (canSend) sendMessage();
    }
  };

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event) => {
      if (!chatRootRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  return (
    <div ref={chatRootRef} className="fixed bottom-[9.75rem] right-3 sm:right-6 md:bottom-[11rem] md:right-8 z-[70]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-[calc(100vw-1.5rem)] sm:w-[92vw] max-w-md max-h-[calc(100vh-13rem)] sm:max-h-[calc(100vh-16rem)] md:max-h-[calc(100vh-17rem)] rounded-3xl border border-gray-200 dark:border-border-gray bg-white/95 dark:bg-card-black/95 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col"
          >
            <div className="px-4 py-3 border-b border-gray-200 dark:border-border-gray bg-gradient-to-r from-gray-50 to-white dark:from-secondary-black dark:to-card-black flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="h-8 w-8 rounded-full bg-black text-white dark:bg-white dark:text-black flex items-center justify-center text-xs font-bold">
                  N
                </div>
                <div>
                  <p className="text-sm font-semibold text-black dark:text-white">Nova</p>
                  <p className="text-xs text-gray-600 dark:text-text-muted">Friendly Portfolio Assistant</p>
                </div>
              </div>
              <button
                type="button"
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-semibold text-gray-600 hover:text-black dark:text-text-muted dark:hover:text-white hover:bg-gray-100 dark:hover:bg-card-black transition-colors"
                onClick={() => setIsOpen(false)}
                aria-label="Close Nova chat"
              >
                <span>Close</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="px-4 pt-3 pb-2 bg-white dark:bg-card-black border-b border-gray-200/80 dark:border-border-gray">
              <div className="flex flex-wrap gap-2">
                {QUICK_PROMPTS.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => sendMessage(prompt)}
                    disabled={isLoading}
                    className="text-xs px-3 py-1.5 rounded-full border border-gray-300 dark:border-border-gray text-gray-700 dark:text-text-secondary hover:bg-gray-100 dark:hover:bg-secondary-black transition-colors disabled:opacity-50"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-white dark:bg-card-black">
              {messages.map((msg, index) => {
                const isUser = msg.role === 'user';
                return (
                  <div
                    key={`${msg.role}-${index}`}
                    className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${
                        isUser
                          ? 'bg-black text-white dark:bg-white dark:text-black shadow-sm'
                          : 'bg-gray-100 text-gray-800 dark:bg-secondary-black dark:text-text-secondary border border-gray-200 dark:border-border-gray'
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                );
              })}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="rounded-2xl px-3.5 py-2.5 text-sm bg-gray-100 dark:bg-secondary-black text-gray-700 dark:text-text-secondary">
                    Nova is thinking...
                  </div>
                </div>
              )}
            </div>

            <div className="p-3 border-t border-gray-200 dark:border-border-gray bg-white dark:bg-card-black">
              <div className="flex gap-2">
                <textarea
                  rows={2}
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={onKeyDown}
                  placeholder="Ask about projects, architecture, complexity, or research..."
                  className="flex-1 resize-none rounded-xl border border-gray-300 dark:border-border-gray bg-white dark:bg-secondary-black px-3 py-2 text-sm text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white/80"
                />
                <button
                  type="button"
                  onClick={sendMessage}
                  disabled={!canSend}
                  className="self-end px-4 py-2 rounded-xl bg-black text-white dark:bg-white dark:text-black text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:brightness-110 transition"
                >
                  Send
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative flex items-center justify-end">
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            className="mr-2 sm:mr-3 hidden sm:block rounded-full bg-white dark:bg-secondary-black border border-gray-200 dark:border-border-gray px-3 py-1.5 text-xs text-gray-700 dark:text-text-secondary shadow-md"
          >
            Ask Nova
          </motion.div>
        )}

        {!isOpen && (
          <motion.span
            aria-hidden="true"
            className="absolute h-14 w-14 rounded-full border-2 border-black/30 dark:border-white/30"
            animate={{ scale: [1, 1.35, 1], opacity: [0.45, 0, 0.45] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
          />
        )}

        <motion.button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          animate={
            isOpen
              ? { y: 0 }
              : {
                  y: [0, -4, 0],
                }
          }
          transition={{ duration: 2.4, repeat: isOpen ? 0 : Infinity, ease: 'easeInOut' }}
          className="relative w-14 h-14 rounded-full bg-black text-white dark:bg-white dark:text-black shadow-glow flex items-center justify-center"
          aria-label="Open Nova chatbot"
        >
          <span className="absolute -top-1 -right-1 h-4 min-w-4 px-1 rounded-full bg-emerald-500 text-[10px] leading-4 text-white font-bold text-center">
            AI
          </span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h8M8 14h5m8-2c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </motion.button>
      </div>
    </div>
  );
}
