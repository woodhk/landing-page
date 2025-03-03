'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export const InviteStaff = () => {
  const [activeTab, setActiveTab] = useState<'quick' | 'email'>('quick');
  const [isCopied, setIsCopied] = useState(false);
  const magicLink = 'https://fluentpro.com/magic-link-j5i8k';

  const handleCopy = () => {
    navigator.clipboard.writeText(magicLink).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-white p-6 relative">
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
        className="w-full max-w-[500px] bg-white rounded-lg shadow-sm relative z-10"
      >
        {/* Header - Compact */}
        <div className="px-5 pt-4 pb-2">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-900">Invite Your Team</h2>
            <div className="flex items-center">
              <div className="flex -space-x-2 mr-2">
                {["JD", "TR", "KM"].map((initials, i) => (
                  <div 
                    key={i} 
                    className="w-6 h-6 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center text-[10px] text-white font-medium"
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <span className="text-xs font-medium px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full whitespace-nowrap">
                +31 spots
              </span>
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-0.5 text-left">Collaborate with your team members</p>
        </div>
        
        {/* Tabs - Compact */}
        <div className="border-b border-gray-200">
          <div className="flex">
            <button
              onClick={() => setActiveTab('quick')}
              className={`relative py-2 px-4 text-sm font-medium flex-1 ${
                activeTab === 'quick'
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Link Sharing
              {activeTab === 'quick' && (
                <motion.div 
                  layoutId="tab-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                  initial={false}
                />
              )}
            </button>
            <button
              onClick={() => setActiveTab('email')}
              className={`relative py-2 px-4 text-sm font-medium flex-1 ${
                activeTab === 'email'
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Email Invites
              {activeTab === 'email' && (
                <motion.div 
                  layoutId="tab-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                  initial={false}
                />
              )}
            </button>
          </div>
        </div>
        
        {/* Content - Compact */}
        <div className="p-4">
          <AnimatePresence mode="wait">
            {activeTab === 'quick' ? (
              <motion.div 
                key="quick"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="w-full"
              >
                <div className="flex items-start mb-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <h3 className="text-base font-medium text-gray-900">Magic Link</h3>
                    <p className="text-xs text-gray-500">Share a secure link that provides immediate access</p>
                  </div>
                </div>
                
                <motion.div 
                  variants={itemVariants}
                  className="w-full flex items-center space-x-2 mb-3"
                >
                  <input
                    type="text"
                    value={magicLink}
                    readOnly
                    className="flex-1 py-2 px-3 rounded-md text-sm bg-gray-50 border border-gray-200"
                  />
                  <button
                    onClick={handleCopy}
                    className="px-3 py-2 bg-white border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    {isCopied ? (
                      <motion.span 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        Copied!
                      </motion.span>
                    ) : 'Copy'}
                  </button>
                </motion.div>
                
                <motion.button 
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 flex items-center justify-center transition-colors"
                >
                  <svg className="w-3.5 h-3.5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  Share via Message
                </motion.button>
              </motion.div>
            ) : (
              <motion.div 
                key="email"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="h-[120px] flex flex-col items-center justify-center text-gray-400 space-y-1"
              >
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="text-xs">Email templates coming soon</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}; 