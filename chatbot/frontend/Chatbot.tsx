"use client";

import { useState, useRef, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
import ChatMessage from './ChatMessage';
import Image from 'next/image';

export type Message = {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
};

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: uuidv4(),
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };
    
    setShowWelcome(false);
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    setTimeout(() => {
      const aiMessage: Message = {
        id: uuidv4(),
        text: `Echo: ${userMessage.text}`,
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const handlePromptClick = (promptText: string) => {
    const userMessage: Message = {
      id: uuidv4(),
      text: promptText,
      isUser: true,
      timestamp: new Date(),
    };
    
    setShowWelcome(false);
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    setTimeout(() => {
      const aiMessage: Message = {
        id: uuidv4(),
        text: `Echo: ${promptText}`,
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full bg-gray-50">
      <div className="flex-grow p-4 space-y-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 pb-24">
        {showWelcome ? (
          <div className="flex flex-col items-center justify-center h-full p-2 sm:p-6 text-center">
            <div className="mb-4 mt-2">
              <Image 
                src="/logo/logo.svg" 
                alt="Fluentpro Logo" 
                width={60} 
                height={60} 
                className="mx-auto"
              />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Hello There
            </h2>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">How can I help you?</h3>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base px-2">
              Choose a prompt below or write your own to start chatting with Fluentpro Support AI
            </p>
            
            <div className="w-full overflow-x-auto pb-2 hide-scrollbar">
              <div className="flex space-x-3 min-w-max px-2">
                <button 
                  onClick={() => handlePromptClick("What is Fluentpro?")}
                  className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 text-sm h-auto min-h-[48px] break-words min-w-[140px] flex-shrink-0"
                >
                  What is Fluentpro?
                </button>
                <button 
                  onClick={() => handlePromptClick("How does Fluentpro work?")}
                  className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 text-sm h-auto min-h-[48px] break-words min-w-[140px] flex-shrink-0"
                >
                  How does Fluentpro work?
                </button>
                <button 
                  onClick={() => handlePromptClick("How does it help HR?")}
                  className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 text-sm h-auto min-h-[48px] break-words min-w-[140px] flex-shrink-0"
                >
                  How does it help HR?
                </button>
                <button 
                  onClick={() => handlePromptClick("What makes Fluentpro different?")}
                  className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 text-sm h-auto min-h-[48px] break-words min-w-[140px] flex-shrink-0"
                >
                  What makes Fluentpro different?
                </button>
              </div>
            </div>
          </div>
        ) : (
          <>
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
            {isLoading && <ChatMessage message={{ id: 'loading', text: '', isUser: false, timestamp: new Date() }} loading />}
          </>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="sticky bottom-0 px-4 pb-4 pt-2 z-10 bg-transparent">
        <form 
          onSubmit={handleSubmit} 
          className="bg-white rounded-xl shadow-xl p-2 flex items-center space-x-2"
        >
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask anything..."
            className="flex-grow p-3 bg-transparent focus:outline-none text-gray-700 placeholder-gray-400"
            disabled={isLoading}
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 duration-200 ease-in-out flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!inputValue.trim() || isLoading}
            aria-label="Send message"
          >
            <ArrowUp size={22} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;