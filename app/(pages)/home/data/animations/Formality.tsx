'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const FormalityToneAnimation = () => {
  const [animationState, setAnimationState] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const feedbackRef = useRef<HTMLDivElement>(null);
  
  // Reset the animation after it completes
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (animationState === 4) {
      // Wait 5 seconds at the end before restarting
      timer = setTimeout(() => {
        setAnimationKey(prev => prev + 1);
        setAnimationState(0);
        // Scroll back to top when restarting
        if (containerRef.current) {
          containerRef.current.scrollTop = 0;
        }
      }, 10000);
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
          <div className="h-8 w-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-600 dark:text-purple-300 mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900 dark:text-white">FluentPro</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">AI ToneCoach</p>
          </div>
        </div>
      </div>
      
      {/* Chatbot conversation - fill space without scrollbar */}
      <div className="space-y-3 flex-grow" key={animationKey}>
        {/* AI message */}
        <motion.div 
          className="bg-purple-50 dark:bg-purple-900/30 p-3 rounded-lg rounded-tl-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-sm text-gray-700 dark:text-gray-200">
            How would you decline a meeting request from your manager when you have a deadline?
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
                I can't make the meeting. I have a deadline today and I'm super busy.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* AI thinking animation */}
        <AnimatePresence>
          {animationState === 2 && (
            <motion.div 
              className="bg-purple-50 dark:bg-purple-900/30 p-3 rounded-lg rounded-tl-none flex items-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex space-x-1.5">
                <motion.div 
                  className="w-2 h-2 rounded-full bg-purple-500 dark:bg-purple-400"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 1, 
                    ease: "easeInOut",
                    delay: 0 
                  }}
                />
                <motion.div 
                  className="w-2 h-2 rounded-full bg-purple-500 dark:bg-purple-400"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 1, 
                    ease: "easeInOut",
                    delay: 0.2 
                  }}
                />
                <motion.div 
                  className="w-2 h-2 rounded-full bg-purple-500 dark:bg-purple-400"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 1, 
                    ease: "easeInOut",
                    delay: 0.4 
                  }}
                />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 ml-2">Analyzing tone...</p>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* AI feedback with formality and tone improvement */}
        <AnimatePresence mode="wait">
          {animationState >= 3 && (
            <motion.div 
              ref={feedbackRef}
              className="bg-purple-50 dark:bg-purple-900/30 p-3 rounded-lg rounded-tl-none"
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
                Your response could be more formal and respectful of your manager's position:
              </motion.p>
              
              {/* Before and After Comparison */}
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
                    <p className="text-xs text-red-600 dark:text-red-400 font-medium">Current Response</p>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-200">
                    I can't make the meeting. I have this deadline today and I'm super busy.
                  </p>
                  <div className="mt-2 text-xs text-red-600 dark:text-red-400">
                    <span className="inline-block px-1 py-0.5 bg-red-100 dark:bg-red-900/30 rounded mr-1 mb-1">Too informal</span>
                    <span className="inline-block px-1 py-0.5 bg-red-100 dark:bg-red-900/30 rounded mr-1 mb-1">Lacks detail</span>
                    <span className="inline-block px-1 py-0.5 bg-red-100 dark:bg-red-900/30 rounded mr-1 mb-1">Abrupt</span>
                  </div>
                </motion.div>
                
                {/* Improved Response */}
                <motion.div 
                  className="bg-white dark:bg-gray-800 p-3 rounded-lg border border-green-200 dark:border-green-800"
                  initial={{ opacity: 0, scale: 0.98, x: 10 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <div className="flex items-center mb-1">
                    <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 text-green-500">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-xs text-green-600 dark:text-green-400 font-medium">Improved Response</p>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-200">
                    "Thank you for the meeting invitation. <span className="text-green-600 dark:text-green-400">I'm focused on completing the project deadline</span> due today. <span className="text-green-600 dark:text-green-400">Would it be possible to reschedule</span> for tomorrow morning? <span className="text-green-600 dark:text-green-400">I value your input</span> and would appreciate discussing this when I can give it my full attention."
                  </p>
                  <div className="mt-2 text-xs text-green-600 dark:text-green-400">
                    <span className="inline-block px-1 py-0.5 bg-green-100 dark:bg-green-900/30 rounded mr-1 mb-1">Professional tone</span>
                    <span className="inline-block px-1 py-0.5 bg-green-100 dark:bg-green-900/30 rounded mr-1 mb-1">Shows respect</span>
                    <span className="inline-block px-1 py-0.5 bg-green-100 dark:bg-green-900/30 rounded mr-1 mb-1">Offers alternative</span>
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

export default FormalityToneAnimation;