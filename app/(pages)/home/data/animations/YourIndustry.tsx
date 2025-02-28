'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Other industries that will be animated
const otherIndustries = [
  "Retail",
  "Hotels",
  "Telecommunications",
  "Public Services",
  "Government",
  "Trading",
  "Travel"
];

export const YourIndustryAnimation: React.FC = () => {
  const [currentIndustryIndex, setCurrentIndustryIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Change industries on a timer
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      // After fade out, change the industry and fade in again
      setTimeout(() => {
        setCurrentIndustryIndex((prev) => (prev + 1) % otherIndustries.length);
        setIsVisible(true);
      }, 400);
    }, 2500);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-0 right-0 w-16 h-16 rounded-full bg-amber-200/50 dark:bg-amber-700/20"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.7, 0.9, 0.7]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-20 h-20 rounded-full bg-cyan-200/50 dark:bg-cyan-700/20"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      {/* Glass card effect */}
      <div className="relative z-10 w-full max-w-xs bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-4 pb-3 shadow-lg border border-gray-100/50 dark:border-gray-700/50">
        {/* Industries icon */}
        <div className="mb-3 relative">
          <div className="relative bg-amber-100 dark:bg-amber-900/50 h-10 w-10 rounded-full mx-auto flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
        </div>
        
        {/* Industry name animation */}
        <div className="text-center h-14 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {isVisible && (
              <motion.div
                key={currentIndustryIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ 
                  duration: 0.5, 
                  ease: [0.22, 1, 0.36, 1] // Custom cubic-bezier for smooth animation
                }}
                className="absolute w-full"
              >
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100 px-4">
                  {otherIndustries[currentIndustryIndex]}
                </h3>
                {/* Simple underline - no animation */}
                <div className="h-0.5 w-16 bg-amber-500/70 dark:bg-amber-400/70 mx-auto mt-2" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Progress indicators - fixed size */}
        <div className="flex justify-center gap-1 mt-2">
          {otherIndustries.map((_, index) => (
            <div
              key={index}
              className={`h-1.5 w-2 rounded-full ${index === currentIndustryIndex ? 'bg-amber-500 dark:bg-amber-400' : 'bg-gray-300 dark:bg-gray-600'}`}
            />
          ))}
        </div>
        
        {/* Bottom text - no animation */}
        <p className="text-xs text-center text-gray-600 dark:text-gray-300 mt-3">
          Custom courses for any industry
        </p>
      </div>
    </div>
  );
};

export default YourIndustryAnimation;