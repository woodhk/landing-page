"use client";

import { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import { useChat } from './ChatContext';
import { v4 as uuidv4 } from 'uuid';
import { ToolsPanel } from './ToolsPanel';

export function ChatInput() {
  const [input, setInput] = useState('');
  const { addMessage, setIsLoading, toolsEnabled, webSearchEnabled, conversationItems, setConversationItems } = useChat();
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Auto-focus the input when the component mounts
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Create user message with the new format
    const userMessage = {
      type: "message" as const,
      role: 'user' as const,
      id: uuidv4(),
      content: [{
        type: "input_text" as const,
        text: input.trim()
      }]
    };

    // Add user message to chat
    addMessage(userMessage);
    setInput('');

    // Update conversation items for API
    const apiUserMessage = {
      role: 'user',
      content: input.trim()
    };
    const updatedConversationItems = [...conversationItems, apiUserMessage];
    setConversationItems(updatedConversationItems);

    setIsLoading(true);

    try {
      // Prepare tools config
      const tools = [];
      if (toolsEnabled) {
        tools.push({
          type: "function"
        });
      }
      if (webSearchEnabled) {
        tools.push({
          type: "web_search"
        });
      }
      
      // Call the API with the updated format
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: updatedConversationItems,
          tools: tools.length > 0 ? tools : undefined
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch response');
      }

      // Process the streaming response
      const reader = response.body?.getReader();
      if (!reader) return;

      // Read the stream
      const decoder = new TextDecoder();
      let responseText = '';
      
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        
        const chunk = decoder.decode(value, { stream: true });
        responseText += chunk;
        
        // Handle streaming display updates here if needed
      }
      
      // Add the assistant's response
      addMessage({
        type: "message",
        role: 'assistant',
        id: uuidv4(),
        content: [{
          type: "output_text",
          text: responseText
        }]
      });
      
      // Update conversation items
      setConversationItems([...updatedConversationItems, {
        role: 'assistant',
        content: responseText
      }]);
    } catch (error) {
      console.error('Error:', error);
      
      // Display error message to user
      addMessage({
        type: "message",
        role: 'assistant',
        id: uuidv4(),
        content: [{
          type: "output_text",
          text: "Sorry, I encountered an error. Please try again."
        }]
      });
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
    <form onSubmit={handleSubmit} className="border-t border-gray-200 bg-white p-4">
      <div className="flex rounded-lg border border-gray-300 bg-white overflow-hidden shadow-sm hover:shadow transition-shadow duration-200">
        <textarea
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          className="flex-1 resize-none border-0 px-4 py-3 focus:outline-none text-sm h-10 max-h-40 min-h-10"
          rows={1}
          style={{ height: 'auto' }}
        />
        <div className="flex items-center pr-3">
          <ToolsPanel />
          <button
            type="submit"
            disabled={!input.trim()}
            className="ml-2 flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 p-2.5 rounded-full text-white hover:from-blue-600 hover:to-blue-700 disabled:opacity-50 disabled:from-blue-400 disabled:to-blue-400 transition-all"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </form>
  );
}
