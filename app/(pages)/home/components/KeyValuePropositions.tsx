'use client';
// app/(pages)/home/components/KeyValuePropositions.tsx

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { keyValueData } from '../data/KeyValueProposition';
import { IndustryJargonAnimation, DefaultAnimation } from '../data/animations/IndustryJargon';

export const KeyValuePropositions = () => {
  const [activeTab, setActiveTab] = useState(keyValueData[0].id);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  const activeItem = keyValueData.find(item => item.id === activeTab);

  // Icons for each tab
  const tabIcons = {
    "industry-jargon": (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
      </svg>
    ),
    "formality-tone": (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
      </svg>
    ),
    "cultural-awareness": (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
      </svg>
    )
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute left-1/4 bottom-0 w-72 h-72 bg-blue-100 dark:bg-blue-900 rounded-full opacity-30 blur-3xl -translate-y-1/4"></div>
      <div className="absolute right-0 top-1/3 w-80 h-80 bg-indigo-100 dark:bg-indigo-900 rounded-full opacity-20 blur-3xl translate-x-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 shadow-sm mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
            </svg>
            Business Communication
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            English Training That Delivers <span className="text-blue-600 dark:text-blue-400">Real Business Results</span>, <br className="hidden md:inline" />Not Just Fixes Grammar
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            FluentPro helps staff master industry-specific language, the right tone, and cultural awareness, so they can confidently lead meetings, negotiate, and build trust in global business.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 mb-8 px-4 md:px-0">
          {keyValueData.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => handleTabChange(item.id)}
              className={`relative flex items-center w-full md:w-auto px-5 py-3 rounded-full transition-all duration-300 ${
                activeTab === item.id
                  ? 'bg-blue-600 text-white shadow-md font-medium'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className={`mr-2 ${activeTab === item.id ? 'text-white' : 'text-blue-500 dark:text-blue-400'}`}>
                {tabIcons[item.id as keyof typeof tabIcons]}
              </span>
              {item.title}
              {activeTab === item.id && (
                <motion.div
                  className="absolute inset-0 rounded-full"
                  layoutId="activeTab"
                  initial={false}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeItem && (
            <motion.div 
              key={activeItem.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-700"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left side: Text */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                  >
                    <div className="inline-flex items-center px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
                      {tabIcons[activeItem.id as keyof typeof tabIcons]}
                      <span className="ml-2">{activeItem.id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' & ')}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                      {activeItem.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {activeItem.description}
                    </p>

                    <div className="mt-8">
                      <button className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                        Learn more
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </motion.div>
                </div>
                
                {/* Right side: Animation */}
                <motion.div 
                  className="p-8 md:p-10 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 border-t md:border-t-0 md:border-l border-gray-100 dark:border-gray-700"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                >
                  {activeItem.id === "industry-jargon" ? (
                    <IndustryJargonAnimation />
                  ) : (
                    <DefaultAnimation description={activeItem.animationDescription} />
                  )}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default KeyValuePropositions;