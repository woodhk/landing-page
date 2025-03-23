'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Props for the BaseAnimation component
 */
export interface BaseAnimationProps {
  /**
   * List of roles or industries to cycle through
   */
  items: string[];
  
  /**
   * Primary color theme (e.g., 'blue', 'green', 'red', etc.)
   */
  color: string;
  
  /**
   * Icon component to display
   */
  icon: React.ReactNode;
  
  /**
   * Bottom text description
   */
  bottomText: string;
  
  /**
   * Background decoration colors, top right and bottom left
   */
  decorationColors?: {
    topRight: string;
    bottomLeft: string;
  };
}

/**
 * Base animation component that can be reused across different industry animations
 * Handles cycling through items with smooth transitions
 */
export const BaseAnimation: React.FC<BaseAnimationProps> = ({
  items,
  color,
  icon,
  bottomText,
  decorationColors = {
    topRight: `${color}-200/50 dark:${color}-700/20`,
    bottomLeft: `indigo-200/50 dark:indigo-700/20`
  }
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Effect to rotate through items
  useEffect(() => {
    const DISPLAY_DURATION = 2500; // ms to display each item
    const TRANSITION_DURATION = 400; // ms for fade transition
    
    const interval = setInterval(() => {
      setIsVisible(false);
      
      // After fade out, change the item and fade in again
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
        setIsVisible(true);
      }, TRANSITION_DURATION);
    }, DISPLAY_DURATION);
    
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <BackgroundDecorations 
        topRightColor={decorationColors.topRight}
        bottomLeftColor={decorationColors.bottomLeft}
      />
      
      {/* Content card */}
      <div className="relative z-10 w-full max-w-xs bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-4 pb-3 shadow-lg border border-gray-100/50 dark:border-gray-700/50">
        {/* Icon */}
        <div className="mb-3 relative">
          {icon}
        </div>
        
        {/* Title animation */}
        <AnimatedTitle 
          items={items} 
          currentIndex={currentIndex}
          isVisible={isVisible}
          color={color}
        />
        
        {/* Progress indicators */}
        <ProgressIndicators 
          totalItems={items.length} 
          currentIndex={currentIndex}
          color={color}
        />
        
        {/* Bottom text */}
        <p className="text-xs text-center text-gray-600 dark:text-gray-300 mt-3">
          {bottomText}
        </p>
      </div>
    </div>
  );
};

/**
 * Background decorative animated elements
 */
interface BackgroundDecorationsProps {
  topRightColor: string;
  bottomLeftColor: string;
}

const BackgroundDecorations: React.FC<BackgroundDecorationsProps> = ({
  topRightColor,
  bottomLeftColor
}) => (
  <>
    <motion.div 
      className={`absolute top-0 right-0 w-16 h-16 rounded-full bg-${topRightColor}`}
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
      className={`absolute bottom-0 left-0 w-20 h-20 rounded-full bg-${bottomLeftColor}`}
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
  </>
);

/**
 * Animated title component
 */
interface AnimatedTitleProps {
  items: string[];
  currentIndex: number;
  isVisible: boolean;
  color: string;
}

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ 
  items, 
  currentIndex, 
  isVisible,
  color
}) => (
  <div className="text-center h-14 flex items-center justify-center">
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          key={currentIndex}
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
            {items[currentIndex]}
          </h3>
          {/* Underline */}
          <div className={`h-0.5 w-16 bg-${color}-500/70 dark:bg-${color}-400/70 mx-auto mt-2`} />
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

/**
 * Progress indicators component
 */
interface ProgressIndicatorsProps {
  totalItems: number;
  currentIndex: number;
  color: string;
}

export const ProgressIndicators: React.FC<ProgressIndicatorsProps> = ({ 
  totalItems, 
  currentIndex,
  color
}) => (
  <div className="flex justify-center gap-1 mt-2">
    {Array.from({ length: totalItems }).map((_, index) => (
      <div
        key={index}
        className={`h-1.5 w-2 rounded-full ${
          index === currentIndex 
            ? `bg-${color}-500 dark:bg-${color}-400` 
            : 'bg-gray-300 dark:bg-gray-600'
        }`}
      />
    ))}
  </div>
);

export default BaseAnimation; 