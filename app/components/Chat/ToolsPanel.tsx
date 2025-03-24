"use client";

import { useState } from 'react';
import { useChat } from './ChatContext';
import { Settings } from 'lucide-react';

export function ToolsPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const { toolsEnabled, setToolsEnabled, webSearchEnabled, setWebSearchEnabled } = useChat();

  // Don't render anything
  return null;
  
  /* Original component hidden
  return (
    <div className="relative">
      <button
        onClick={() => {/* Temporarily disabled */ /*}}
        className="flex items-center justify-center h-7 w-7 text-gray-500 hover:text-blue-600 hover:bg-gray-100 rounded-full transition-colors focus:outline-none"
        aria-label="Open tools settings"
      >
        <Settings className="h-4 w-4" />
      </button>

      {/* Panel temporarily hidden 
      {isOpen && (
        <div className="absolute bottom-full right-0 mb-2 w-64 rounded-lg border border-gray-200 bg-white p-4 shadow-lg">
          <h4 className="mb-3 text-sm font-semibold text-gray-900">Tools Settings</h4>
          
          <div className="space-y-3">
            <label className="flex items-center space-x-3 hover:bg-gray-50 p-1.5 rounded-md transition-colors">
              <input
                type="checkbox"
                checked={toolsEnabled}
                onChange={(e) => setToolsEnabled(e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">Enable Function Calls</span>
            </label>
            
            <label className="flex items-center space-x-3 hover:bg-gray-50 p-1.5 rounded-md transition-colors">
              <input
                type="checkbox"
                checked={webSearchEnabled}
                onChange={(e) => setWebSearchEnabled(e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">Enable Web Search</span>
            </label>
          </div>
          
          <div className="mt-3 pt-3 text-xs text-gray-500 border-t border-gray-200 italic">
            Enabling tools allows the AI to use features like web search.
          </div>
        </div>
      )}
      *//*}
    </div>
  );
  */
} 