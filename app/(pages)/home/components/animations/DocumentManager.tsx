'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface Document {
  id: number;
  name: string;
  type: string;
}

export const DocumentManager = () => {
  const [documents] = useState<Document[]>([
    { id: 1, name: 'Company Handbook', type: 'Marketing' },
    { id: 2, name: 'Product Handbook', type: 'Sales' },
  ]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-white p-3 md:p-6 relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[#f8fafc]">
        <div className="w-full h-full" style={{ 
          backgroundImage: 'linear-gradient(to right, #E2E8F0 1px, transparent 1px), linear-gradient(to bottom, #E2E8F0 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}></div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-[520px] bg-white rounded-2xl shadow-lg shadow-slate-200/50 overflow-hidden relative z-10"
      >
        {/* Header Section */}
        <div className="px-4 md:px-6 py-3 md:py-5 border-b border-slate-100">
          <div className="flex items-center justify-between mb-1">
            <h2 className="text-base md:text-xl font-semibold text-slate-800">Manage Documents</h2>
            <span className="px-2 py-0.5 md:px-2.5 md:py-1 bg-amber-50 text-amber-600 text-xs md:text-sm font-medium rounded-full">
              {documents.length} Files
            </span>
          </div>
          <p className="text-xs md:text-sm text-slate-500 text-left">Control document access and permissions</p>
        </div>

        {/* Document List - More compact on mobile */}
        <div className="p-2 md:p-4">
          <div className="space-y-2 md:space-y-3">
            {documents.map((doc) => (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="group p-2 md:p-3 bg-white rounded-xl transition-all duration-200 border border-slate-100"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 md:space-x-3">
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-md bg-blue-50 flex items-center justify-center">
                      <svg 
                        className="w-3 h-3 md:w-4 md:h-4 text-blue-500"
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col items-start">
                      <h3 className="text-xs md:text-sm font-medium text-slate-700">{doc.name}</h3>
                      <p className="text-[10px] md:text-xs text-slate-500">PDF Document</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-1 md:space-x-2">
                    <div className="relative">
                      <button
                        className={`px-2 py-1 md:px-3 md:py-1.5 text-xs md:text-sm font-medium rounded-lg ${
                          doc.type === 'Marketing' 
                            ? 'bg-blue-50 text-blue-600' 
                            : 'bg-blue-50 text-blue-600'
                        } transition-all duration-200`}
                      >
                        {doc.type}
                      </button>
                    </div>
                    
                    <button 
                      className="p-1 md:p-1.5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                      aria-label="Delete document"
                    >
                      <svg
                        className="w-3 h-3 md:w-4 md:h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}; 