'use client';

import React from 'react';
import BaseAnimation from './BaseAnimation';

/**
 * Other industries that will be animated
 */
const OTHER_INDUSTRIES = [
  "Retail",
  "Hotels",
  "Telecommunications",
  "Public Services",
  "Government",
  "Trading",
  "Travel"
];

/**
 * Industry icon component
 */
const YourIndustryIcon = () => (
  <div className="relative bg-amber-100 dark:bg-amber-900/50 h-10 w-10 rounded-full mx-auto flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  </div>
);

/**
 * Animation component for "Your Industry" section
 * Displays rotating industries with smooth transitions
 */
export const YourIndustryAnimation: React.FC = () => {
  return (
    <BaseAnimation
      items={OTHER_INDUSTRIES}
      color="amber"
      icon={<YourIndustryIcon />}
      bottomText="Custom courses for any industry"
      decorationColors={{
        topRight: "amber-200/50 dark:amber-700/20",
        bottomLeft: "cyan-200/50 dark:cyan-700/20"
      }}
    />
  );
};

export default YourIndustryAnimation;