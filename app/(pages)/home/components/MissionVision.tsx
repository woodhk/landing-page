// app/(pages)/home/components/MissionVision.tsx
'use client';

import React, { useState } from 'react';
import { missionVisionData } from '../data/MissionVision';
import { motion } from 'framer-motion';

const MissionVision = () => {
  const { mission, vision } = missionVisionData;
  const [activeTab, setActiveTab] = useState<'mission' | 'vision'>('mission');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleTabChange = (tab: 'mission' | 'vision') => {
    if (isAnimating || tab === activeTab) return;
    
    setIsAnimating(true);
    setActiveTab(tab);
    
    // Reset animation state after animation completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <section className="w-full py-20 bg-gradient-to-b from-white to-light-1/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-dynamic-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-deep-azure/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Section Heading & Tabs */}
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-dark mb-6">Our Values</h2>
          
          <div className="inline-flex rounded-full bg-light-2/70 p-1.5 backdrop-blur-sm shadow-sm">
            <button 
              onClick={() => handleTabChange('mission')}
              disabled={isAnimating}
              className={`${
                activeTab === 'mission' 
                  ? 'bg-white text-dynamic-blue shadow-sm' 
                  : 'bg-transparent text-medium hover:text-dark'
              } px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-200`}
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
              } px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-200`}
            >
              Our Vision
            </button>
          </div>
        </div>

        {/* Content with slide animations */}
        <div className="relative min-h-[450px] md:min-h-[400px] overflow-hidden">
          {/* Mission and Vision content in single container for sliding effect */}
          <div className="flex flex-col md:flex-row md:w-[200%] md:space-x-8 absolute inset-0 transition-transform duration-500 ease-in-out" 
               style={{ transform: activeTab === 'mission' ? 'translateX(0%)' : 'translateX(-50%)' }}>
            
            {/* Mission Content */}
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24 w-full md:min-w-[50%] md:pr-4">
              {/* Mission Text */}
              <div className="w-full md:w-1/2 space-y-6">
                <div className="inline-block mb-2">
                  <span className="bg-dynamic-blue/10 text-dynamic-blue px-4 py-1.5 rounded-full text-sm font-medium">
                    Purpose
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-dark leading-tight">
                  {mission.title}
                </h2>
                <div className="w-20 h-1.5 bg-gradient-to-r from-dynamic-blue to-deep-azure rounded-full"></div>
                <p className="text-medium text-lg leading-relaxed">
                  {mission.description}
                </p>
                <div className="pt-4">
                  <div className="inline-flex items-center font-medium text-dynamic-blue group cursor-pointer hover:text-dynamic-blue/80 transition-colors">
                    <span>Learn about our approach</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Mission Image */}
              <div className="w-full md:w-1/2">
                <div className="relative">
                  <div className="aspect-video rounded-2xl bg-gradient-to-br from-dynamic-blue/10 to-light-1 p-6 flex items-center justify-center overflow-hidden border border-light-2 shadow-lg relative hover:shadow-xl transition-shadow">
                    {/* Design elements */}
                    <div className="absolute -right-16 -top-16 w-32 h-32 bg-dynamic-blue/10 rounded-full blur-xl"></div>
                    <div className="absolute -left-16 -bottom-16 w-32 h-32 bg-deep-azure/10 rounded-full blur-xl"></div>
                    
                    <div className="relative z-10 bg-white/60 backdrop-blur-sm rounded-xl border border-light-2/70 p-4 w-5/6 shadow-sm">
                      <img 
                        src="/mission.svg" 
                        alt={mission.image.alt} 
                        className="w-full h-auto mx-auto"
                      />
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-dynamic-blue/5 rounded-full blur-lg"></div>
                </div>
              </div>
            </div>
            
            {/* Vision Content */}
            <div className="flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-24 w-full md:min-w-[50%] md:pl-4">
              {/* Vision Image */}
              <div className="w-full md:w-1/2">
                <div className="relative">
                  <div className="aspect-video rounded-2xl bg-gradient-to-bl from-deep-azure/10 to-light-1 p-6 flex items-center justify-center overflow-hidden border border-light-2 shadow-lg relative hover:shadow-xl transition-shadow">
                    {/* Design elements */}
                    <div className="absolute -left-16 -top-16 w-32 h-32 bg-deep-azure/10 rounded-full blur-xl"></div>
                    <div className="absolute -right-16 -bottom-16 w-32 h-32 bg-dynamic-blue/10 rounded-full blur-xl"></div>
                    
                    <div className="relative z-10 bg-white/60 backdrop-blur-sm rounded-xl border border-light-2/70 p-6 w-5/6 shadow-sm">
                      <img 
                        src="/vision.svg" 
                        alt={vision.image.alt} 
                        className="w-full h-auto mx-auto"
                      />
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -bottom-3 -left-3 w-24 h-24 bg-deep-azure/5 rounded-full blur-lg"></div>
                </div>
              </div>
              
              {/* Vision Text */}
              <div className="w-full md:w-1/2 space-y-6">
                <div className="inline-block mb-2">
                  <span className="bg-deep-azure/10 text-deep-azure px-4 py-1.5 rounded-full text-sm font-medium">
                    Future
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-dark leading-tight">
                  {vision.title}
                </h2>
                <div className="w-20 h-1.5 bg-gradient-to-r from-deep-azure to-dynamic-blue rounded-full"></div>
                <p className="text-medium text-lg leading-relaxed">
                  {vision.description}
                </p>
                <div className="pt-4">
                  <div className="inline-flex items-center font-medium text-deep-azure group cursor-pointer hover:text-deep-azure/80 transition-colors">
                    <span>Learn about our vision</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;