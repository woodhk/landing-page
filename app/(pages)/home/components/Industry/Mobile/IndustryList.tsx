"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { industryData } from '../../../data/industry';
import { MobileIndustryListProps } from '../types';
import { getMobileIndustryHeaderClass, getMobileIndustryIconClass } from '../utils/industryUtils';
import MobileExpandedContent from './ExpandedContent';
import IndustryIcon from '../IndustryIcon';

/**
 * Mobile view industry list component
 */
const MobileIndustryList: React.FC<MobileIndustryListProps> = ({ 
  expandedIndustry, 
  industryRefs, 
  onIndustryClick 
}) => (
  <div className="block sm:hidden space-y-3">
    {industryData.map((industry, idx) => (
      <motion.div 
        key={`mobile-${industry.id}`}
        className="w-full"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: idx * 0.05 }}
        ref={(el: HTMLDivElement | null) => {
          if (industryRefs.current) {
            industryRefs.current[industry.id] = el;
          }
        }}
      >
        <div className="rounded-lg overflow-hidden shadow-sm">
          {/* Industry Header/Button */}
          <button
            onClick={() => onIndustryClick(industry.id)}
            className={`flex items-center w-full text-left transition-all duration-200 p-3 ${
              getMobileIndustryHeaderClass(industry.id, expandedIndustry)
            }`}
          >
            {/* Industry Icon */}
            <div className={`h-10 w-10 rounded-full flex-shrink-0 flex items-center justify-center mr-3 ${
              getMobileIndustryIconClass(industry.id, expandedIndustry)
            }`}>
              <IndustryIcon industryId={industry.id} />
            </div>
            <span className="text-base font-medium flex-grow">
              {industry.name}
            </span>
            {/* Expand/Collapse Icon */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-5 w-5 transition-transform duration-200 transform ${expandedIndustry === industry.id ? 'rotate-90' : ''}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Expandable Content */}
          {expandedIndustry === industry.id && (
            <MobileExpandedContent industry={industry} />
          )}
        </div>
      </motion.div>
    ))}
  </div>
);

export default MobileIndustryList; 