"use client";

import { ChatProvider } from './ChatContext';
import { ChatButton } from './ChatButton';
import { ChatWindow } from './ChatWindow';

export function Chatbot() {
  return (
    <ChatProvider>
      <ChatButton />
      <ChatWindow />
    </ChatProvider>
  );
}

export * from './ChatContext';
export * from './ChatWindow';
export * from './ChatButton';
export * from './ChatInput';
export * from './ChatMessage';
export * from './ToolCall';
export * from './ToolsPanel';
export * from './VectorStoreSetup';
export * from './FluentProSetupPage'; 