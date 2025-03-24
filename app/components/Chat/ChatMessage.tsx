"use client";

import { MessageItem, ContentItem } from './ChatContext';

interface ChatMessageProps {
  message: MessageItem;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';

  const renderContent = () => {
    if (typeof message.content === 'string') {
      return <p className="text-sm">{message.content}</p>;
    }
    
    return message.content.map((item: ContentItem, index: number) => (
      <div key={index}>
        {item.text && <p className="text-sm">{item.text}</p>}
        {/* Could add annotation handling here if needed */}
      </div>
    ));
  };

  return (
    <div
      className={`flex ${
        isUser ? 'justify-end' : 'justify-start'
      } mb-2`}
    >
      <div
        className={`rounded-lg px-4 py-2 max-w-[80%] ${
          isUser
            ? 'bg-blue-600 text-white rounded-br-none'
            : 'bg-gray-200 text-gray-900 rounded-bl-none'
        }`}
      >
        {renderContent()}
      </div>
    </div>
  );
}
