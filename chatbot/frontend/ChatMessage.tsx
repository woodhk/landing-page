"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import type { Message } from './Chatbot';

type ChatMessageProps = {
  message: Message;
  loading?: boolean;
};

const ChatMessage = ({ message, loading = false }: ChatMessageProps) => {
  const isUser = message.isUser;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "circOut" }}
      className={`mb-3 flex items-end gap-2 ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      {!isUser && !loading && (
        <Image 
          src="/logo/logo.svg" 
          alt="Assistant Logo"
          width={30}
          height={30}
          className="mb-1"
        />
      )}
      <div
        className={`max-w-[85%] rounded-xl px-4 py-3 shadow-md ${
          isUser
            ? 'bg-gradient-to-br from-blue-600 to-blue-500 text-white'
            : 'bg-gray-100 text-gray-800'
        }`}
      >
        {loading ? (
          <div className="flex space-x-1.5 items-center py-1">
            <motion.div 
              className="w-2.5 h-2.5 rounded-full bg-gray-400" 
              animate={{ y: [0, -3, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut", delay: 0 }}
            />
            <motion.div 
              className="w-2.5 h-2.5 rounded-full bg-gray-400" 
              animate={{ y: [0, -3, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            />
            <motion.div 
              className="w-2.5 h-2.5 rounded-full bg-gray-400" 
              animate={{ y: [0, -3, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            />
          </div>
        ) : (
          <p className="break-words text-sm md:text-base">{message.text}</p>
        )}
      </div>
    </motion.div>
  );
};

export default ChatMessage; 