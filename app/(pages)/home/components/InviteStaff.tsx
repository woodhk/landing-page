"use client";

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../components/ui/card';
import Button from '../../../components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

const InviteStaff = () => {
  const [remainingSpots, setRemainingSpots] = useState(34);
  const [copied, setCopied] = useState({ link: false, email: false });
  const [showTooltip, setShowTooltip] = useState('');
  const [activeTab, setActiveTab] = useState<'link' | 'email'>('link');
  const inviteLink = 'https://fluentpro.com/magic-link-j5l8k';
  const emailTemplate = `Hi team member,

I'd like to invite you to join our meeting room on FluentPro. 
Please use the following link to join:

${inviteLink}

Looking forward to collaborating with you!

Best regards,
[Your Name]`;

  const handleCopy = (type: 'link' | 'email') => {
    const textToCopy = type === 'link' ? inviteLink : emailTemplate;
    navigator.clipboard.writeText(textToCopy);
    setCopied({ ...copied, [type]: true });
    
    setTimeout(() => {
      setCopied({ ...copied, [type]: false });
    }, 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-gray-100/25 pointer-events-none" />
      
      <motion.div 
        className="relative max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Invite Staff</h1>
              <p className="text-gray-600">Share access to your workspace with team members</p>
            </div>
            <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <p className="text-sm font-medium text-gray-700">
                <span className="text-[#234BFF] font-semibold">{remainingSpots}</span> spots remaining
              </p>
            </div>
          </div>
        </motion.div>

        {/* Tabs Navigation */}
        <motion.div variants={itemVariants} className="mb-6">
          <div className="flex space-x-4 border-b border-gray-200">
            <button
              onClick={() => setActiveTab('link')}
              className={`pb-4 px-2 text-sm font-medium transition-colors relative ${
                activeTab === 'link'
                  ? 'text-[#234BFF]'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Quick Share
              {activeTab === 'link' && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#234BFF]"
                />
              )}
            </button>
            <button
              onClick={() => setActiveTab('email')}
              className={`pb-4 px-2 text-sm font-medium transition-colors relative ${
                activeTab === 'email'
                  ? 'text-[#234BFF]'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Email Template
              {activeTab === 'email' && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#234BFF]"
                />
              )}
            </button>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {activeTab === 'link' ? (
            <motion.div
              key="link"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardHeader className="pb-0">
                  <CardTitle className="flex items-center gap-3 text-xl font-bold text-gray-800">
                    <div className="p-2 rounded-full bg-blue-50">
                      <svg className="w-5 h-5 text-[#234BFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                    </div>
                    Magic Link
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="flex flex-col space-y-4">
                    <p className="text-base text-gray-600">
                      Share this link with team members for instant access to your workspace
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-center gap-3">
                      <div className="relative w-full group"
                           onMouseEnter={() => setShowTooltip('link')}
                           onMouseLeave={() => setShowTooltip('')}>
                        <div className="relative">
                          <input
                            type="text"
                            value={inviteLink}
                            readOnly
                            className="w-full pl-4 pr-10 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#234BFF]/20 focus:border-[#234BFF] text-gray-700 bg-gray-50/50"
                            onClick={() => handleCopy('link')}
                          />
                          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                          </div>
                        </div>
                        {showTooltip === 'link' && (
                          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-md shadow-lg">
                            Click to copy
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900" />
                          </div>
                        )}
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                       
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ) : (
            <motion.div
              key="email"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardHeader className="pb-0">
                  <CardTitle className="flex items-center gap-3 text-xl font-bold text-gray-800">
                    <div className="p-2 rounded-full bg-blue-50">
                      <svg className="w-5 h-5 text-[#234BFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    Email Template
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center justify-between">
                      <p className="text-base text-gray-600">
                        Use this template for a professional email invitation
                      </p>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        Customizable
                      </span>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row items-start gap-3">
                      <div className="relative w-full group"
                           onMouseEnter={() => setShowTooltip('email')}
                           onMouseLeave={() => setShowTooltip('')}>
                        <textarea
                          value={emailTemplate}
                          readOnly
                          rows={8}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#234BFF]/20 focus:border-[#234BFF] text-gray-700 font-mono text-sm bg-gray-50/50"
                          onClick={() => handleCopy('email')}
                        />
                        {showTooltip === 'email' && (
                          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-md shadow-lg">
                            Click to copy
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900" />
                          </div>
                        )}
                      </div>
                      <div className="self-start">
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button 
                            text={copied.email ? "Copied!" : "Copy Template"} 
                            primary={true}
                            size="medium"
                            onClick={() => handleCopy('email')}
                          />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Success Notification */}
        <AnimatePresence>
          {(copied.link || copied.email) && (
            <motion.div
              className="fixed bottom-4 right-4 bg-gray-900 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-2"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Copied to clipboard</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default InviteStaff; 