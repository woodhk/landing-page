"use client";

import { useState } from 'react';
import { Settings } from 'lucide-react';
import { useToolSettings } from './ChatContext';

export function ToolsPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const { 
    functionsEnabled, setFunctionsEnabled, 
    webSearchEnabled, setWebSearchEnabled
  } = useToolSettings();

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center h-6 w-6 text-gray-500 hover:text-gray-700 focus:outline-none"
        aria-label="Open tools settings"
      >
        <Settings className="h-4 w-4" />
      </button>

      {isOpen && (
        <div className="absolute bottom-full right-0 mb-2 w-56 rounded-md border border-gray-200 bg-white p-3 shadow-lg">
          <h4 className="mb-2 text-sm font-medium text-gray-900">Tools Settings</h4>
          
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={functionsEnabled}
                onChange={(e) => setFunctionsEnabled(e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">Enable Function Calls</span>
            </label>
            
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={webSearchEnabled}
                onChange={(e) => setWebSearchEnabled(e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">Enable Web Search</span>
            </label>
          </div>
          
          <div className="mt-3 pt-2 text-xs text-gray-500 border-t border-gray-200">
            <p>FluentPro knowledge is automatically enabled to provide accurate responses.</p>
            <p className="mt-1">If the AI doesn't have an answer, it will direct you to contact support@languagekey.com.</p>
          </div>
        </div>
      )}
    </div>
  );
} 