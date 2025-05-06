"use client";

import { motion } from 'framer-motion';
import type { Message } from './Chatbot';

type ChatMessageProps = {
  message: Message;
  loading?: boolean;
};

const ChatMessage = ({ message, loading = false }: ChatMessageProps) => {
  const isUser = message.isUser;

  return (
    <div
      className={`mb-3 flex ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={`max-w-[85%] rounded-lg px-3 py-2 ${
          isUser
            ? 'bg-blue-600 text-white'
            : 'bg-gray-100 text-gray-800'
        }`}
      >
        {loading ? (
          <div className="flex space-x-1 items-center py-1">
            <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        ) : (
          <p className="break-words">{message.text}</p>
        )}
      </motion.div>
    </div>
  );
};

export default ChatMessage; 