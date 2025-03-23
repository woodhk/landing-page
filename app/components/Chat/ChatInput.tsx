"use client";

import { useState, FormEvent } from 'react';
import { Send } from 'lucide-react';
import { useChat } from './ChatContext';

export function ChatInput() {
  const [input, setInput] = useState('');
  const { addMessage, setIsLoading } = useChat();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage = { role: 'user' as const, content: input.trim() };
    addMessage(userMessage);
    setInput('');
    setIsLoading(true);

    try {
      // Send message to API
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [userMessage],
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      // Handle streaming response
      const reader = response.body?.getReader();
      if (!reader) return;

      let accumulatedContent = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        // Decode chunk and add to accumulated content
        const chunk = new TextDecoder().decode(value);
        accumulatedContent += chunk;
      }

      // Add assistant message with accumulated content
      addMessage({ role: 'assistant', content: accumulatedContent });
    } catch (error) {
      console.error('Error sending message:', error);
      addMessage({
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border-t border-gray-200 p-4">
      <div className="flex items-center rounded-lg border border-gray-300 bg-white px-3 py-2 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 border-0 bg-transparent text-gray-800 focus:outline-none focus:ring-0"
          disabled={false}
        />
        <button
          type="submit"
          disabled={!input.trim()}
          className="ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white transition-colors hover:bg-blue-700 disabled:bg-gray-300"
        >
          <Send className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
}
