"use client";

import { AnimatePresence, motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import { useChat } from './ChatContext';

export function ChatButton() {
  const { toggleChat, isOpen } = useChat();

  return (
    <motion.button
      onClick={toggleChat}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      aria-label="Chat with AI assistant"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={isOpen ? 'open' : 'closed'}
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: 90 }}
          transition={{ duration: 0.2 }}
        >
          <MessageSquare className="h-6 w-6" />
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
}
