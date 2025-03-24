"use client";

import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2, Trash2 } from 'lucide-react';
import { useChat, useChatMessages, useConversationItems } from './ChatContext';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import { ToolCall } from './ToolCall';

export function ChatWindow() {
  const { isOpen, closeChat, isLoading } = useChat();
  const { chatMessages } = useChatMessages();
  const { clearConversation } = useConversationItems();
  const messageEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  // Close chat on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeChat();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [closeChat, isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed bottom-24 right-6 z-50 flex h-[500px] w-[350px] flex-col overflow-hidden rounded-xl bg-white shadow-xl"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.2 }}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-200 bg-blue-600 px-4 py-3 text-white">
            <div className="flex items-center">
              <img
                src="/logo.svg"
                alt="AI Assistant"
                className="mr-2 h-6 w-6 rounded-full"
              />
              <h3 className="font-medium">AI Assistant</h3>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={clearConversation}
                className="rounded-full p-1 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-label="Clear conversation"
                title="Clear conversation"
              >
                <Trash2 className="h-5 w-5" />
              </button>
              <button
                onClick={closeChat}
                className="rounded-full p-1 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-label="Close chat"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4">
            {chatMessages.map((message, index) => (
              <div key={index} className="mb-4">
                {message.type === "message" ? (
                  <ChatMessage message={message} />
                ) : message.type === "tool_call" ? (
                  <ToolCall toolCall={message} />
                ) : null}
              </div>
            ))}
            {isLoading && (
              <div className="flex w-full justify-center py-2">
                <Loader2 className="h-6 w-6 animate-spin text-blue-600" />
              </div>
            )}
            <div ref={messageEndRef} />
          </div>

          {/* Input */}
          <ChatInput />
        </motion.div>
      )}
    </AnimatePresence>
  );
} 