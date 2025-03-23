'use client';

import React from 'react';
import BaseAnimation from './BaseAnimation';

/**
 * Real Estate job roles that will be animated
 */
const REAL_ESTATE_ROLES = [
  "Leasing Agents",
  "Property Managers",
  "Sales Agents",
  "Valuers & Appraisers",
  "Brokers & Consultants"
];

/**
 * Real Estate industry icon component
 */
const RealEstateIcon = () => (
  <div className="relative bg-green-100 dark:bg-green-900/50 h-10 w-10 rounded-full mx-auto flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  </div>
);

/**
 * Animation component for Real Estate industry
 * Displays rotating job roles with smooth transitions
 */
export const RealEstateAnimation: React.FC = () => {
  return (
    <BaseAnimation
      items={REAL_ESTATE_ROLES}
      color="green"
      icon={<RealEstateIcon />}
      bottomText="Job-specific courses for Property experts"
      decorationColors={{
        topRight: "green-200/50 dark:green-700/20",
        bottomLeft: "teal-200/50 dark:teal-700/20"
      }}
    />
  );
};

export default RealEstateAnimation;