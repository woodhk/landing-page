"use client";

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Use dynamic import with no SSR to prevent hydration issues
const Chatbot = dynamic(() => import('./Chatbot'), { ssr: false });

const ChatbotWrapper = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <Chatbot />;
};

export default ChatbotWrapper; 