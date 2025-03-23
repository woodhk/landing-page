"use client";

import React from 'react';
import { motion } from 'framer-motion';

/**
 * Section header with title and description
 */
const SectionHeader: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="text-center sm:text-left"
  >
    <div className="inline-flex items-center px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 shadow-sm mb-3 sm:mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
      </svg>
      Industry-Specific Solutions
    </div>
    <h2 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 leading-tight">
      Customized Courses For <span className="text-blue-600 dark:text-blue-400">Your Industry</span>
    </h2>
    <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto sm:mx-0 leading-relaxed">
      From hospitality to finance, HR to sales, we offer scenario-based courses 
      tailored to each job role. If your industry isn't covered, our language experts 
      will <span className="font-bold text-dynamic-blue">create a custom course for free.</span>
    </p>
  </motion.div>
);

export default SectionHeader; 