'use client';

import React, { useState } from 'react';
import { missionVisionData } from '../data/MissionVision';
import { motion, AnimatePresence } from 'framer-motion';

const MissionVision = () => {
  const { mission, vision } = missionVisionData;
  const [activeTab, setActiveTab] = useState<'mission' | 'vision'>('mission');
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<1 | -1>(1); // 1 for right-to-left, -1 for left-to-right

  const handleTabChange = (tab: 'mission' | 'vision') => {
    if (isAnimating || tab === activeTab) return;
    
    setIsAnimating(true);
    
    // Set direction based on tab change
    if (tab === 'vision' && activeTab === 'mission') {
      setDirection(1); // Moving from Mission to Vision (right-to-left)
    } else if (tab === 'mission' && activeTab === 'vision') {
      setDirection(-1); // Moving from Vision to Mission (left-to-right)
    }
    
    setActiveTab(tab);
    
    // Reset animation state after animation completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-light-1/30 relative overflow-hidden">
      {/* Background elements - optimized for responsive */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-dynamic-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-deep-azure/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        {/* Section Heading & Tabs - improved for mobile */}
        <div className="flex flex-col items-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-6 text-center">Our Values</h2>
          
          {/* Responsive tab container */}
          <div className="w-full max-w-xs sm:max-w-md flex justify-center">
            <div className="w-full sm:w-auto inline-flex rounded-full bg-light-2/70 p-1.5 backdrop-blur-sm shadow-sm">
              <button 
                onClick={() => handleTabChange('mission')}
                disabled={isAnimating}
                className={`${
                  activeTab === 'mission' 
                    ? 'bg-white text-dynamic-blue shadow-sm' 
                    : 'bg-transparent text-medium hover:text-dark'
                } flex-1 sm:flex-initial px-4 sm:px-6 py-3 sm:py-2.5 text-sm font-medium rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-dynamic-blue/30`}
                aria-selected={activeTab === 'mission'}
                role="tab"
              >
                Our Mission
              </button>
              <button 
                onClick={() => handleTabChange('vision')}
                disabled={isAnimating}
                className={`${
                  activeTab === 'vision' 
                    ? 'bg-white text-deep-azure shadow-sm' 
                    : 'bg-transparent text-medium hover:text-dark'
                } flex-1 sm:flex-initial px-4 sm:px-6 py-3 sm:py-2.5 text-sm font-medium rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-deep-azure/30`}
                aria-selected={activeTab === 'vision'}
                role="tab"
              >
                Our Vision
              </button>
            </div>
          </div>
        </div>

        {/* Content with slide animations - reduced fixed heights */}
        <div className="relative min-h-[300px] sm:min-h-[350px] md:min-h-[400px] overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            {activeTab === 'mission' ? (
              <motion.div
                key="mission"
                custom={direction}
                initial={{ x: direction > 0 ? "-100%" : "100%" }}
                animate={{ x: 0 }}
                exit={{ x: direction > 0 ? "100%" : "-100%" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                {/* Mission Content - improved responsive layout */}
                <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-12 lg:gap-24 w-full h-full">
                  {/* Mission Text - full width on mobile */}
                  <div className="w-full md:w-1/2 space-y-4 sm:space-y-5 md:space-y-6">
                    <div className="inline-block mb-2">
                      <span className="bg-dynamic-blue/10 text-dynamic-blue px-4 py-1.5 rounded-full text-sm font-medium">
                        Purpose
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark leading-tight">
                      {mission.title}
                    </h2>
                    <div className="w-16 sm:w-20 h-1.5 bg-gradient-to-r from-dynamic-blue to-deep-azure rounded-full"></div>
                    <p className="text-medium text-base sm:text-lg leading-relaxed">
                      {mission.description}
                    </p>
                  </div>
                  
                  {/* Mission Image - hidden on mobile, shown on md screens and up */}
                  <div className="hidden md:block md:w-1/2 pr-8 lg:pr-16 xl:pr-24">
                    <div className="relative">
                      <div className="rounded-2xl bg-gradient-to-br from-dynamic-blue/10 to-light-1 p-6 flex items-center justify-center overflow-hidden border border-light-2 shadow-lg hover:shadow-xl transition-shadow">
                        {/* Design elements */}
                        <div className="absolute -right-16 -top-16 w-32 h-32 bg-dynamic-blue/10 rounded-full blur-xl"></div>
                        <div className="absolute -left-16 -bottom-16 w-32 h-32 bg-deep-azure/10 rounded-full blur-xl"></div>
                        
                        <div className="relative z-10 bg-white/60 backdrop-blur-sm rounded-xl border border-light-2/70 p-4 w-5/6 mx-auto shadow-sm">
                          <div className="w-full overflow-hidden">
                            <img 
                              src="/mission.svg" 
                              alt={mission.image.alt} 
                              className="w-full h-auto object-contain mx-auto"
                            />
                          </div>
                        </div>
                      </div>
                      
                      {/* Decorative elements */}
                      <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-dynamic-blue/5 rounded-full blur-lg"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="vision"
                custom={direction}
                initial={{ x: direction > 0 ? "100%" : "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: direction > 0 ? "-100%" : "100%" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                {/* Vision Content - improved responsive layout */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-8 sm:gap-10 md:gap-12 lg:gap-24 w-full h-full">
                  {/* Vision Text - full width on mobile */}
                  <div className="w-full md:w-1/2 space-y-4 sm:space-y-5 md:space-y-6">
                    <div className="inline-block mb-2">
                      <span className="bg-deep-azure/10 text-deep-azure px-4 py-1.5 rounded-full text-sm font-medium">
                        Future
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark leading-tight">
                      {vision.title}
                    </h2>
                    <div className="w-16 sm:w-20 h-1.5 bg-gradient-to-r from-deep-azure to-dynamic-blue rounded-full"></div>
                    <p className="text-medium text-base sm:text-lg leading-relaxed">
                      {vision.description}
                    </p>
                  </div>
                  
                  {/* Vision Image - hidden on mobile, shown on md screens and up */}
                  <div className="hidden md:block md:w-1/2 pl-8 lg:pl-16 xl:pl-24">
                    <div className="relative">
                      <div className="rounded-2xl bg-gradient-to-bl from-deep-azure/10 to-light-1 p-6 flex items-center justify-center overflow-hidden border border-light-2 shadow-lg hover:shadow-xl transition-shadow">
                        {/* Design elements */}
                        <div className="absolute -left-16 -top-16 w-32 h-32 bg-deep-azure/10 rounded-full blur-xl"></div>
                        <div className="absolute -right-16 -bottom-16 w-32 h-32 bg-dynamic-blue/10 rounded-full blur-xl"></div>
                        
                        <div className="relative z-10 bg-white/60 backdrop-blur-sm rounded-xl border border-light-2/70 p-4 md:p-6 w-5/6 mx-auto shadow-sm">
                          <div className="w-full overflow-hidden">
                            <img 
                              src="/vision.svg" 
                              alt={vision.image.alt} 
                              className="w-full h-auto object-contain mx-auto"
                            />
                          </div>
                        </div>
                      </div>
                      
                      {/* Decorative elements */}
                      <div className="absolute -bottom-3 -left-3 w-24 h-24 bg-deep-azure/5 rounded-full blur-lg"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;