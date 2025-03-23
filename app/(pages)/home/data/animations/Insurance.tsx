'use client';

import React from 'react';
import BaseAnimation from './BaseAnimation';

/**
 * Insurance job roles that will be animated
 */
const INSURANCE_ROLES = [
  "Claims Adjusters",
  "Underwriters",
  "Insurance Agents",
  "Risk Managers",
  "Actuaries",
  "Policy Administrators"
];

/**
 * Insurance industry icon component
 */
const InsuranceIcon = () => (
  <div className="relative bg-red-100 dark:bg-red-900/50 h-10 w-10 rounded-full mx-auto flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  </div>
);

/**
 * Animation component for Insurance industry
 * Displays rotating job roles with smooth transitions
 */
export const InsuranceAnimation: React.FC = () => {
  return (
    <BaseAnimation
      items={INSURANCE_ROLES}
      color="red"
      icon={<InsuranceIcon />}
      bottomText="Job-specific courses for Insurance staff"
      decorationColors={{
        topRight: "red-200/50 dark:red-800/20",
        bottomLeft: "orange-200/50 dark:orange-800/20"
      }}
    />
  );
};

export default InsuranceAnimation;