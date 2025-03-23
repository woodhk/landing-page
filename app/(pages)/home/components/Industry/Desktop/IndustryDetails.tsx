"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { DesktopIndustryDetailsProps } from '../types';
import { formatIndustryTitle } from '../utils/industryUtils';
import DesktopClientLogos from './ClientLogos';
import IndustryAnimation from '../IndustryAnimation';

/**
 * Desktop industry details component
 */
const DesktopIndustryDetails: React.FC<DesktopIndustryDetailsProps> = ({ industry }) => (
  <div className="hidden sm:block space-y-4 sm:space-y-5 bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-sm">
    {/* Industry Title */}
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="border-b border-gray-200 dark:border-gray-700 pb-3"
    >
      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
        {formatIndustryTitle(industry.id)}
      </h3>
    </motion.div>
    
    {/* Industry Illustration/Animation */}
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 rounded-lg h-auto min-h-40 sm:min-h-52 py-4 mb-3 sm:mb-5 overflow-hidden shadow-sm"
    >
      <div className="w-full h-full flex items-center justify-center">
        <IndustryAnimation industryId={industry.id} />
      </div>
    </motion.div>
    
    {/* Description Paragraphs */}
    {industry.description.map((paragraph: string, index: number) => (
      <motion.p 
        key={index} 
        className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
      >
        {paragraph}
      </motion.p>
    ))}

    {/* Client logos section */}
    <DesktopClientLogos clientLogos={industry.clientLogos} />
  </div>
);

export default DesktopIndustryDetails;