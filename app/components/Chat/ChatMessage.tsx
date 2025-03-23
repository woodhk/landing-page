"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

type ChatMessageProps = {
  content: string;
  isUser: boolean;
};

export function ChatMessage({ content, isUser }: ChatMessageProps) {
  return (
    <motion.div
      className={`flex w-full ${isUser ? 'justify-end' : 'justify-start'} mb-4`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className={`flex max-w-[80%] ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
        <div
          className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ${isUser ? 'ml-2 bg-blue-600' : 'mr-2 bg-gray-200'}`}
        >
          {isUser ? (
            <span className="text-sm text-white">You</span>
          ) : (
            <Image src="/logo.svg" alt="AI Assistant" width={20} height={20} />
          )}
        </div>
        <div
          className={`rounded-lg px-4 py-2 ${isUser ? 'rounded-tr-none bg-blue-600 text-white' : 'rounded-tl-none bg-gray-200 text-gray-800'}`}
        >
          {content}
        </div>
      </div>
    </motion.div>
  );
}
