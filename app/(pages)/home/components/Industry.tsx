"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { industryData } from '../data/industry';

const Industry: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(industryData[0].id);

  // Find the currently selected industry data
  const currentIndustry = industryData.find(
    industry => industry.id === selectedIndustry
  ) || industryData[0];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 shadow-sm mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
            </svg>
            Industry-Specific Solutions
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Customized Courses For <span className="text-blue-600 dark:text-blue-400">Your Industry</span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl leading-relaxed">
            From hospitality to finance, HR to sales, we offer scenario-based courses 
            tailored to each job role. AI then personalizes each lesson to the specific 
            language needs of staff. If your industry isn't covered, our language experts 
            will create a custom course for <span className="font-bold text-blue-600 dark:text-blue-400">free.</span>
          </p>
        </motion.div>

        {/* Main content grid - 2 columns */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Left sidebar - Industry selection */}
          <div>
            <div className="space-y-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              {industryData.map((industry, idx) => (
                <motion.div 
                  key={industry.id} 
                  className={`border-b border-gray-200 dark:border-gray-700 pb-4 ${idx === industryData.length - 1 ? 'border-0' : ''}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                >
                  <button
                    onClick={() => setSelectedIndustry(industry.id)}
                    className={`flex items-center w-full text-left transition-all duration-200 rounded-lg p-3 ${
                      selectedIndustry === industry.id 
                        ? 'bg-blue-50 dark:bg-blue-900/20' 
                        : 'hover:bg-gray-50 dark:hover:bg-gray-700/30'
                    }`}
                  >
                    {/* Industry Icon */}
                    <div className={`h-12 w-12 rounded-full ${
                      selectedIndustry === industry.id 
                        ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300' 
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400'
                    } flex-shrink-0 flex items-center justify-center mr-4`}>
                      {industry.id === "banking-finance" && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                        </svg>
                      )}
                      
                      {industry.id === "real-estate" && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      )}
                      
                      {industry.id === "shipping-logistics" && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                        </svg>
                      )}
                      
                      {industry.id === "insurance" && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      )}
                      
                      {industry.id === "more" && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                      )}
                    </div>
                    <span className={`text-lg ${
                      selectedIndustry === industry.id 
                        ? 'font-semibold text-blue-600 dark:text-blue-400' 
                        : 'font-medium text-gray-700 dark:text-gray-300'
                    }`}>
                      {industry.name}
                    </span>
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right - Industry description */}
          <div className="space-y-5 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            {/* Industry Title */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="border-b border-gray-200 dark:border-gray-700 pb-3"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {currentIndustry.id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' & ')}
              </h3>
            </motion.div>
            
            {/* Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 rounded-lg h-36 mb-5 overflow-hidden shadow-sm"
            >
              <div className="w-full h-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600/40 dark:text-blue-400/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </motion.div>
            
            {/* Description Paragraphs */}
            {currentIndustry.description.map((paragraph, index) => (
              <motion.p 
                key={index} 
                className="text-gray-700 dark:text-gray-300 text-base leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
              >
                {paragraph}
              </motion.p>
            ))}

            {/* Client logos section - Horizontal Layout */}
            <div className="mt-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-8 h-0.5 bg-blue-500 dark:bg-blue-400 mr-3"></div>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">Proven Track Record with:</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {currentIndustry.clientLogos.map((client, index) => (
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Industry;