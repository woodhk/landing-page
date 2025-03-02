'use client';

// app/(pages)/home/components/AutomatedOnboarding.tsx
import { useState, useEffect } from 'react';
import { onboardingSteps } from '../data/AutomatedOnboarding';
import { motion, AnimatePresence } from 'framer-motion';

export default function AutomatedOnboarding() {
  const [activeStep, setActiveStep] = useState(1);
  const [animationProgress, setAnimationProgress] = useState(0);
  // Use a timestamp for controlling the animation
  const [animationStartTime, setAnimationStartTime] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const activeContent = onboardingSteps.find(step => step.id === activeStep)?.content;
  
  // Setup Intersection Observer to detect when component is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Only set the animation start time once when first entering the view
          if (animationStartTime === null) {
            setAnimationStartTime(Date.now());
          }
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -100px 0px" }
    );
    
    const section = document.getElementById('automated-onboarding-section');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [animationStartTime]);
  
  // Separate effect to handle step transition
  useEffect(() => {
    // Only set up if visible
    if (!isVisible) return;
    
    // Each step is 15 seconds
    const stepDuration = 15000;
    
    // Set up a timer to move to the next step
    const nextStepTimer = setTimeout(() => {
      // Move to the next step (cycling through 1-4)
      const nextStep = activeStep === onboardingSteps.length ? 1 : activeStep + 1;
      setActiveStep(nextStep);
      setAnimationProgress(0);
      
      // Reset animation start time for the new step
      setAnimationStartTime(Date.now());
    }, stepDuration);
    
    // Clean up the timer
    return () => clearTimeout(nextStepTimer);
  }, [activeStep, isVisible, onboardingSteps.length]);
  
  // Animation system that updates progress within a step
  useEffect(() => {
    // Don't run the animation until the section has been viewed
    if (!isVisible || animationStartTime === null) {
      return;
    }
    
    // Animation configuration
    const animationInterval = 50; // Update animation every 50ms for smoothness
    const stepDuration = 15000; // 15 seconds per step
    
    // Animation interval that continuously updates progress within the current step
    const animateProgress = setInterval(() => {
      const now = Date.now();
      const elapsed = now - animationStartTime;
      
      // Calculate progress percentage for the current step (0-100%)
      const progress = Math.min((elapsed / stepDuration) * 100, 100);
      
      // Update progress for current step
      setAnimationProgress(progress);
    }, animationInterval);
    
    // Clean up function
    return () => {
      clearInterval(animateProgress);
    };
  }, [animationStartTime, isVisible]); // Dependencies for progress animation

  const handleStepClick = (stepId: number) => {
    // Set the active step to the one clicked
    setActiveStep(stepId);
    
    // Reset animation progress and start time to now
    setAnimationProgress(0);
    setAnimationStartTime(Date.now());
  };

  return (
    <section id="automated-onboarding-section" className="max-w-7xl mx-auto px-4 py-24">

      {/* Main Content with Enhanced UI */}
      {/* Heading */}
        <div className="text-center mb-16 relative">
        <h2 className="text-4xl md:text-5xl font-bold mb-2 text-dark">Designed for Learners.</h2>
        <h2 className="text-4xl md:text-7xl font-bold mb-3 text-dark">Loved by <span className="text-dynamic-blue">HR and L&D</span></h2>
      </div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="border border-light-2 rounded-3xl overflow-hidden shadow-xl bg-gradient-to-tl from-[#03000A] via-[#0C1234] to-[#1C2E5A] mb-12 relative"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{ 
            backgroundImage: 'radial-gradient(circle, #3B82F6 1px, transparent 2px)', 
            backgroundSize: '20px 20px' 
          }}></div>
        </div>
        <div className="pt-12 pb-8 px-6 md:px-12 text-center relative z-10">
          <p className="text-light-3 text-lg font-medium">From Sign up to Monitoring Training Within Minutes</p>
          <h3 className="text-3xl md:text-5xl font-bold mt-4 mb-10 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent pb-1">
          Automated Staff Onboarding
          </h3>
          
          
          {/* Steps with improved styling */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-10">
            {onboardingSteps.map((step) => (
              <motion.div 
                key={step.id}
                onClick={() => handleStepClick(step.id)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className={`py-3 px-4 rounded-xl cursor-pointer transition-all duration-200 relative overflow-hidden ${
                  activeStep === step.id 
                    ? 'bg-light-3 text-black shadow-md border-b-4 border-light-2'
                    : 'bg-transparent text-white hover:bg-light-2/20'
                }`}
              >
                {/* Progress background that fills up as the animation progresses */}
                {activeStep === step.id && isVisible && animationStartTime !== null && (
                  <div 
                    className="absolute top-0 left-0 h-full bg-light-2 transition-all duration-100"
                    style={{
                      width: `${animationProgress}%`,
                      borderTopRightRadius: '0.75rem',
                      borderBottomRightRadius: '0.75rem'
                    }}
                  />
                )}
                
                {/* Leading edge highlight effect - more visible */}
                {activeStep === step.id && isVisible && animationStartTime !== null && (
                  <div 
                    className="absolute top-0 h-full w-[3px] bg-medium-1"
                    style={{
                      left: `${animationProgress}%`,
                      transform: "translateX(-50%)",
                      transition: "left 50ms linear",
                      boxShadow: "0 0 5px 2px rgba(100, 100, 100, 0.2)"
                    }}
                  />
                )}
                
                <div className="relative z-10 text-left">
                  <div className="flex items-center mb-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3 ${
                      activeStep === step.id 
                        ? 'bg-gradient-to-tl from-dynamic-blue to-white text-white'
                        : 'bg-gradient-to-tl from-dark-1 to-white text-light-2'
                    }`}>
                      {step.id}
                    </div>
                    <h4 className="font-bold text-xl">{step.title}</h4>
                  </div>
                  <p className={`text-sm leading-relaxed ${activeStep === step.id ? 'text-dark/90' : 'text-white/90'}`}>
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
                  <div className="p-8 md:p-10 flex items-center min-h-[350px] bg-gradient-to-br from-[#E8F0FF] via-[#F0F5FF] to-[#FAFAFF] relative overflow-hidden">
                    {/* Decorative gradient circles for visual depth */}
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-dynamic-blue/15 blur-3xl pointer-events-none" />
                      <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-dynamic-blue/10 blur-2xl pointer-events-none" />
                      <div className="text-left relative z-10">
                        <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-dynamic-blue to-light-3 bg-clip-text text-transparent">
                          {activeContent.heading}
                        </h3>
                        <p className="text-medium-2 leading-relaxed">
                          {activeContent.description}
                        </p>
                      </div>
                      </div>

                  {/* Image Placeholder with better styling */}
                  <div className="bg-gradient-to-br from-[#F5F9FF] via-[#EDF4FF] to-[#E8F0FF] flex items-center justify-center p-8 md:p-10 min-h-[350px] relative overflow-hidden">
                    <div 
                      className="w-full aspect-[16/10] bg-white flex items-center justify-center rounded-lg shadow-md overflow-hidden border-2 border-dynamic-blue/30 relative z-10"
                    >
                      {/* Grid background for depth */}
                      <div className="absolute inset-0">
                        <div className="w-full h-full" style={{ 
                          backgroundImage: 'linear-gradient(to right, #E2E8F0 1px, transparent 1px), linear-gradient(to bottom, #E2E8F0 1px, transparent 1px)',
                          backgroundSize: '24px 24px'
                        }}></div>
                      </div>
                      <div className="relative z-10 w-full h-full flex items-center justify-center">
                        <img 
                          src={activeContent.imagePlaceholder}
                          alt={activeContent.heading}
                          className="w-[90%] h-[90%] object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
        
        {/* Step dots for mobile navigation */}
        <div className="flex justify-center gap-2 py-4 md:hidden relative z-10">
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