"use client";

import { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import { useChat, useChatMessages, useConversationItems, useToolSettings } from './ChatContext';
import { v4 as uuidv4 } from 'uuid';
import { ToolsPanel } from './ToolsPanel';
import { processUserMessage } from '../lib/chat';

export function ChatInput() {
  const [input, setInput] = useState('');
  const { setIsLoading } = useChat();
  const { chatMessages, setChatMessages } = useChatMessages();
  const { conversationItems, setConversationItems } = useConversationItems();
  const { 
    functionsEnabled, 
    webSearchEnabled, 
    fileSearchEnabled,
    vectorStore
  } = useToolSettings();
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Auto-focus the input when the component mounts
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Create user message
    const userMessage = {
      type: "message" as const,
      role: 'user' as const,
      id: uuidv4(),
      content: [{
        type: "input_text" as const,
        text: input.trim()
      }]
    };

    setInput('');
    setIsLoading(true);

    try {
      // Prepare tools config
      const tools = [];
      
      // Always include the vector store if available for FluentPro queries
      if (vectorStore?.id) {
        tools.push({
          type: "file_search",
          vector_store_id: vectorStore.id
        });
        console.log("Added vector store to tools:", vectorStore.id);
      } else {
        console.log("No vector store ID available");
      }
      
      if (functionsEnabled) {
        tools.push({
          type: "function"
        });
      }
      
      if (webSearchEnabled) {
        tools.push({
          type: "web_search"
        });
      }
      
      // Process user message using the handleTurn function
      await processUserMessage(
        userMessage,
        tools.length > 0 ? tools : undefined,
        chatMessages,
        conversationItems,
        setChatMessages,
        setConversationItems
      );
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border-t border-gray-200 p-4">
      <div className="flex rounded-lg border border-gray-300 bg-white overflow-hidden">
        <textarea
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          className="flex-1 resize-none border-0 px-4 py-2 focus:outline-none text-sm h-10 max-h-40 min-h-10"
          rows={1}
          style={{ height: 'auto' }}
        />
        <div className="flex items-center pr-2">
          <ToolsPanel />
          <button
            type="submit"
            disabled={!input.trim()}
            className="ml-2 flex items-center justify-center bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700 disabled:bg-blue-300 transition-colors"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </form>
  );
} 