"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { industryData } from '../../../data/industry';
import { DesktopIndustryListProps } from '../types';
import { getDesktopIndustryIconClass, getDesktopIndustryTextClass } from '../utils/industryUtils';
import IndustryIcon from '../IndustryIcon';

/**
 * Desktop industry list component
 */
const DesktopIndustryList: React.FC<DesktopIndustryListProps> = ({ 
  selectedIndustry, 
  onIndustryClick 
}) => (
  <div className="hidden sm:block space-y-3 bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-sm">
    {industryData.map((industry, idx) => (
      <motion.div 
        key={industry.id} 
        className={`border-b border-gray-200 dark:border-gray-700 pb-3 ${idx === industryData.length - 1 ? 'border-0' : ''}`}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: idx * 0.05 }}
      >
        <button
          onClick={() => onIndustryClick(industry.id)}
          className={`flex items-center w-full text-left transition-all duration-200 rounded-lg p-3 ${
            selectedIndustry === industry.id 
              ? 'bg-blue-50 dark:bg-blue-900/20' 
              : 'hover:bg-gray-50 dark:hover:bg-gray-700/30'
          }`}
        >
          {/* Industry Icon */}
          <div className={`h-10 sm:h-12 w-10 sm:w-12 rounded-full flex-shrink-0 flex items-center justify-center mr-3 sm:mr-4 ${
            getDesktopIndustryIconClass(industry.id, selectedIndustry)
          }`}>
            <IndustryIcon industryId={industry.id} />
          </div>
          <span className={`text-base sm:text-lg ${
            getDesktopIndustryTextClass(industry.id, selectedIndustry)
          }`}>
            {industry.name}
          </span>
        </button>
      </motion.div>
    ))}
  </div>
);

export default DesktopIndustryList; 