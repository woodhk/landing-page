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
    <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-light-3/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <motion.span 
            variants={itemVariants}
            className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-dynamic-blue/10 text-dynamic-blue rounded-full"
          >
            HR & L&D Features
          </motion.span>
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-6"
          >
            Designed to maximize ROI on training investment
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-medium-2 text-lg"
          >
            Our platform creates a seamless experience for both HR departments and staff members.
          </motion.p>
        </motion.div>

        <div className="space-y-16 md:space-y-24">
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
                className={`flex flex-col ${feature.isImageRight ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-16 relative`}
              >
                {/* Image Column */}
                <div className="w-full lg:w-1/2">
                  <div 
                    className={`relative h-full overflow-hidden rounded-2xl shadow-lg border border-light-2 ${
                      index % 2 === 0 ? 'bg-gradient-to-br from-dynamic-blue/5 to-white' : 'bg-gradient-to-br from-deep-azure/5 to-white'
                    }`}
                  >
                    <div className="absolute -right-12 -top-12 w-40 h-40 rounded-full bg-dynamic-blue/5 blur-2xl"></div>
                    {index % 2 === 0 && (
                      <div className="absolute -left-12 -bottom-12 w-40 h-40 rounded-full bg-neon-violet/5 blur-2xl"></div>
                    )}
                    
                    {/* Number indicator */}
                    <div className={`absolute ${feature.isImageRight ? 'left-6' : 'right-6'} top-6 w-12 h-12 rounded-full flex items-center justify-center ${
                      index % 2 === 0 ? 'bg-dynamic-blue' : 'bg-deep-azure'
                    } text-white font-bold text-xl shadow-lg`}>
                      {feature.id}
                    </div>
                    
                    <div className="flex items-center justify-center p-10 md:p-12 h-[300px] md:h-[350px]">
                      <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-light-2/50 max-w-md">
                        <p className={`font-medium ${index % 2 === 0 ? 'text-dynamic-blue' : 'text-deep-azure'}`}>
                          {feature.imagePlaceholder}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content Column */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <div className="mb-3">
                    <span className={`inline-block px-4 py-1.5 text-sm font-medium rounded-full ${
                      index % 2 === 0 
                        ? 'bg-dynamic-blue/10 text-dynamic-blue' 
                        : 'bg-deep-azure/10 text-deep-azure'
                    }`}>
                      {feature.tag}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark mb-4">
                    {feature.title}
                  </h2>
                  <p className="text-lg text-medium-2 mb-8 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Visual connector for desktop */}
                  <div className={`hidden lg:block absolute ${feature.isImageRight ? 'left-1/2 -translate-x-1/2' : 'right-1/2 translate-x-1/2'} top-1/2 -translate-y-1/2 w-16 h-0.5 ${
                    index % 2 === 0 ? 'bg-dynamic-blue/20' : 'bg-deep-azure/20'
                  }`}></div>
                </div>
              </motion.div>
              
              {/* Feature divider - more subtle and with animation */}
              {index < hrFeatures.length - 1 && (
                <motion.div 
                  initial={{ opacity: 0, width: "0%" }}
                  animate={visibleFeatures.has(index) ? { opacity: 1, width: "100%" } : {}}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="w-full h-px bg-gradient-to-r from-transparent via-light to-transparent mt-16 md:mt-20"
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