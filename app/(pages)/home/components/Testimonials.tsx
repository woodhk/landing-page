import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { firstRowTestimonials, secondRowTestimonials } from '../data/Testimonial2';

interface TestimonialItemProps {
  testimonial: string;
  companyName: string;
  role: string;
  logo: string;
  highlightQuote: string;
}

const TestimonialItem: React.FC<TestimonialItemProps> = ({ testimonial, companyName, role, logo, highlightQuote }) => {
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Get a shortened testimonial if it's too long - shorter on mobile
  const shortenLength = isMobile ? 80 : 120;
  const shortenedTestimonial = testimonial.length > shortenLength ? 
    `${testimonial.substring(0, shortenLength)}...` : testimonial;
  
  // Apply additional styles when expanded - more responsive approach
  const cardStyle = expanded ? 
    "h-auto min-h-[280px] sm:min-h-[320px] z-10" : 
    "h-auto sm:h-[320px]";
  
  return (
    <motion.div 
      className={`group bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg border border-blue-50 dark:border-blue-900 p-4 sm:p-6 flex flex-col ${cardStyle} hover:shadow-xl transition-all duration-300`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      {/* Highlighted Quote - smaller on mobile */}
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white relative z-10 mb-2 sm:mb-3 leading-tight">
        "{highlightQuote}"
      </h3>
      
      {/* Testimonial content - improved handling for mobile */}
      <div className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 flex-grow leading-relaxed overflow-hidden">
        {expanded ? (
          <div>
            <motion.div
              initial={{ height: "auto" }}
              animate={{ height: "auto" }}
              transition={{ duration: 0.3 }}
            >
              <p>{testimonial}</p>
              <button 
                onClick={() => setExpanded(false)}
                className="text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-medium mt-2 flex items-center hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                aria-label="View less content"
              >
                View less
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </motion.div>
          </div>
        ) : (
          <div>
            <p>{shortenedTestimonial}</p>
            {testimonial.length > shortenLength && (
              <button 
                onClick={() => setExpanded(true)}
                className="text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-medium mt-2 flex items-center hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                aria-label="View more content"
              >
                View more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            )}
          </div>
        )}
      </div>
      
      {/* Author info with logo - more compact on mobile */}
      <div className="flex items-center mt-auto">
        <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full overflow-hidden mr-2 sm:mr-3 bg-blue-50 dark:bg-blue-900 flex items-center justify-center border border-gray-100 dark:border-gray-700 shadow-sm">
          <img 
            src={logo} 
            alt={`${companyName} logo`} 
            className="h-6 sm:h-8 w-auto object-contain"
          />
        </div>
        <div>
          <h4 className="text-gray-900 dark:text-white font-semibold text-xs sm:text-sm">{companyName}</h4>
          <p className="text-blue-600 dark:text-blue-400 text-xs font-medium">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonial: React.FC = () => {
  // State to track which set of testimonials to show
  const [showFirstSet, setShowFirstSet] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0); // Track active slide for mobile view
  
  // Create the combined testimonial data with highlight quotes
  const allTestimonials = [
    // First set - Bank of East Asia, Phillips, DKSH
    {
      ...firstRowTestimonials[0],
      highlightQuote: "Professional, and high-quality language training"
    },
    {
      ...secondRowTestimonials[3], // Phillips
      highlightQuote: "Effective methods, quality materials, and results-driven"
    },
    {
      ...firstRowTestimonials[2], // DKSH
      highlightQuote: "Tailored, interactive, and practical English training"
    },
    
    // Second set - Adidas, MTR, Wing Hang Bank
    {
      ...firstRowTestimonials[3], // Adidas
      highlightQuote: "Professional approach to language training"
    },
    {
      ...secondRowTestimonials[0], // MTR
      highlightQuote: "Thoroughly practical and appropriate"
    },
    {
      ...firstRowTestimonials[1], // Wing Hang Bank
      highlightQuote: "Practical and intensive training"
    }
  ];
  
  // First set: 0-2, Second set: 3-5
  const firstSetTestimonials = allTestimonials.slice(0, 3);
  const secondSetTestimonials = allTestimonials.slice(3, 6);
  
  // Flatten testimonials for mobile slider
  const mobileTestimonials = [...firstSetTestimonials, ...secondSetTestimonials];

  // Handle tab change for desktop view
  const handleSetChange = (showFirst: boolean) => {
    if (isAnimating || showFirst === showFirstSet) return;
    
    setIsAnimating(true);
    setShowFirstSet(showFirst);
    
    // Reset animation state after animation completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  // Handle mobile navigation
  const handleMobileNav = (direction: 'prev' | 'next') => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    if (direction === 'prev') {
      setActiveIndex((prev) => (prev === 0 ? mobileTestimonials.length - 1 : prev - 1));
    } else {
      setActiveIndex((prev) => (prev === mobileTestimonials.length - 1 ? 0 : prev + 1));
    }
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };

  return (
    <section className="py-12 sm:py-16 md:py-24 pb-16 bg-gradient-to-b from-indigo-50 to-white dark:from-indigo-900 dark:to-gray-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 dark:bg-blue-900 rounded-full opacity-30 blur-3xl -translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-100 dark:bg-indigo-900 rounded-full opacity-30 blur-3xl translate-x-1/3 translate-y-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section heading - Improved for mobile */}
        <motion.div 
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 shadow-sm mb-4 sm:mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1 sm:mr-1.5">
              <path d="M21 15l-9-9-9 9" />
              <path d="M21 11l-9-9-9 9" />
              <path d="M21 7l-9-9-9 9" />
            </svg>
            Client Achievements
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight mb-4 sm:mb-6">
            <span className="block">Trusted and Respected in</span>
            <span className="text-blue-600 dark:text-blue-400 inline">Hong Kong</span> for 30+ Years
          </h2>
        </motion.div>

        {/* Mobile carousel view - only visible on smaller screens */}
        <div className="md:hidden relative mb-12">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {mobileTestimonials.map((testimonial, index) => (
                <div key={`mobile-${index}`} className="w-full flex-shrink-0 px-1">
                  <TestimonialItem
                    testimonial={testimonial.testimonial}
                    companyName={testimonial.companyName}
                    role={testimonial.role}
                    logo={testimonial.logo}
                    highlightQuote={testimonial.highlightQuote}
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile navigation controls */}
          <div className="flex justify-center items-center mt-6 space-x-4">
            <button 
              onClick={() => handleMobileNav('prev')}
              disabled={isAnimating}
              className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors text-gray-500 dark:text-gray-400"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            
            <div className="flex space-x-1">
              {mobileTestimonials.map((_, index) => (
                <button 
                  key={`indicator-${index}`}
                  onClick={() => {
                    setIsAnimating(true);
                    setActiveIndex(index);
                    setTimeout(() => setIsAnimating(false), 300);
                  }}
                  disabled={isAnimating}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index 
                      ? 'w-6 bg-blue-600 dark:bg-blue-400' 
                      : 'w-2 bg-gray-300 dark:bg-gray-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
            
            <button 
              onClick={() => handleMobileNav('next')}
              disabled={isAnimating}
              className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors text-gray-500 dark:text-gray-400"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop view - hidden on mobile */}
        <div className="hidden md:block relative min-h-[480px] overflow-hidden">
          {/* Combined container for testimonial sets */}
          <div 
            className="flex w-[200%] transition-transform duration-500 ease-in-out absolute inset-0" 
            style={{ transform: showFirstSet ? 'translateX(0%)' : 'translateX(-50%)' }}
          >
            {/* First set of testimonials */}
            <div className="w-full min-w-[50%] pr-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                {firstSetTestimonials.map((testimonial, index) => (
                  <TestimonialItem
                    key={`first-${index}`}
                    testimonial={testimonial.testimonial}
                    companyName={testimonial.companyName}
                    role={testimonial.role}
                    logo={testimonial.logo}
                    highlightQuote={testimonial.highlightQuote}
                  />
                ))}
              </div>
            </div>
            
            {/* Second set of testimonials */}
            <div className="w-full min-w-[50%] pl-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                {secondSetTestimonials.map((testimonial, index) => (
                  <TestimonialItem
                    key={`second-${index}`}
                    testimonial={testimonial.testimonial}
                    companyName={testimonial.companyName}
                    role={testimonial.role}
                    logo={testimonial.logo}
                    highlightQuote={testimonial.highlightQuote}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Desktop navigation controls */}
          <div className="flex justify-center items-center absolute bottom-5 left-0 right-0 space-x-4">
            <button 
              onClick={() => handleSetChange(true)}
              disabled={isAnimating}
              className={`${showFirstSet ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 'bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400'} p-3 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors group`}
              aria-label="Previous testimonials"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            
            <div className="flex space-x-2">
              <button 
                onClick={() => handleSetChange(true)}
                disabled={isAnimating}
                className={`h-2 rounded-full transition-all duration-300 ${showFirstSet ? 'w-8 bg-blue-600 dark:bg-blue-400' : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-blue-400 dark:hover:bg-blue-500'}`}
                aria-label="Show first set"
              ></button>
              <button 
                onClick={() => handleSetChange(false)}
                disabled={isAnimating}
                className={`h-2 rounded-full transition-all duration-300 ${showFirstSet ? 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-blue-400 dark:hover:bg-blue-500' : 'w-8 bg-blue-600 dark:bg-blue-400'}`}
                aria-label="Show second set"
              ></button>
            </div>
            
            <button 
              onClick={() => handleSetChange(false)}
              disabled={isAnimating}
              className={`${!showFirstSet ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 'bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400'} p-3 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors group`}
              aria-label="Next testimonials"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;