'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const IndustryJargonAnimation = () => {
  const [animationState, setAnimationState] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  
  // Reset the animation after it completes
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (animationState === 4) {
      // Wait 5 seconds at the end before restarting
      timer = setTimeout(() => {
        setAnimationKey(prev => prev + 1);
        setAnimationState(0);
      }, 5000);
    }
    
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [animationState]);

  // Advance to next animation step with smoother transitions
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (animationState === 0) {
      // Move to user response
      timer = setTimeout(() => setAnimationState(1), 2000);
    } else if (animationState === 1) {
      // Move to thinking animation
      timer = setTimeout(() => setAnimationState(2), 1500);
    } else if (animationState === 2) {
      // Move to final response
      timer = setTimeout(() => setAnimationState(3), 3000);
    } else if (animationState === 3) {
      // Animation complete
      timer = setTimeout(() => setAnimationState(4), 1000);
    }
    
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [animationState, animationKey]);

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700 max-w-sm w-full h-[500px] flex flex-col relative overflow-hidden">
      {/* Header */}
      <div className="mb-5 pb-3 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300 mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900 dark:text-white">Role-Play Practice</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Respond to the Client</p>
          </div>
        </div>
      </div>
      
      {/* Chatbot conversation - fill space without scrollbar */}
      <div className="space-y-3 flex-grow" key={animationKey}>
        {/* AI message */}
        <motion.div 
          className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg rounded-tl-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-sm text-gray-700 dark:text-gray-200">
            What is the implementation time for this project Jessica?
          </p>
        </motion.div>
        
        {/* User response - appears after delay */}
        <AnimatePresence>
          {animationState >= 1 && (
            <motion.div 
              className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg rounded-tr-none ml-auto"
              initial={{ opacity: 0, y: 15, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <p className="text-sm text-gray-700 dark:text-gray-200">
                We can get it done in about 2 weeks, I think.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* AI thinking animation - smoother dots animation */}
        <AnimatePresence>
          {animationState === 2 && (
            <motion.div 
              className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg rounded-tl-none flex items-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex space-x-1.5">
                <motion.div 
                  className="w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 1, 
                    ease: "easeInOut",
                    delay: 0 
                  }}
                />
                <motion.div 
                  className="w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 1, 
                    ease: "easeInOut",
                    delay: 0.2 
                  }}
                />
                <motion.div 
                  className="w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 1, 
                    ease: "easeInOut",
                    delay: 0.4 
                  }}
                />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 ml-2">Analyzing response...</p>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* AI feedback with industry jargon improvement - smoother appearance */}
        <AnimatePresence mode="wait">
          {animationState >= 3 && (
            <motion.div 
              className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg rounded-tl-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                ease: "easeOut",
                staggerChildren: 0.1
              }}
            >
              <motion.p 
                className="text-sm font-medium text-gray-800 dark:text-gray-100 mb-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Here's a more professional way to phrase this using industry terminology:
              </motion.p>
              <motion.div 
                className="bg-white dark:bg-gray-800 p-3 rounded-lg border border-green-200 dark:border-green-800"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <p className="text-sm text-gray-700 dark:text-gray-200">
                  "Based on our initial scope assessment, we're looking at a <span className="text-green-600 dark:text-green-400 font-medium">deployment timeline</span> of approximately 10-14 business days. This is contingent on receiving all required <span className="text-green-600 dark:text-green-400 font-medium">stakeholder inputs</span> according to our <span className="text-green-600 dark:text-green-400 font-medium">implementation roadmap</span>."
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export const DefaultAnimation = ({ description }: { description: string }) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700 max-w-sm h-[500px] flex items-center justify-center">
      <p className="text-center text-gray-600 dark:text-gray-300">
        {description}
      </p>
    </div>
  );
};