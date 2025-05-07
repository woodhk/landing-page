"use client";

import { useState, useRef, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
import ChatMessage from './ChatMessage';

export type Message = {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
};

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: uuidv4(),
      text: 'How can I assist you today?',
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
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

  return (
    <div className="flex flex-col h-full bg-gray-50">
      <div className="flex-grow p-4 space-y-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 pb-24">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        {isLoading && <ChatMessage message={{ id: 'loading', text: '', isUser: false, timestamp: new Date() }} loading />}
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
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 duration-200 ease-in-out flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
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