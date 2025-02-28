'use client';

// app/(pages)/home/components/AutomatedOnboarding.tsx
import { useState, useEffect } from 'react';
import { onboardingSteps } from '../data/AutomatedOnboarding';
import { motion, AnimatePresence } from 'framer-motion';

export default function AutomatedOnboarding() {
  const [activeStep, setActiveStep] = useState(1);
  const [animationProgress, setAnimationProgress] = useState(0);
  const [lastInteractionTime, setLastInteractionTime] = useState<number>(Date.now());
  
  const activeContent = onboardingSteps.find(step => step.id === activeStep)?.content;
  
  // Animation system that resets whenever the user interacts or a step completes
  useEffect(() => {
    // Animation configuration
    const animationInterval = 50; // Update animation every 50ms for smoothness
    const stepDuration = 15000; // 15 seconds per step
    
    // Start time reference (updates when user interacts)
    const startTime = lastInteractionTime;
    
    // Animation interval that respects interaction time
    const animateProgress = setInterval(() => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = (elapsed / stepDuration) * 100;
      
      // Update progress based on elapsed time since last interaction
      setAnimationProgress(progress);
      
      // When reaching 100%, move to next step and reset interaction time
      if (progress >= 100) {
        // Move to next step in sequence
        setActiveStep(prevStep => {
          return prevStep < 4 ? prevStep + 1 : 1;
        });
        
        // Update the last interaction time to now
        setLastInteractionTime(now);
      }
    }, animationInterval);
    
    // Clean up function
    return () => {
      clearInterval(animateProgress);
    };
  }, [lastInteractionTime]); // Now depends on interaction time, so resets when user clicks

  const handleStepClick = (stepId: number) => {
    // Set the active step to the one clicked
    setActiveStep(stepId);
    
    // Update the interaction time to now - this will reset the animation
    setLastInteractionTime(Date.now());
  };

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
        className="border border-light-2 rounded-3xl overflow-hidden shadow-xl bg-gradient-to-b from-[#F4F8FF] to-[#E8F0FF] mb-12"
      >
        <div className="pt-12 pb-6 px-6 md:px-12 text-center">
          <p className="text-dark-2 text-lg font-medium">From Sign up to Monitoring Training Within Minutes</p>
          <h3 className="text-3xl md:text-4xl font-bold mt-4 mb-10 text-dark">Automated Staff <span className="text-dynamic-blue">Onboarding</span></h3>
          
          
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
                    ? 'bg-dynamic-blue text-white shadow-md border-b-4 border-deep-dynamic-blue'
                    : 'bg-transparent text-dark hover:bg-light-2/50'
                }`}
              >
                {/* Progress background that fills up as the animation progresses */}
                {activeStep === step.id && (
                  <div 
                    className="absolute top-0 left-0 h-full bg-white/15 transition-all duration-100"
                    style={{
                      width: `${animationProgress}%`,
                      borderTopRightRadius: '0.75rem',
                      borderBottomRightRadius: '0.75rem'
                    }}
                  />
                )}
                
                {/* Leading edge highlight effect - more subtle */}
                {activeStep === step.id && (
                  <div 
                    className="absolute top-0 h-full w-[3px] bg-white/20"
                    style={{
                      left: `${animationProgress}%`,
                      transform: "translateX(-50%)",
                      transition: "left 50ms linear",
                      boxShadow: "0 0 5px 2px rgba(255, 255, 255, 0.08)"
                    }}
                  />
                )}
                
                <div className="relative z-10 text-left">
                  <div className="flex items-center mb-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3 ${
                      activeStep === step.id 
                        ? 'bg-white text-dynamic-blue'
                        : 'bg-dynamic-blue text-white'
                    }`}>
                      {step.id}
                    </div>
                    <h4 className="font-bold text-xl">{step.title}</h4>
                  </div>
                  <p className={`text-sm leading-relaxed ${activeStep === step.id ? 'text-white/90' : 'text-medium-2'}`}>
                    {step.subtitle}
                  </p>
                </div>
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
                className="border-2 border-dynamic-blue/40 rounded-2xl overflow-hidden shadow-xl mb-12"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Text Content */}
                  <div className="p-8 md:p-10 flex items-center min-h-[350px] bg-gradient-to-br from-dynamic-blue/15 to-white">
                    <div className="text-left">
                      <h3 className="text-2xl md:text-3xl font-bold mb-6 text-dark">
                        {activeContent.heading}
                      </h3>
                      <p className="text-medium-2 leading-relaxed">
                        {activeContent.description}
                      </p>
                    </div>
                  </div>

                  {/* Image Placeholder with better styling */}
                  <div className="bg-gradient-to-br from-dynamic-blue/5 to-light-3 flex items-center justify-center p-8 md:p-10 min-h-[350px]">
                    <div 
                      className="w-full aspect-[16/10] bg-white flex items-center justify-center rounded-lg shadow-md overflow-hidden border-2 border-dynamic-blue/30"
                    >
                      <div className="text-center px-8 py-12">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-dynamic-blue/10">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-dynamic-blue">
                            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                            <circle cx="9" cy="9" r="2" />
                            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                          </svg>
                        </div>
                        <p className="font-medium text-dynamic-blue">{activeContent.imagePlaceholder}</p>
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
                activeStep === step.id 
                  ? 'bg-dynamic-blue scale-125'
                  : 'bg-light'
              }`}
              aria-label={`Go to step ${step.id}: ${step.title}`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}