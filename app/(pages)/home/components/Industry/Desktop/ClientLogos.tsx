"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { DesktopClientLogosProps } from '../types';

/**
 * Desktop client logos component
 */
const DesktopClientLogos: React.FC<DesktopClientLogosProps> = ({ clientLogos }) => (
  <div className="mt-6 sm:mt-8">
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.3 }}
    >
      <div className="flex items-center mb-3 sm:mb-4">
        <div className="w-6 sm:w-8 h-0.5 bg-blue-500 dark:bg-blue-400 mr-2 sm:mr-3"></div>
        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium">Proven Track Record with:</p>
      </div>
      
      {/* Client logos flex layout */}
      <div className="flex flex-wrap gap-3">
        {clientLogos.map((client, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
            className="bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-all duration-200 
              rounded-lg p-2 flex items-center justify-center border border-gray-100 dark:border-gray-700
              hover:border-blue-100 dark:hover:border-blue-900 group w-24 h-16"
          >
            <div className="h-10 w-full flex items-center justify-center">
              <img
                src={client.logo}
                alt={client.name}
                className="object-contain h-full max-h-10 w-auto mx-auto opacity-80 group-hover:opacity-100 transition-opacity duration-200"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
);

export default DesktopClientLogos; 