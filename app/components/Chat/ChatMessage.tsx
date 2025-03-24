"use client";

import { MessageItem, ContentItem } from './ChatContext';

interface ChatMessageProps {
  message: MessageItem;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';

  const renderContent = () => {
    if (typeof message.content === 'string') {
      return <p className="text-sm leading-relaxed">{message.content}</p>;
    }
    
    return message.content.map((item: ContentItem, index: number) => (
      <div key={index}>
        {item.text && <p className="text-sm leading-relaxed">{item.text}</p>}
        {/* Could add annotation handling here if needed */}
      </div>
    ));
  };

  return (
    <div
      className={`flex ${
        isUser ? 'justify-end' : 'justify-start'
      } mb-3`}
    >
      <div
        className={`rounded-lg px-4 py-3 max-w-[85%] shadow-sm ${
          isUser
            ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-br-none'
            : 'bg-white text-gray-800 rounded-bl-none border border-gray-200'
        }`}
      >
        {renderContent()}
      </div>
    </div>
  );
}
