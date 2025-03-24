"use client";

import { createContext, useContext, useState, ReactNode, useCallback } from 'react';

// Content types from responses implementation
export interface ContentItem {
  type: "input_text" | "output_text" | "refusal" | "output_audio";
  annotations?: any[];
  text?: string;
}

// Message items for chat history
export interface MessageItem {
  type: "message";
  role: 'user' | 'assistant' | 'system';
  id?: string;
  content: ContentItem[] | string;
}

// Tool call items
export interface ToolCallItem {
  type: "tool_call";
  tool_type: "file_search_call" | "web_search_call" | "function_call";
  status: "in_progress" | "completed" | "failed" | "searching";
  id: string;
  name?: string | null;
  call_id?: string;
  arguments?: string;
  parsedArguments?: any;
  output?: string | null;
}

// Combined item type for chat display
export type Item = MessageItem | ToolCallItem;

type ChatContextType = {
  messages: Item[];
  addMessage: (message: Item) => void;
  isOpen: boolean;
  toggleChat: () => void;
  closeChat: () => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  toolsEnabled: boolean;
  setToolsEnabled: (enabled: boolean) => void;
  webSearchEnabled: boolean;
  setWebSearchEnabled: (enabled: boolean) => void;
  conversationItems: any[];
  setConversationItems: (items: any[]) => void;
};

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<Item[]>([
    {
      type: "message",
      role: 'assistant',
      content: [{ type: "output_text", text: "How can I help?" }],
    },
  ]);
  
  const [conversationItems, setConversationItems] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [toolsEnabled, setToolsEnabled] = useState(true);
  const [webSearchEnabled, setWebSearchEnabled] = useState(false);

  const addMessage = useCallback((message: Item) => {
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
        toolsEnabled,
        setToolsEnabled,
        webSearchEnabled,
        setWebSearchEnabled,
        conversationItems,
        setConversationItems,
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
