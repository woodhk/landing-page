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

const suggestedFollowUps = [
  "Can you elaborate further?",
  "What are the next steps?",
  "How does this apply to my situation?"
];

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

  const scrollToTop = () => {
    const container = document.getElementById('chat-messages-container');
    if (container) {
      container.scrollTop = 0;
    }
  };

  useEffect(() => {
    // Only scroll to bottom on new messages
    if (messages.length > 0) {
      scrollToBottom();
    }
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

    // Call the API instead of the mock response
    fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: [...messages, userMessage].map(msg => ({
          id: msg.id,
          text: msg.text,
          isUser: msg.isUser,
          timestamp: msg.timestamp.toISOString()
        }))
      }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const aiMessage: Message = {
          id: data.id,
          text: data.text,
          isUser: false,
          timestamp: new Date(data.timestamp),
        };
        setMessages((prev) => [...prev, aiMessage]);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        const errorMessage: Message = {
          id: uuidv4(),
          text: 'Sorry, there was an error processing your request. Please try again.',
          isUser: false,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, errorMessage]);
        setIsLoading(false);
      });
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

    // Call the API instead of the mock response
    fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: [...messages, userMessage].map(msg => ({
          id: msg.id,
          text: msg.text,
          isUser: msg.isUser,
          timestamp: msg.timestamp.toISOString()
        }))
      }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const aiMessage: Message = {
          id: data.id,
          text: data.text,
          isUser: false,
          timestamp: new Date(data.timestamp),
        };
        setMessages((prev) => [...prev, aiMessage]);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        const errorMessage: Message = {
          id: uuidv4(),
          text: 'Sorry, there was an error processing your request. Please try again.',
          isUser: false,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, errorMessage]);
        setIsLoading(false);
      });
  };

  return (
    <div className="flex flex-col h-full bg-gray-50 relative">
      {/* Chat Messages Container */}
      <div 
        id="chat-messages-container"
        className="absolute inset-0 top-0 bottom-[120px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
      >
        <div className="p-4 space-y-4 min-h-full pb-10">
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
              <h2 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">
                Hi There!
              </h2>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-4">How can I help you?</h3>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base px-2">
                Choose a prompt below or write your own to start chatting with Fluentpro AI
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
              <div className="space-y-6">
                {messages.map((message) => (
                  <div key={message.id} className="my-2">
                    <ChatMessage message={message} />
                  </div>
                ))}
                {isLoading && (
                  <div className="my-2">
                    <ChatMessage message={{ id: 'loading', text: '', isUser: false, timestamp: new Date() }} loading />
                  </div>
                )}
              </div>
              <div ref={messagesEndRef} className="h-4" />
            </>
          )}
        </div>
      </div>

      {/* Bottom Input Area - Fixed Position */}
      <div className="absolute bottom-0 left-0 right-0 bg-transparent px-4 pb-4 pt-2 z-10">
        {/* Suggested Follow-up Prompts */}
        {!isLoading && !showWelcome && messages.length > 0 && !messages[messages.length - 1].isUser && (
          <div className="w-full overflow-x-auto pb-2 hide-scrollbar mb-2">
            <div className="flex space-x-3 min-w-max">
              {suggestedFollowUps.map((prompt, index) => (
                <button
                  key={index}
                  onClick={() => handlePromptClick(prompt)}
                  className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 text-sm h-auto min-h-[48px] break-words min-w-[140px] max-w-[200px] flex-shrink-0 text-left"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input Form Container */}
        <div>
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
    </div>
  );
};

export default Chatbot;