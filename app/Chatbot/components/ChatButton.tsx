"use client";

import { MessageCircle } from 'lucide-react';
import { useChat } from './ChatContext';

export function ChatButton() {
  const { toggleChat, isOpen } = useChat();

  return (
    <button
      onClick={toggleChat}
      className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full ${
        isOpen ? 'bg-blue-700' : 'bg-blue-600'
      } text-white shadow-lg transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400`}
      aria-label={isOpen ? 'Close chat' : 'Open chat'}
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  );
} 