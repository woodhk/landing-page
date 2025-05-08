"use client";

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Minimize2, ArrowUpCircle, Maximize2 } from 'lucide-react';

// Use dynamic import with no SSR to prevent hydration issues
const Chatbot = dynamic(() => import('./Chatbot'), { ssr: false });

const ChatbotWrapper = () => {
  const [showChat, setShowChat] = useState(false);
  const [initializing, setInitializing] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleChatToggle = async () => {
    if (!showChat) {
      // Only initialize when opening chat for the first time
      setInitializing(true);
      
      try {
        // Check if the API server is running by calling health endpoint
        const response = await fetch('/health');
        
        if (response.ok) {
          console.log('API server is already running');
        } else {
          console.log('Health check failed, please make sure the API server is running');
        }
      } catch (error) {
        console.error('Error checking API server:', error);
        console.log('Please make sure the API server is running by executing: python chatbot/backend/start_server.py');
      } finally {
        setInitializing(false);
        setShowChat(true);
      }
    } else {
      setShowChat(false);
    }
  };

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <>
      <button
        onClick={handleChatToggle}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-900 to-blue-600 text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform duration-300 ease-in-out z-50 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75"
        aria-label="Toggle chatbot"
        disabled={initializing}
      >
        {initializing ? (
          <div className="animate-spin h-6 w-6 border-2 border-white border-t-transparent rounded-full"></div>
        ) : showChat ? (
          <X size={28} />
        ) : (
          <MessageSquare size={28} />
        )}
      </button>

      <AnimatePresence>
        {showChat && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={`fixed bottom-24 right-6 bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden z-40
                        ${isExpanded ? 'w-[90vw] h-[80vh] md:w-[600px] md:h-[700px]' : 'w-96 h-[550px]'}
                        transition-all duration-300 ease-in-out`}
            style={{
              maxHeight: 'calc(100vh - 7rem)', // 6rem (bottom-24) + 1rem safety
              maxWidth: 'calc(100vw - 3rem)' // 1.5rem (right-6) * 2 for some padding
            }}
          >
            <header className="bg-gradient-to-r from-blue-900 to-blue-600 text-white p-4 flex justify-between items-center sticky top-0 z-10">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <h2 className="text-lg font-semibold">Chat with us!</h2>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={toggleExpand}
                  className="text-white hover:bg-white/20 p-1 rounded-full transition-colors"
                  aria-label={isExpanded ? "Minimize chat" : "Expand chat"}
                >
                  {isExpanded ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
                </button>
                <button
                  onClick={handleChatToggle}
                  className="text-white hover:bg-white/20 p-1 rounded-full transition-colors"
                  aria-label="Close chat"
                >
                  <X size={20} />
                </button>
              </div>
            </header>
            <Chatbot />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatbotWrapper; 