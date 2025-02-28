'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Insurance job roles that will be animated
const insuranceRoles = [
  "Claims Adjusters",
  "Underwriters",
  "Insurance Agents",
  "Risk Managers",
  "Actuaries",
  "Policy Administrators"
];

export const InsuranceAnimation: React.FC = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Change roles on a timer
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      // After fade out, change the role and fade in again
      setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % insuranceRoles.length);
        setIsVisible(true);
      }, 400);
    }, 2500);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-0 right-0 w-16 h-16 rounded-full bg-red-200/50 dark:bg-red-800/20"
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
        className="absolute bottom-0 left-0 w-20 h-20 rounded-full bg-orange-200/50 dark:bg-orange-800/20"
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
        {/* Insurance icon */}
        <div className="mb-3 relative">
          <div className="relative bg-red-100 dark:bg-red-900/50 h-10 w-10 rounded-full mx-auto flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
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
                  {insuranceRoles[currentRoleIndex]}
                </h3>
                {/* Simple underline - no animation */}
                <div className="h-0.5 w-16 bg-red-500/70 dark:bg-red-400/70 mx-auto mt-2" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Progress indicators - fixed size */}
        <div className="flex justify-center gap-1 mt-2">
          {insuranceRoles.map((_, index) => (
            <div
              key={index}
              className={`h-1.5 w-2 rounded-full ${index === currentRoleIndex ? 'bg-red-500 dark:bg-red-400' : 'bg-gray-300 dark:bg-gray-600'}`}
            />
          ))}
        </div>
        
        {/* Bottom text - no animation */}
        <p className="text-xs text-center text-gray-600 dark:text-gray-300 mt-3">
          Job-specific courses for insurance pros
        </p>
      </div>
    </div>
  );
};

export default InsuranceAnimation;