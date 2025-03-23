'use client';
// app/(pages)/home/components/KeyValuePropositions.tsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { keyValueData } from '../data/KeyValueProposition';
import { IndustryJargonAnimation, DefaultAnimation } from './animations/IndustryJargon';
import { FormalityToneAnimation } from './animations/Formality';
import { CulturalAwarenessAnimation } from './animations/Culture';

// Tab icon mapping
const tabIcons = {
  "phrases-jargon": (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
    </svg>
  ),
  "formality-tone": (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
    </svg>
  ),
  "culture-awareness": (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
    </svg>
  )
};

export const KeyValuePropositions = () => {
  const [activeTab, setActiveTab] = useState(keyValueData[0].id);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleTabChange = (tabId: string) => {
    if (isAnimating || tabId === activeTab) return;
    
    setIsAnimating(true);
    setActiveTab(tabId);
    
    // Reset animation state after animation completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  // Get the active item data
  const activeItem = keyValueData.find(item => item.id === activeTab);

  // Determine which animation to render based on active tab
  const renderAnimation = () => {
    switch(activeItem?.id) {
      case "phrases-jargon":
        return <IndustryJargonAnimation />;
      case "formality-tone":
        return <FormalityToneAnimation />;
      case "culture-awareness":
        return <CulturalAwarenessAnimation />;
      default:
        return <DefaultAnimation description={activeItem?.animationDescription || ""} />;
    }
  };

  // Navigation helpers
  const navigateToPrevious = () => {
    const currentIndex = keyValueData.findIndex(item => item.id === activeTab);
    const prevIndex = currentIndex === 0 ? keyValueData.length - 1 : currentIndex - 1;
    handleTabChange(keyValueData[prevIndex].id);
  };

  const navigateToNext = () => {
    const currentIndex = keyValueData.findIndex(item => item.id === activeTab);
    const nextIndex = currentIndex === keyValueData.length - 1 ? 0 : currentIndex + 1;
    handleTabChange(keyValueData[nextIndex].id);
  };

  // Determine tab badge color based on tab ID
  const getTabBadgeClass = (tabId: string) => {
    switch(tabId) {
      case 'formality-tone':
        return 'bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300';
      case 'culture-awareness':
        return 'bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300';
      default:
        return 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300';
    }
  };

  // Calculate the translate value for the slider
  const getSliderTransform = () => {
    const index = keyValueData.findIndex(item => item.id === activeTab);
    return `translateX(-${index * 33.333}%)`;
  };

  // Format the tab title from ID
  const formatTabTitle = (id: string) => {
    return id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' & ');
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
          transition={{ duration: 0.1 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight text-center">
            English Training That<br />
            <span className="text-blue-600 dark:text-blue-400">Improves Team Performance</span> <br />
            <span className="text-4xl">(Not Just Grammar...)</span>
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="hidden md:flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 mb-8 px-4 md:px-0">
          {keyValueData.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => handleTabChange(item.id)}
              disabled={isAnimating}
              className={`relative flex items-center w-full md:w-auto px-5 py-3 rounded-full transition-all duration-300 ${
                activeTab === item.id
                  ? 'bg-blue-600 text-white shadow-md font-medium'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.2 }}
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
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Content with sliding animation */}
        <div className="relative min-h-[450px] overflow-hidden">
          <div 
            className="flex w-[300%] transition-transform duration-500 ease-in-out"
            style={{ transform: getSliderTransform() }}
          >
            {keyValueData.map((item) => (
              <div key={item.id} className="w-[33.333%] flex-shrink-0">
                <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] transition-shadow duration-300 m-1">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* Left side: Text */}
                    <div className="p-8 md:p-10 flex flex-col justify-center">
                      <motion.div className="relative">
                        <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4 ${getTabBadgeClass(item.id)}`}>
                          {tabIcons[item.id as keyof typeof tabIcons]}
                          <span className="ml-2">{formatTabTitle(item.id)}</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {item.description}
                        </p>

                        {/* Navigation arrows */}
                        <div className="mt-8 flex space-x-3">
                          <motion.button
                            className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 shadow-md flex items-center justify-center text-gray-600 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={navigateToPrevious}
                            disabled={isAnimating}
                            aria-label="Previous card"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </motion.button>
                          <motion.button
                            className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 shadow-md flex items-center justify-center text-gray-600 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={navigateToNext}
                            disabled={isAnimating}
                            aria-label="Next card"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                          </motion.button>
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* Right side: Animation */}
                    <div 
                      className="p-8 md:p-10 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 border-t md:border-t-0 md:border-l border-gray-100/20 dark:border-gray-700 relative"
                    >
                      {renderAnimation()}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyValuePropositions;