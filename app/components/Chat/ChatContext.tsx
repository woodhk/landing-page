"use client";

import { createContext, useContext, useState, ReactNode, useCallback } from 'react';

type Message = {
  role: 'user' | 'assistant' | 'system';
  content: string;
};

type ChatContextType = {
  messages: Message[];
  addMessage: (message: Message) => void;
  isOpen: boolean;
  toggleChat: () => void;
  closeChat: () => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
};

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'How can I help?',
    },
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const addMessage = useCallback((message: Message) => {
    setMessages((prev) => [...prev, message]);
  }, []);

  const toggleChat = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeChat = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <ChatContext.Provider
      value={{
        messages,
        addMessage,
        isOpen,
        toggleChat,
        closeChat,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
}
