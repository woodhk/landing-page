'use client';

import React, { useRef, useEffect, useState } from 'react';
import { hrFeatures } from '../data/HrFeatures';
import { motion } from 'framer-motion';

const HrFeatures = () => {
  // State for tracking visible features in desktop view
  const [visibleFeatures, setVisibleFeatures] = useState<Set<number>>(new Set());
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  // State for mobile card navigation
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Navigation functions for mobile
  const handlePrevFeature = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveFeatureIndex((prev) => (prev === 0 ? hrFeatures.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNextFeature = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveFeatureIndex((prev) => (prev === hrFeatures.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Improved Intersection Observer to detect which features are in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          
          if (entry.isIntersecting) {
            // Add this feature to the set of visible features
            setVisibleFeatures(prev => new Set(prev).add(index));
          }
        });
      },
      { 
        threshold: 0.15, // Trigger when just 15% of the element is visible
        rootMargin: "0px 0px -10% 0px" // Trigger slightly before the element enters viewport
      }
    );

    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      featureRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // Animation variants with improved performance for mobile
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        duration: 0.5,
        ease: "easeOut" 
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <section className="w-full py-8 sm:py-10 md:py-14 lg:py-20 bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Grid pattern overlay with responsive sizing */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] sm:bg-[size:2rem_2rem] opacity-50 z-0"></div>

      {/* Background patterns for visual interest - more responsive positioning */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50 z-10">
        <div className="absolute top-[10%] left-[5%] sm:left-[10%] w-40 h-40 sm:w-64 sm:h-64 rounded-full bg-dynamic-blue/5 blur-3xl"></div>
        <div className="absolute bottom-[20%] right-[5%] w-48 h-48 sm:w-80 sm:h-80 rounded-full bg-deep-azure/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mb-6 sm:mb-12 md:mb-16 text-center max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-2 sm:mb-6">
            <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 mb-1 text-xs sm:text-sm font-medium bg-dynamic-blue/10 text-dynamic-blue rounded-full shadow-sm">
              HR & L&D Features
            </span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold text-dark mb-4 sm:mb-6 text-shadow leading-tight"
          >
            Designed to Maximize Return on Investment
          </motion.h2>
        </motion.div>

        {/* Pagination Indicators moved closer to the card */}
        <div className="flex justify-center space-x-2 mb-4 md:hidden">
          {hrFeatures.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (isAnimating) return;
                setIsAnimating(true);
                setActiveFeatureIndex(index);
                setTimeout(() => setIsAnimating(false), 500);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                activeFeatureIndex === index 
                  ? 'bg-dynamic-blue w-6' 
                  : 'bg-gray-300'
              }`}
              aria-label={`Go to feature ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Mobile Card Navigation View */}
        <div className="block md:hidden">
          <div className="relative overflow-hidden">
            {/* Card Container with sliding animation */}
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeFeatureIndex * 100}%)` }}
            >
              {hrFeatures.map((feature, index) => (
                <div key={feature.id} className="w-full flex-shrink-0 px-2 sm:px-3">
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    {/* Text Content (Top) */}
                    <div className="p-6 relative">
                      {/* Number indicator moved to top right of text card */}
                      <div className={`absolute right-4 top-4 w-8 h-8 rounded-full flex items-center justify-center ${
                        index % 2 === 0 ? 'bg-dynamic-blue' : 'bg-deep-azure'
                      } text-white font-bold text-sm shadow-lg border border-white/30 z-20`}>
                        {feature.id}
                      </div>
                      
                      <div className="mb-3">
                        <span className={`inline-block px-3 py-1.5 text-xs font-medium rounded-full shadow-sm ${
                          index % 2 === 0 
                            ? 'bg-dynamic-blue/15 text-dynamic-blue' 
                            : 'bg-deep-azure/15 text-deep-azure'
                        }`}>
                          {feature.tag}
                        </span>
                      </div>
                      
                      <h2 className={`text-xl font-bold mb-3 ${
                        index % 2 === 0 ? 'text-dark' : 'text-dark'
                      } leading-tight`}>
                        {feature.title}
                      </h2>
                      
                      <p className="text-base text-medium-2 leading-relaxed mb-4">
                        {feature.description}
                      </p>
                      
                      {/* Feature highlights */}
                      <div className="grid grid-cols-1 gap-2 mb-4">
                        {feature.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-start space-x-2 group">
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0 ${
                              index % 2 === 0 ? 'bg-dynamic-blue/20' : 'bg-deep-azure/20'
                            }`}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${
                                index % 2 === 0 ? 'text-dynamic-blue' : 'text-deep-azure'
                              }`}>
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                            </div>
                            <span className="text-sm text-medium font-medium">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Image Content (Bottom) */}
                    <div className={`relative w-full h-0 pb-[70%] overflow-hidden ${
                      index % 2 === 0 
                        ? 'bg-gradient-to-br from-dynamic-blue/10 via-dynamic-blue/5 to-white' 
                        : 'bg-gradient-to-br from-deep-azure/10 via-deep-azure/5 to-white'
                    } border-t border-light-2`}>
                      {/* Background elements */}
                      <div className="absolute -right-12 -top-12 w-40 h-40 rounded-full bg-dynamic-blue/10 blur-3xl opacity-60"></div>
                      <div className="absolute -left-12 -bottom-12 w-40 h-40 rounded-full bg-neon-violet/10 blur-3xl opacity-60"></div>
                      
                      {/* 3D lighting effect */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/30 opacity-80"></div>
                      
                      <div className="absolute inset-0 flex items-center justify-center p-6">
                        <div className="text-center p-4 bg-white rounded-lg border border-light-2/50 shadow-lg max-w-[85%] relative z-10">
                          <div className={`w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center ${
                            index % 2 === 0 ? 'bg-dynamic-blue/10' : 'bg-deep-azure/10'
                          }`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${
                              index % 2 === 0 ? 'text-dynamic-blue' : 'text-deep-azure'
                            }`}>
                              <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                              <circle cx="9" cy="9" r="2" />
                              <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                            </svg>
                          </div>
                          <p className={`font-medium text-sm ${index % 2 === 0 ? 'text-dynamic-blue' : 'text-deep-azure'}`}>
                            {feature.imagePlaceholder}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation Arrows at bottom edges of the card */}
            <div className="relative mt-6 mb-2">
              {/* Left arrow positioned at bottom left */}
              <button 
                onClick={handlePrevFeature}
                disabled={isAnimating}
                className="absolute left-2 bottom-0 w-10 h-10 rounded-full bg-white/80 shadow-md flex items-center justify-center text-gray-600 z-30"
                aria-label="Previous feature"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              
              {/* Right arrow positioned at bottom right */}
              <button 
                onClick={handleNextFeature}
                disabled={isAnimating}
                className="absolute right-2 bottom-0 w-10 h-10 rounded-full bg-white/80 shadow-md flex items-center justify-center text-gray-600 z-30"
                aria-label="Next feature"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Desktop View (Original Layout) */}
        <div className="hidden md:block space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-32">
          {hrFeatures.map((feature, index) => (
            <div 
              key={feature.id}
              ref={(el) => {
                featureRefs.current[index] = el;
              }}
              data-index={index}
              className="scroll-mt-16 sm:scroll-mt-20 md:scroll-mt-24"
            >
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={visibleFeatures.has(index) ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`flex flex-col ${
                  feature.isImageRight 
                    ? 'md:flex-row' 
                    : 'md:flex-row-reverse'
                } gap-8 sm:gap-10 md:gap-12 lg:gap-20 relative`}
              >
                {/* Image Column with enhanced responsive design */}
                <div className="w-full md:w-1/2 transition-all duration-300">
                  <div 
                    className={`relative w-full h-0 pb-[75%] sm:pb-[70%] md:pb-[85%] lg:pb-[75%] overflow-hidden rounded-xl sm:rounded-2xl shadow-xl border border-light-2 transform transition-all duration-300 hover:shadow-2xl ${
                      index % 2 === 0 
                        ? 'bg-gradient-to-br from-dynamic-blue/10 via-dynamic-blue/5 to-white' 
                        : 'bg-gradient-to-br from-deep-azure/10 via-deep-azure/5 to-white'
                    } bg-white group`}
                  >
                    {/* Enhanced background elements with responsive positioning */}
                    <div className="absolute -right-12 -top-12 w-40 sm:w-64 h-40 sm:h-64 rounded-full bg-dynamic-blue/10 blur-3xl opacity-60"></div>
                    <div className="absolute -left-12 -bottom-12 w-40 sm:w-64 h-40 sm:h-64 rounded-full bg-neon-violet/10 blur-3xl opacity-60"></div>
                    
                    {/* 3D lighting effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/30 opacity-80"></div>
                    
                    {/* Number indicator with enhanced design and responsive sizing */}
                    <div className={`absolute ${feature.isImageRight ? 'left-4 sm:left-6' : 'right-4 sm:right-6'} top-4 sm:top-6 w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center ${
                      index % 2 === 0 ? 'bg-dynamic-blue' : 'bg-deep-azure'
                    } text-white font-bold text-base sm:text-xl shadow-lg border-2 border-white/30 backdrop-blur-sm z-20`}>
                      {feature.id}
                    </div>
                    
                    <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-8 md:p-10 lg:p-12">
                      <div className="text-center p-4 sm:p-6 md:p-8 bg-white rounded-lg sm:rounded-xl border border-light-2/50 shadow-lg max-w-[85%] sm:max-w-md transform transition-all duration-300 group-hover:shadow-xl group-hover:scale-105 relative z-10">
                        <div className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full flex items-center justify-center ${
                          index % 2 === 0 ? 'bg-dynamic-blue/10' : 'bg-deep-azure/10'
                        }`}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`sm:w-6 sm:h-6 ${
                            index % 2 === 0 ? 'text-dynamic-blue' : 'text-deep-azure'
                          }`}>
                            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                            <circle cx="9" cy="9" r="2" />
                            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                          </svg>
                        </div>
                        <p className={`font-medium text-sm sm:text-base md:text-lg ${index % 2 === 0 ? 'text-dynamic-blue' : 'text-deep-azure'}`}>
                          {feature.imagePlaceholder}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content Column with enhanced responsive styling */}
                <div className="w-full md:w-1/2 flex flex-col justify-center mt-6 md:mt-0">
                  <div className="mb-3 sm:mb-4">
                    <span className={`inline-block px-3 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-medium rounded-full shadow-sm ${
                      index % 2 === 0 
                        ? 'bg-dynamic-blue/15 text-dynamic-blue' 
                        : 'bg-deep-azure/15 text-deep-azure'
                    }`}>
                      {feature.tag}
                    </span>
                  </div>
                  
                  <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 ${
                    index % 2 === 0 ? 'text-dark' : 'text-dark'
                  } leading-tight`}>
                    {feature.title}
                  </h2>
                  
                  <div className="space-y-4 sm:space-y-6">
                    <p className="text-base sm:text-lg md:text-xl text-medium-2 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    {/* Feature highlights with improved responsive grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6">
                      {feature.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-start sm:items-center space-x-2 group">
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center mt-0.5 sm:mt-0 flex-shrink-0 transition-colors duration-300 ${
                            index % 2 === 0 ? 'bg-dynamic-blue/20 group-hover:bg-dynamic-blue/30' : 'bg-deep-azure/20 group-hover:bg-deep-azure/30'
                          }`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${
                              index % 2 === 0 ? 'text-dynamic-blue' : 'text-deep-azure'
                            }`}>
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </div>
                          <span className="text-sm sm:text-base text-medium font-medium">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Enhanced feature divider with responsive spacing */}
              {index < hrFeatures.length - 1 && (
                <motion.div 
                  initial={{ opacity: 0, width: "0%" }}
                  animate={visibleFeatures.has(index) ? { opacity: 1, width: "100%" } : {}}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="w-full h-px bg-gradient-to-r from-transparent via-light-2 to-transparent mt-12 sm:mt-16 md:mt-20 lg:mt-28"
                ></motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HrFeatures;