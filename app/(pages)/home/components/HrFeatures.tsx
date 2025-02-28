'use client';

import React, { useRef, useEffect, useState } from 'react';
import { hrFeatures } from '../data/HrFeatures';
import { motion } from 'framer-motion';

const HrFeatures = () => {
  const [visibleFeatures, setVisibleFeatures] = useState<Set<number>>(new Set());
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        duration: 0.5 
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 } 
    }
  };

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-light-3/40">
      {/* Background patterns for visual interest */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
        <div className="absolute top-20 left-[10%] w-64 h-64 rounded-full bg-dynamic-blue/5 blur-3xl"></div>
        <div className="absolute bottom-40 right-[5%] w-80 h-80 rounded-full bg-deep-azure/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-dynamic-blue/10 text-dynamic-blue rounded-full shadow-sm">
              HR & L&D Features
            </span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-6 text-shadow"
          >
            Designed to maximize ROI on training investment
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-medium-2 text-lg md:text-xl leading-relaxed"
          >
            Our platform creates a seamless experience for both HR departments and staff members.
          </motion.p>
        </motion.div>

        <div className="space-y-20 md:space-y-32">
          {hrFeatures.map((feature, index) => (
            <div 
              key={feature.id}
              ref={(el) => {
                featureRefs.current[index] = el;
              }}
              data-index={index}
              className="scroll-mt-24"
            >
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={visibleFeatures.has(index) ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`flex flex-col ${feature.isImageRight ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 relative`}
              >
                {/* Image Column with enhanced depth and visuals */}
                <div className="w-full lg:w-1/2">
                  <div 
                    className={`relative h-full overflow-hidden rounded-2xl shadow-xl border border-light-2 transform transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] ${
                      index % 2 === 0 
                        ? 'bg-gradient-to-br from-dynamic-blue/10 via-dynamic-blue/5 to-white' 
                        : 'bg-gradient-to-br from-deep-azure/10 via-deep-azure/5 to-white'
                    }`}
                  >
                    {/* Enhanced background elements */}
                    <div className="absolute -right-12 -top-12 w-64 h-64 rounded-full bg-dynamic-blue/10 blur-3xl opacity-60"></div>
                    <div className="absolute -left-12 -bottom-12 w-64 h-64 rounded-full bg-neon-violet/10 blur-3xl opacity-60"></div>
                    
                    {/* 3D lighting effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/30 opacity-80"></div>
                    
                    {/* Number indicator with enhanced design */}
                    <div className={`absolute ${feature.isImageRight ? 'left-6' : 'right-6'} top-6 w-14 h-14 rounded-full flex items-center justify-center ${
                      index % 2 === 0 ? 'bg-dynamic-blue' : 'bg-deep-azure'
                    } text-white font-bold text-xl shadow-lg border-2 border-white/30 backdrop-blur-sm`}>
                      {feature.id}
                    </div>
                    
                    <div className="flex items-center justify-center p-10 md:p-12 h-[320px] md:h-[400px]">
                      <div className="text-center p-8 bg-white/80 backdrop-blur-md rounded-xl border border-light-2/50 shadow-lg max-w-md transform transition-all duration-300 hover:shadow-xl hover:scale-105">
                        <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                          index % 2 === 0 ? 'bg-dynamic-blue/10' : 'bg-deep-azure/10'
                        }`}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${
                            index % 2 === 0 ? 'text-dynamic-blue' : 'text-deep-azure'
                          }`}>
                            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                            <circle cx="9" cy="9" r="2" />
                            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                          </svg>
                        </div>
                        <p className={`font-medium text-lg ${index % 2 === 0 ? 'text-dynamic-blue' : 'text-deep-azure'}`}>
                          {feature.imagePlaceholder}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content Column with enhanced styling */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className={`inline-block px-5 py-2 text-sm font-medium rounded-full shadow-sm ${
                      index % 2 === 0 
                        ? 'bg-dynamic-blue/15 text-dynamic-blue' 
                        : 'bg-deep-azure/15 text-deep-azure'
                    }`}>
                      {feature.tag}
                    </span>
                  </div>
                  
                  <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-6 ${
                    index % 2 === 0 ? 'text-dark' : 'text-dark'
                  }`}>
                    {feature.title}
                  </h2>
                  
                  <div className="space-y-6">
                    <p className="text-lg md:text-xl text-medium-2 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    {/* Feature highlights */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      {['Customizable', 'Data-driven', 'Time-saving'].map((highlight, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                            index % 2 === 0 ? 'bg-dynamic-blue/20' : 'bg-deep-azure/20'
                          }`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${
                              index % 2 === 0 ? 'text-dynamic-blue' : 'text-deep-azure'
                            }`}>
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </div>
                          <span className="text-medium font-medium">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Enhanced feature divider */}
              {index < hrFeatures.length - 1 && (
                <motion.div 
                  initial={{ opacity: 0, width: "0%" }}
                  animate={visibleFeatures.has(index) ? { opacity: 1, width: "100%" } : {}}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="w-full h-px bg-gradient-to-r from-transparent via-light-2 to-transparent mt-20 md:mt-28"
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