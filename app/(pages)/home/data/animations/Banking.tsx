'use client';

import React from 'react';
import BaseAnimation from './BaseAnimation';

/**
 * Banking job roles that will be animated
 */
const BANKING_ROLES = [
  "Accountants & Auditors",
  "Bank Tellers",
  "Investment Bankers",
  "Loan Officers",
  "Senior Executives",
  "Traders & Market Analysts",
  "Relationship Managers"
];

/**
 * Banking industry icon component
 */
const BankingIcon = () => (
  <div className="relative bg-blue-100 dark:bg-blue-900/50 h-10 w-10 rounded-full mx-auto flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
    </svg>
  </div>
);

/**
 * Animation component for Banking & Finance industry
 * Displays rotating job roles with smooth transitions
 */
export const BankingAnimation: React.FC = () => {
  return (
    <BaseAnimation
      items={BANKING_ROLES}
      color="blue"
      icon={<BankingIcon />}
      bottomText="Job-specific courses for Finance staff"
      decorationColors={{
        topRight: "blue-200/50 dark:blue-700/20",
        bottomLeft: "indigo-200/50 dark:indigo-700/20"
      }}
    />
  );
};

export default BankingAnimation;