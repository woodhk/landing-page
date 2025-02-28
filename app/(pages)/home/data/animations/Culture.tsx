'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const CulturalAwarenessAnimation = () => {
  const [animationState, setAnimationState] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const feedbackRef = useRef<HTMLDivElement>(null);
  
  // Reset the animation after it completes
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (animationState === 4) {
      // Wait 12 seconds at the end before restarting
      timer = setTimeout(() => {
        setAnimationKey(prev => prev + 1);
        setAnimationState(0);
        // Scroll back to top when restarting
        if (containerRef.current) {
          containerRef.current.scrollTop = 0;
        }
      }, 20000);
    }
    
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [animationState]);

  // Auto-scroll to feedback when it appears
  useEffect(() => {
    if (animationState === 3 && feedbackRef.current && containerRef.current) {
      // Wait a small amount for the animation to start
      const timer = setTimeout(() => {
        const scrollOptions = {
          top: feedbackRef.current?.offsetTop,
          behavior: 'smooth' as ScrollBehavior
        };
        containerRef.current?.scrollTo(scrollOptions);
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [animationState]);

  // Advance to next animation step
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
    <div 
      ref={containerRef}
      className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700 max-w-sm w-full h-[500px] flex flex-col relative overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
      {/* Header */}
      <div className="mb-5 pb-3 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-600 dark:text-green-300 mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900 dark:text-white">GlobalBridge</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Cultural Intelligence Advisor</p>
          </div>
        </div>
      </div>
      
      {/* Chatbot conversation - fill space with scrollbar */}
      <div className="space-y-3 flex-grow" key={animationKey}>
        {/* AI message */}
        <motion.div 
          className="bg-green-50 dark:bg-green-900/30 p-3 rounded-lg rounded-tl-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-sm text-gray-700 dark:text-gray-200">
            How would you introduce yourself to a business contact in Hong Kong during a networking event?
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
                Hi, I'm David. Nice to meet you! Here's my business card. I'm running a tech company that's looking to expand in Asia.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* AI thinking animation */}
        <AnimatePresence>
          {animationState === 2 && (
            <motion.div 
              className="bg-green-50 dark:bg-green-900/30 p-3 rounded-lg rounded-tl-none flex items-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex space-x-1.5">
                <motion.div 
                  className="w-2 h-2 rounded-full bg-green-500 dark:bg-green-400"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 1, 
                    ease: "easeInOut",
                    delay: 0 
                  }}
                />
                <motion.div 
                  className="w-2 h-2 rounded-full bg-green-500 dark:bg-green-400"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 1, 
                    ease: "easeInOut",
                    delay: 0.2 
                  }}
                />
                <motion.div 
                  className="w-2 h-2 rounded-full bg-green-500 dark:bg-green-400"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 1, 
                    ease: "easeInOut",
                    delay: 0.4 
                  }}
                />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 ml-2">Analyzing cultural context...</p>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* AI feedback with cultural awareness improvement */}
        <AnimatePresence mode="wait">
          {animationState >= 3 && (
            <motion.div 
              ref={feedbackRef}
              className="bg-green-50 dark:bg-green-900/30 p-3 rounded-lg rounded-tl-none"
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
                Your introduction could better align with Hong Kong business culture:
              </motion.p>
              
              {/* Before and After Comparison with Cultural Context */}
              <div className="space-y-3">
                {/* Original Response */}
                <motion.div 
                  className="bg-white dark:bg-gray-800 p-3 rounded-lg border border-red-200 dark:border-red-800"
                  initial={{ opacity: 0, scale: 0.98, x: -10 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="flex items-center mb-1">
                    <div className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 text-red-500">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-xs text-red-600 dark:text-red-400 font-medium">Current Approach</p>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-200">
                    Hi, I'm David. Nice to meet you! Here's my business card. I'm running a tech company that's looking to expand in Asia.
                  </p>
                  <div className="mt-2 text-xs text-red-600 dark:text-red-400">
                    <span className="inline-block px-1 py-0.5 bg-red-100 dark:bg-red-900/30 rounded mr-1 mb-1">Card etiquette</span>
                    <span className="inline-block px-1 py-0.5 bg-red-100 dark:bg-red-900/30 rounded mr-1 mb-1">Missing titles</span>
                    <span className="inline-block px-1 py-0.5 bg-red-100 dark:bg-red-900/30 rounded mr-1 mb-1">Too direct</span>
                  </div>
                </motion.div>
                
                {/* Cultural Context Card */}
                <motion.div
                  className="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg border border-amber-200 dark:border-amber-800"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <div className="flex items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-amber-500 mr-2">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd" />
                    </svg>
                    <p className="text-xs font-medium text-amber-700 dark:text-amber-400">Hong Kong Business Culture Context</p>
                  </div>
                  <ul className="text-xs text-amber-700 dark:text-amber-400 space-y-1.5 pl-6 list-disc">
                    <li>Business cards (name cards) should be exchanged with both hands</li>
                    <li>Hierarchy and titles are important in introductions</li>
                    <li>Building relationships before business is essential</li>
                    <li>Blend of Western and Chinese business practices</li>
                  </ul>
                </motion.div>
                
                {/* Improved Response */}
                <motion.div 
                  className="bg-white dark:bg-gray-800 p-3 rounded-lg border border-green-200 dark:border-green-800"
                  initial={{ opacity: 0, scale: 0.98, x: 10 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <div className="flex items-center mb-1">
                    <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 text-green-500">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-xs text-green-600 dark:text-green-400 font-medium">Culturally Aware Approach</p>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-200">
                    "Hello, I'm <span className="text-green-600 dark:text-green-400">David Chen, Technical Director</span> at InnoTech. It's a pleasure to meet you. <span className="text-green-600 dark:text-green-400">May I present my card</span>." [Offers card with both hands and slight bow] "<span className="text-green-600 dark:text-green-400">I'm interested in learning more about the business environment in Hong Kong</span>, as we're exploring potential partnerships in the region."
                  </p>
                  <div className="mt-2 text-xs text-green-600 dark:text-green-400">
                    <span className="inline-block px-1 py-0.5 bg-green-100 dark:bg-green-900/30 rounded mr-1 mb-1">Proper card exchange</span>
                    <span className="inline-block px-1 py-0.5 bg-green-100 dark:bg-green-900/30 rounded mr-1 mb-1">Includes title</span>
                    <span className="inline-block px-1 py-0.5 bg-green-100 dark:bg-green-900/30 rounded mr-1 mb-1">Relationship focused</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CulturalAwarenessAnimation;