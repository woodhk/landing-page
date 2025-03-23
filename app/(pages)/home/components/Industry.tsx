"use client";

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { industryData } from '../data/industry';
import { BankingAnimation } from '../data/animations/Banking';
import { RealEstateAnimation } from '../data/animations/RealEstate';
import { ShippingLogisticsAnimation } from '../data/animations/ShippingLogic';
import { InsuranceAnimation } from '../data/animations/Insurance';
import { YourIndustryAnimation } from '../data/animations/YourIndustry';

const Industry: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(industryData[0].id);
  // New state to track expanded industry for mobile view
  const [expandedIndustry, setExpandedIndustry] = useState<string | null>(null);
  
  // Create refs for each industry card
  const industryRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Find the currently selected industry data
  const currentIndustry = industryData.find(
    industry => industry.id === selectedIndustry
  ) || industryData[0];

  // Handle click on industry item in mobile view
  const handleMobileIndustryClick = (industryId: string) => {
    if (expandedIndustry === industryId) {
      // If clicking on already expanded industry, collapse it
      setExpandedIndustry(null);
    } else {
      // Otherwise expand this industry and collapse others
      setExpandedIndustry(industryId);
      setSelectedIndustry(industryId);
      
      // Scroll to the selected industry card with a small delay to allow for state update
      setTimeout(() => {
        if (industryRefs.current[industryId]) {
          industryRefs.current[industryId]?.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        }
      }, 100);
    }
  };

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title - Improved for mobile */}
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

        {/* Main content grid - Responsive layout */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-start mt-8 sm:mt-10 lg:mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Left sidebar - Industry selection */}
          <div>
            {/* For mobile: vertical expandable/collapsible list */}
            <div className="block sm:hidden space-y-3">
              {industryData.map((industry, idx) => (
                <motion.div 
                  key={`mobile-${industry.id}`}
                  className="w-full"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  ref={(el) => {
                    industryRefs.current[industry.id] = el;
                  }}
                >
                  <div className="rounded-lg overflow-hidden shadow-sm">
                    {/* Industry Header/Button */}
                    <button
                      onClick={() => handleMobileIndustryClick(industry.id)}
                      className={`flex items-center w-full text-left transition-all duration-200 p-3 ${
                        expandedIndustry === industry.id 
                          ? (industry.id === "banking-finance" 
                              ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                              : industry.id === "real-estate" 
                                ? 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400'
                                : industry.id === "shipping-logistics" 
                                  ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400'
                                  : industry.id === "insurance" 
                                    ? 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400'
                                    : 'bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400')
                          : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      {/* Industry Icon */}
                      <div className={`h-10 w-10 rounded-full flex-shrink-0 flex items-center justify-center mr-3 ${
                        industry.id === "banking-finance" 
                          ? (expandedIndustry === industry.id ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400' : 'bg-gray-100 dark:bg-gray-800 text-blue-500 dark:text-blue-400/70')
                          : industry.id === "real-estate"
                            ? (expandedIndustry === industry.id ? 'bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400' : 'bg-gray-100 dark:bg-gray-800 text-green-500 dark:text-green-400/70')
                          : industry.id === "shipping-logistics"
                            ? (expandedIndustry === industry.id ? 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400' : 'bg-gray-100 dark:bg-gray-800 text-indigo-500 dark:text-indigo-400/70')
                          : industry.id === "insurance"
                            ? (expandedIndustry === industry.id ? 'bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400' : 'bg-gray-100 dark:bg-gray-800 text-red-500 dark:text-red-400/70')
                          : (expandedIndustry === industry.id ? 'bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400' : 'bg-gray-100 dark:bg-gray-800 text-amber-500 dark:text-amber-400/70')
                      }`}>
                        {getRenderIcon(industry.id)}
                      </div>
                      <span className="text-base font-medium flex-grow">
                        {industry.name}
                      </span>
                      {/* Expand/Collapse Icon - Modified to point right initially */}
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
                            {industry.hasAnimation ? (
                              <>
                                {industry.id === "banking-finance" && <BankingAnimation />}
                                {industry.id === "real-estate" && <RealEstateAnimation />}
                                {industry.id === "shipping-logistics" && <ShippingLogisticsAnimation />}
                                {industry.id === "insurance" && <InsuranceAnimation />}
                                {industry.id === "your Industry?" && <YourIndustryAnimation />}
                              </>
                            ) : (
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600/40 dark:text-blue-400/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            )}
                          </div>
                        </div>
                        
                        {/* Description Paragraphs */}
                        {industry.description.map((paragraph, index) => (
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
                            {industry.clientLogos.map((client, index) => (
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
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* For tablet/desktop: vertical list (unchanged) */}
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
                    onClick={() => setSelectedIndustry(industry.id)}
                    className={`flex items-center w-full text-left transition-all duration-200 rounded-lg p-3 ${
                      selectedIndustry === industry.id 
                        ? 'bg-blue-50 dark:bg-blue-900/20' 
                        : 'hover:bg-gray-50 dark:hover:bg-gray-700/30'
                    }`}
                  >
                    {/* Industry Icon */}
                    <div className={`h-10 sm:h-12 w-10 sm:w-12 rounded-full flex-shrink-0 flex items-center justify-center mr-3 sm:mr-4 ${
                      industry.id === "banking-finance" 
                        ? (selectedIndustry === industry.id ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400' : 'bg-gray-100 dark:bg-gray-800 text-blue-500 dark:text-blue-400/70')
                        : industry.id === "real-estate"
                          ? (selectedIndustry === industry.id ? 'bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400' : 'bg-gray-100 dark:bg-gray-800 text-green-500 dark:text-green-400/70')
                        : industry.id === "shipping-logistics"
                          ? (selectedIndustry === industry.id ? 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400' : 'bg-gray-100 dark:bg-gray-800 text-indigo-500 dark:text-indigo-400/70')
                        : industry.id === "insurance"
                          ? (selectedIndustry === industry.id ? 'bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400' : 'bg-gray-100 dark:bg-gray-800 text-red-500 dark:text-red-400/70')
                        : (selectedIndustry === industry.id ? 'bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400' : 'bg-gray-100 dark:bg-gray-800 text-amber-500 dark:text-amber-400/70')
                    }`}>
                      {getRenderIcon(industry.id)}
                    </div>
                    <span className={`text-base sm:text-lg ${
                      selectedIndustry === industry.id 
                        ? (industry.id === "banking-finance" 
                            ? 'font-semibold text-blue-600 dark:text-blue-400'
                            : industry.id === "real-estate" 
                              ? 'font-semibold text-green-600 dark:text-green-400'
                              : industry.id === "shipping-logistics" 
                                ? 'font-semibold text-indigo-600 dark:text-indigo-400'
                                : industry.id === "insurance" 
                                  ? 'font-semibold text-red-600 dark:text-red-400'
                                  : 'font-semibold text-amber-600 dark:text-amber-400')
                        : 'font-medium text-gray-700 dark:text-gray-300'
                    }`}>
                      {industry.name}
                    </span>
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right - Industry description - Only visible on tablet/desktop */}
          <div className="hidden sm:block space-y-4 sm:space-y-5 bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-sm">
            {/* Industry Title */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="border-b border-gray-200 dark:border-gray-700 pb-3"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                {currentIndustry.id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' & ')}
              </h3>
            </motion.div>
            
            {/* Industry Illustration/Animation - Made responsive */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 rounded-lg h-auto min-h-40 sm:min-h-52 py-4 mb-3 sm:mb-5 overflow-hidden shadow-sm"
            >
              <div className="w-full h-full flex items-center justify-center">
                {currentIndustry.hasAnimation ? (
                  <>
                    {currentIndustry.id === "banking-finance" && <BankingAnimation />}
                    {currentIndustry.id === "real-estate" && <RealEstateAnimation />}
                    {currentIndustry.id === "shipping-logistics" && <ShippingLogisticsAnimation />}
                    {currentIndustry.id === "insurance" && <InsuranceAnimation />}
                    {currentIndustry.id === "your Industry?" && <YourIndustryAnimation />}
                  </>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 sm:h-12 sm:w-12 text-blue-600/40 dark:text-blue-400/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                )}
              </div>
            </motion.div>
            
            {/* Description Paragraphs - Improved for mobile */}
            {currentIndustry.description.map((paragraph, index) => (
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

            {/* Client logos section - Made responsive */}
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

// Helper function to render the correct icon based on industry ID
const getRenderIcon = (industryId: string) => {
  switch(industryId) {
    case "banking-finance":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      );
    case "real-estate":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      );
    case "shipping-logistics":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
      );
    case "insurance":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      );
    case "your Industry?":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      );
    default:
      return null;
  }
};

export default Industry;