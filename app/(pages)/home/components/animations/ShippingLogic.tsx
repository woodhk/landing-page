'use client';

import React from 'react';
import BaseAnimation from './BaseAnimation';

/**
 * Shipping & Logistics job roles that will be animated
 */
const SHIPPING_ROLES = [
  "Operations Managers",
  "Custom Brokers",
  "Supply Chain Managers",
  "Freight Forwarding",
  "Couriers"
];

/**
 * Shipping & Logistics industry icon component
 */
const ShippingLogisticsIcon = () => (
  <div className="relative bg-indigo-100 dark:bg-indigo-900/50 h-10 w-10 rounded-full mx-auto flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
    </svg>
  </div>
);

/**
 * Animation component for Shipping & Logistics industry
 * Displays rotating job roles with smooth transitions
 */
export const ShippingLogisticsAnimation: React.FC = () => {
  return (
    <BaseAnimation
      items={SHIPPING_ROLES}
      color="indigo"
      icon={<ShippingLogisticsIcon />}
      bottomText="Job-specific courses for Logistics staff"
      decorationColors={{
        topRight: "indigo-200/50 dark:indigo-700/20",
        bottomLeft: "purple-200/50 dark:purple-700/20"
      }}
    />
  );
};

export default ShippingLogisticsAnimation;