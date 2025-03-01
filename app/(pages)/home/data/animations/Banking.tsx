'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Banking job roles that will be animated
const bankingRoles = [
  "Accountants & Auditors",
  "Bank Tellers",
  "Investment Bankers",
  "Loan Officers",
  "Senior Executives",
  "Traders & Market Analysts",
  "Relationship Managers"
];

export const BankingAnimation: React.FC = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Change roles on a timer
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      // After fade out, change the role and fade in again
      setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % bankingRoles.length);
        setIsVisible(true);
      }, 400);
    }, 2500);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-0 right-0 w-16 h-16 rounded-full bg-blue-200/50 dark:bg-blue-700/20"
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
        className="absolute bottom-0 left-0 w-20 h-20 rounded-full bg-indigo-200/50 dark:bg-indigo-700/20"
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
        {/* Banking icon - removed pulse effect */}
        <div className="mb-3 relative">
          <div className="relative bg-blue-100 dark:bg-blue-900/50 h-10 w-10 rounded-full mx-auto flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
            </svg>
          </div>
        </div>
        
        {/* Job title animation */}
        <div className="text-center h-14 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {isVisible && (
              <motion.div
                key={currentRoleIndex}
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
                  {bankingRoles[currentRoleIndex]}
                </h3>
                {/* Simple underline - no animation */}
                <div className="h-0.5 w-16 bg-blue-500/70 dark:bg-blue-400/70 mx-auto mt-2" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Progress indicators - fixed size */}
        <div className="flex justify-center gap-1 mt-2">
          {bankingRoles.map((_, index) => (
            <div
              key={index}
              className={`h-1.5 w-2 rounded-full ${index === currentRoleIndex ? 'bg-blue-500 dark:bg-blue-400' : 'bg-gray-300 dark:bg-gray-600'}`}
            />
          ))}
        </div>
        {/* Bottom text - no animation */}
        <p className="text-xs text-center text-gray-600 dark:text-gray-300 mt-3">
          Job-specific courses for Finance staff
        </p>
      </div>
    </div>
  );
};

export default BankingAnimation;