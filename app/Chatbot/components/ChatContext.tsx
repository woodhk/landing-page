"use client";

import { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import useConversationStore from '../stores/useConversationStore';
import useToolsStore from '../stores/useToolsStore';
import { Item } from '../lib/types';

type ChatContextType = {
  isOpen: boolean;
  toggleChat: () => void;
  closeChat: () => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
};

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggleChat = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeChat = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <ChatContext.Provider
      value={{
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

// Helper hooks to access store state alongside context
export function useChatMessages() {
  const { chatMessages, setChatMessages, addChatMessage } = useConversationStore();
  return { chatMessages, setChatMessages, addChatMessage };
}

export function useConversationItems() {
  const { conversationItems, setConversationItems, addConversationItem, clearConversation } = useConversationStore();
  return { conversationItems, setConversationItems, addConversationItem, clearConversation };
}

export function useToolSettings() {
  const { 
    functionsEnabled, setFunctionsEnabled, 
    webSearchEnabled, setWebSearchEnabled,
    fileSearchEnabled, setFileSearchEnabled,
    vectorStore, setVectorStore 
  } = useToolsStore();
  
  return { 
    functionsEnabled, setFunctionsEnabled, 
    webSearchEnabled, setWebSearchEnabled,
    fileSearchEnabled, setFileSearchEnabled,
    vectorStore, setVectorStore 
  };
} 