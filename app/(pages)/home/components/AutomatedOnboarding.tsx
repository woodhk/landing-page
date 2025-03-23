'use client';

// app/(pages)/home/components/AutomatedOnboarding.tsx
import { useState, useEffect } from 'react';
import { onboardingSteps } from '../data/AutomatedOnboarding';
import { motion, AnimatePresence } from 'framer-motion';
import { DocumentManager } from './animations/DocumentManager';
import { InviteStaff } from './animations/InviteStaff';
import { Monitor } from './animations/Monitor';
import { CreateAccount } from './animations/CreateAccount';
import TypewriterText from './animations/TypewriterText';

// Constants
const STEP_DURATION_MS = 15000; // 15 seconds per step
const ANIMATION_INTERVAL_MS = 50; // Update animation every 50ms for smoothness

export default function AutomatedOnboarding() {
  const [activeStep, setActiveStep] = useState(1);
  const [animationProgress, setAnimationProgress] = useState(0);
  const [animationStartTime, setAnimationStartTime] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [expandedStep, setExpandedStep] = useState<number | null>(1);
  
  const activeContent = onboardingSteps.find(step => step.id === activeStep)?.content;
  
  // Setup Intersection Observer to detect when component is in view
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
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
    };
    
    const observer = new IntersectionObserver(
      handleIntersection,
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
  
  // Handle step transitions
  useEffect(() => {
    if (!isVisible) return;
    
    const nextStepTimer = setTimeout(() => {
      const nextStep = activeStep === onboardingSteps.length ? 1 : activeStep + 1;
      setActiveStep(nextStep);
      setAnimationProgress(0);
      setAnimationStartTime(Date.now());
    }, STEP_DURATION_MS);
    
    return () => clearTimeout(nextStepTimer);
  }, [activeStep, isVisible, onboardingSteps.length]);
  
  // Update animation progress within current step
  useEffect(() => {
    if (!isVisible || animationStartTime === null) {
      return;
    }
    
    const animateProgress = setInterval(() => {
      const now = Date.now();
      const elapsed = now - animationStartTime;
      const progress = Math.min((elapsed / STEP_DURATION_MS) * 100, 100);
      setAnimationProgress(progress);
    }, ANIMATION_INTERVAL_MS);
    
    return () => clearInterval(animateProgress);
  }, [animationStartTime, isVisible]);

  // Handle user clicking on a step
  const handleStepClick = (stepId: number) => {
    setActiveStep(stepId);
    setAnimationProgress(0);
    setAnimationStartTime(Date.now());
    setExpandedStep(expandedStep === stepId ? null : stepId);
  };

  // Render the appropriate animation component based on step ID
  const renderStepAnimation = (stepId: number) => {
    switch(stepId) {
      case 1: return <CreateAccount />;
      case 2: return <DocumentManager />;
      case 3: return <InviteStaff />;
      case 4: return <Monitor />;
      default: return null;
    }
  };

  // Render step card for desktop view
  const renderDesktopStepCard = (step: typeof onboardingSteps[0]) => (
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
      {/* Progress background */}
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
      
      {/* Leading edge highlight */}
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
  );

  // Render mobile step accordion item
  const renderMobileStepAccordion = (step: typeof onboardingSteps[0]) => (
    <div key={step.id} className="w-full">
      {/* Step header - always visible */}
      <motion.div 
        onClick={() => handleStepClick(step.id)}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className={`py-3 px-4 rounded-t-xl cursor-pointer transition-all duration-200 relative overflow-hidden ${
          expandedStep === step.id 
            ? 'bg-light-3 text-black shadow-md'
            : 'bg-transparent text-white hover:bg-light-2/20 rounded-xl'
        }`}
      >
        <div className="relative z-10 text-left flex justify-between items-center">
          <div className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3 ${
              expandedStep === step.id 
                ? 'bg-gradient-to-tl from-dynamic-blue to-white text-white'
                : 'bg-gradient-to-tl from-dark-1 to-white text-light-2'
            }`}>
              {step.id}
            </div>
            <div>
              <h4 className="font-bold text-lg">{step.title}</h4>
              <p className={`text-xs leading-relaxed ${expandedStep === step.id ? 'text-dark/90' : 'text-white/90'}`}>
                {step.subtitle}
              </p>
            </div>
          </div>
          <div className="text-xl">
            {expandedStep === step.id ? '−' : '+'}
          </div>
        </div>
      </motion.div>
      
      {/* Expandable content */}
      <AnimatePresence>
        {expandedStep === step.id && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`overflow-hidden rounded-b-xl ${
              expandedStep === step.id 
                ? 'bg-gradient-to-b from-light-3 to-[#E8F0FF]' 
                : ''
            }`}
          >
            {/* Text Content */}
            <div className="p-5 bg-gradient-to-br from-[#E8F0FF] via-[#F0F5FF] to-[#FAFAFF] relative overflow-hidden">
              <div className="text-left relative z-10">
                <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-dynamic-blue to-light-3 bg-clip-text text-transparent">
                  {step.content.heading}
                </h3>
                <p className="text-medium-2 text-sm leading-relaxed">
                  {step.content.description}
                </p>
              </div>
            </div>

            {/* Image Container */}
            <div className="bg-gradient-to-br from-[#F5F9FF] via-[#EDF4FF] to-[#E8F0FF] p-5 relative overflow-hidden">
              <div 
                className="w-full aspect-square bg-white flex items-center justify-center rounded-lg shadow-md overflow-hidden relative z-10"
              >
                {/* Grid background - only for specific components */}
                {step.id !== 2 && step.id !== 3 && (
                  <div className="absolute inset-0">
                    <div className="w-full h-full" style={{ 
                      backgroundImage: 'linear-gradient(to right, #E2E8F0 1px, transparent 1px), linear-gradient(to bottom, #E2E8F0 1px, transparent 1px)',
                      backgroundSize: '24px 24px'
                    }}></div>
                  </div>
                )}
                <div className="relative z-10 w-full h-full flex items-center justify-center p-2">
                  {renderStepAnimation(step.id)}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  // Render desktop content card with animation
  const renderDesktopContentCard = () => (
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
              {/* Decorative gradient circles */}
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

            {/* Animation Container */}
            <div className="bg-gradient-to-br from-[#F5F9FF] via-[#EDF4FF] to-[#E8F0FF] flex items-center justify-center p-8 md:p-10 min-h-[350px] relative overflow-hidden">
              <div 
                className="w-full aspect-[16/10] bg-white flex items-center justify-center rounded-lg shadow-md overflow-hidden border-2 border-dynamic-blue/30 relative z-10"
              >
                {/* Grid background */}
                <div className="absolute inset-0">
                  <div className="w-full h-full" style={{ 
                    backgroundImage: 'linear-gradient(to right, #E2E8F0 1px, transparent 1px), linear-gradient(to bottom, #E2E8F0 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                  }}></div>
                </div>
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  {renderStepAnimation(activeStep)}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <section id="automated-onboarding-section" className="w-full px-4 py-24 bg-gradient-to-b from-light-3 to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 text-dark">Designed for Learners.</h2>
          <h2 className="text-4xl md:text-7xl font-bold mb-3 text-dark">
            Loved by <TypewriterText />
          </h2>
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
            
            {/* Desktop view */}
            <div className="hidden md:block">
              {/* Steps */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-10">
                {onboardingSteps.map(renderDesktopStepCard)}
              </div>

              {/* Content Card with Animation */}
              {renderDesktopContentCard()}
            </div>

            {/* Mobile view - accordion style */}
            <div className="md:hidden space-y-4">
              {onboardingSteps.map(renderMobileStepAccordion)}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}