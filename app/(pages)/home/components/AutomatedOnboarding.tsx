'use client';

// app/(pages)/home/components/AutomatedOnboarding.tsx
import { useState, useEffect } from 'react';
import { onboardingSteps } from '../data/AutomatedOnboarding';
import { motion, AnimatePresence } from 'framer-motion';

export default function AutomatedOnboarding() {
  const [activeStep, setActiveStep] = useState(1);
  const activeContent = onboardingSteps.find(step => step.id === activeStep)?.content;

  // Auto-rotate steps every 8 seconds unless user has interacted
  const [userInteracted, setUserInteracted] = useState(false);
  
  useEffect(() => {
    if (!userInteracted) {
      const interval = setInterval(() => {
        setActiveStep(current => 
          current === onboardingSteps.length ? 1 : current + 1
        );
      }, 8000);
      
      return () => clearInterval(interval);
    }
  }, [userInteracted]);

  const handleStepClick = (stepId: number) => {
    setUserInteracted(true);
    setActiveStep(stepId);
  };

  const progressPercentage = ((activeStep - 1) / (onboardingSteps.length - 1)) * 100;

  return (
    <section className="max-w-7xl mx-auto px-4 py-24">
      {/* Heading */}
      <div className="text-center mb-16 relative">
        <h2 className="text-4xl md:text-5xl font-bold mb-2 text-dark">Designed for Learners.</h2>
        <h2 className="text-4xl md:text-5xl font-bold mb-3 text-dark">Loved by <span className="text-dynamic-blue">HR and L&D</span></h2>
      </div>

      {/* Main Content with Enhanced UI */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="border border-light-2 rounded-3xl overflow-hidden shadow-lg bg-white mb-12"
      >
        <div className="pt-12 pb-6 px-6 md:px-12 text-center">
          <p className="text-medium-3 text-lg font-medium">From Sign up to Monitoring Training Within Minutes</p>
          <h3 className="text-3xl md:text-4xl font-bold mt-4 mb-10 text-dark">Automated Staff Onboarding</h3>
          
          {/* Removed progress bar as requested */}
          
          {/* Steps with improved styling */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12">
            {onboardingSteps.map((step) => (
              <motion.div 
                key={step.id}
                onClick={() => handleStepClick(step.id)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className={`p-5 rounded-xl cursor-pointer transition-all duration-200 relative overflow-hidden ${
                  activeStep === step.id 
                    ? 'bg-gradient-to-br from-dynamic-blue to-deep-azure text-white shadow-md' 
                    : 'bg-transparent text-dark-2 hover:bg-light-3/50'
                }`}
              >
                <div className="relative z-10 text-left">
                  <div className="flex items-center mb-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3 ${
                      activeStep === step.id ? 'bg-white text-dynamic-blue' : 'bg-dynamic-blue text-white'
                    }`}>
                      {step.id}
                    </div>
                    <h4 className="font-bold text-xl">{step.title}</h4>
                  </div>
                  <p className={`text-sm leading-relaxed ${activeStep === step.id ? 'text-white/90' : 'text-medium-3'}`}>
                    {step.subtitle}
                  </p>
                </div>
                {activeStep === step.id && (
                  <motion.div 
                    className="absolute bottom-0 right-0 w-16 h-16 opacity-20"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, rotate: 45 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-full h-full bg-white rounded-tl-3xl"></div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Content Card with Animation */}
          <AnimatePresence mode="wait">
            {activeContent && (
              <motion.div 
                key={activeStep}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="border border-light-2 rounded-2xl overflow-hidden shadow-sm"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Text Content */}
                  <div className="p-8 md:p-10 bg-gradient-to-br from-light-3 to-white">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-6 text-dark">
                        {activeContent.heading}
                      </h3>
                      <p className="text-medium-2 leading-relaxed">
                        {activeContent.description}
                      </p>
                    </div>
                  </div>

                  {/* Image Placeholder with better styling */}
                  <div className="bg-gray-50 flex items-center justify-center p-8 md:p-10">
                    <div 
                      className="w-full aspect-video bg-gradient-to-br from-light-2/80 to-light-2/50 flex items-center justify-center rounded-lg shadow-inner overflow-hidden border border-light-2/60"
                    >
                      <div className="text-center px-8 py-12">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-light-3 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-dynamic-blue">
                            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                            <circle cx="9" cy="9" r="2" />
                            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                          </svg>
                        </div>
                        <p className="text-medium font-medium">{activeContent.imagePlaceholder}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Step dots for mobile navigation */}
        <div className="flex justify-center gap-2 py-4 md:hidden">
          {onboardingSteps.map((step) => (
            <button
              key={step.id}
              onClick={() => handleStepClick(step.id)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                activeStep === step.id ? 'bg-dynamic-blue scale-125' : 'bg-light-2'
              }`}
              aria-label={`Go to step ${step.id}: ${step.title}`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}