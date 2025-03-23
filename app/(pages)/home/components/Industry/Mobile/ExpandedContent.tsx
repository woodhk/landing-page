"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MobileExpandedContentProps } from '../types';
import IndustryAnimation from '../IndustryAnimation';

/**
 * Mobile expanded content for an industry
 */
const MobileExpandedContent: React.FC<MobileExpandedContentProps> = ({ industry }) => (
  <motion.div
    initial={{ opacity: 0, height: 0 }}
    animate={{ opacity: 1, height: "auto" }}
    exit={{ opacity: 0, height: 0 }}
    transition={{ duration: 0.3 }}
    className="bg-white dark:bg-gray-800 p-4 border-t border-gray-100 dark:border-gray-700"
  >
    {/* Industry Illustration/Animation */}
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 rounded-lg h-auto min-h-40 py-4 mb-4 overflow-hidden shadow-sm">
      <div className="w-full h-full flex items-center justify-center">
        <IndustryAnimation industryId={industry.id} />
      </div>
    </div>
    
    {/* Description Paragraphs */}
    {industry.description.map((paragraph: string, index: number) => (
      <p 
        key={index} 
        className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3"
      >
        {paragraph}
      </p>
    ))}

    {/* Client logos section */}
    <div className="mt-4">
      <div className="flex items-center mb-3">
        <div className="w-6 h-0.5 bg-blue-500 dark:bg-blue-400 mr-2"></div>
        <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">Proven Track Record with:</p>
      </div>
      
      {/* Client logos grid */}
      <div className="grid grid-cols-2 gap-2">
        {industry.clientLogos.map((client: {logo: string; name: string}, index: number) => (
          <div 
            key={`mobile-client-${index}`}
            className="bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-all duration-200 
              rounded-lg p-2 flex items-center justify-center border border-gray-100 dark:border-gray-700
              hover:border-blue-100 dark:hover:border-blue-900 group aspect-video"
          >
            <div className="h-8 w-full flex items-center justify-center">
              <img
                src={client.logo}
                alt={client.name}
                className="object-contain h-full max-h-8 w-auto mx-auto opacity-80 group-hover:opacity-100 transition-opacity duration-200"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

export default MobileExpandedContent;