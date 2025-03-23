"use client";

import { ChatProvider } from './ChatContext';
import { ChatButton } from './ChatButton';
import { ChatWindow } from './ChatWindow';

export function ChatUI() {
  return (
    <ChatProvider>
      <ChatButton />
      <ChatWindow />
    </ChatProvider>
  );
}

export { ChatProvider, useChat } from './ChatContext';
