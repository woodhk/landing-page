"use client";
import React, { useRef, useEffect, useState, useCallback } from 'react';
import Image from 'next/image'; // Import the Image component
import benefitData from '../data/benefit';
import * as Icons from 'lucide-react'; // Import all icons

// Helper function to clamp a value between min and max (copied from Testimonials.tsx)
const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

// Define the heading text outside the component
const headingText = "Improve Training Relevancy with Company Specific Personalisation";
const words = headingText.split(' ');
const totalWords = words.length;

const Benefits: React.FC = () => {
  // Refs and State for animation
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0); // Overall progress (0 to 1) based on heading visibility
  const animationFrameId = useRef<number | null>(null);

  // Scroll handler to update heading progress (adapted from Testimonials.tsx)
  const handleScroll = useCallback(() => {
    if (!headingRef.current) return;

    const element = headingRef.current;
    const rect = element.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    // Define the scroll range for the animation
    const start = viewportHeight; // Starts when top of heading enters bottom of viewport
    const end = viewportHeight * 0.4; // Ends when top of heading reaches 40% from viewport top (adjust as needed)

    const rawProgress = (start - rect.top) / (start - end);
    const progress = clamp(rawProgress, 0, 1);

    setScrollProgress(progress); // Update single progress state

    // Cancel the previous frame
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
    }
    animationFrameId.current = null;

  }, []); // No dependencies needed

  // Effect to attach throttled scroll listener for progress (adapted from Testimonials.tsx)
  useEffect(() => {
    const throttledScrollHandler = () => {
      if (!animationFrameId.current) {
        animationFrameId.current = requestAnimationFrame(handleScroll);
      }
    };

    window.addEventListener('scroll', throttledScrollHandler, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', throttledScrollHandler);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [handleScroll]);

  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto px-4">
        <h1 
          ref={headingRef} // Apply ref to H1
          // Added flex layout for word wrapping and centering
          className="text-center text-4xl lg:text-7xl max-w-5xl mx-auto font-bold text-gray-900 mb-16 flex flex-wrap items-center justify-center"
          aria-label={headingText} // Add aria-label for accessibility
        >
          {/* Map over words to apply animation */}
          {words.map((word, index) => {
              // Calculate which word *should* be animating based on overall progress
              const wordSegment = 1 / totalWords;
              const activeWordIndex = Math.floor(scrollProgress / wordSegment);

              let lightness: number;

              if (index < activeWordIndex) {
                 // Word is fully revealed (dark)
                 lightness = 10; // Changed from 20 to 10 for darker text
              } else if (index > activeWordIndex) {
                 // Word is not yet revealed (light gray)
                 lightness = 70; // Lighter gray
              } else {
                 // This is the currently active word, calculate its specific progress
                 if (scrollProgress === 1) {
                     lightness = 10; // Changed from 20 to 10 for darker text
                 } else {
                     const progressInCurrentSegment = (scrollProgress % wordSegment) / wordSegment;
                     // Interpolate from 70% to 10% lightness based on segment progress
                     lightness = 70 - progressInCurrentSegment * 60; // Adjusted interpolation range
                 }
              }

              // Clamp lightness just in case
              lightness = clamp(lightness, 10, 70); // Adjusted clamp range

              return (
                <span
                  key={index}
                  style={{
                      color: `hsl(0, 0%, ${lightness}%)`,
                      display: 'inline-block', // Ensures proper spacing/wrapping
                      marginRight: '0.25em', // Adjust spacing as needed (tailwind class mr-1 or mr-2 could also work)
                      transition: 'color 0.05s linear' // Add a minimal CSS transition for slight smoothness
                  }}
                  className="leading-snug lg:leading-tight" // Adjust line height if needed
                >
                  {word}
                </span>
              );
            })}
        </h1>
        
        {/* Start Two-column Layout Container */}
        {/* Adjusted column widths: 3/5 for image, 2/5 for cards on lg screens */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mt-16 items-start"> 
          
          {/* Left Column: Image */}
          {/* Increased width share and removed max-width */}
          <div className="w-full lg:w-3/5 flex justify-center lg:justify-start"> 
            <Image 
              src="/ui-elements/companySpecific.png"
              alt="AI Teacher illustration"
              width={1000} // Increased base width for larger container
              height={750} // Increased base height
              className="w-full h-auto border border-gray-200 rounded-2xl shadow-sm" 
              priority 
            />
          </div>

          {/* Right Column: Vertically Stacked Cards */}
          {/* Adjusted width share */}
          <div className="w-full lg:w-2/5 flex flex-col gap-6"> 
            {benefitData.map((feature, index) => {
              const IconComponent = (Icons as any)[feature.iconName];

              return (
                <div 
                  key={index} 
                  className="bg-white rounded-lg p-6 border border-gray-200 transition-all duration-300 hover:border-dynamic-blue/40 hover:shadow-sm flex flex-col items-start text-left" 
                >
                  <div className="mb-4"> 
                    {IconComponent ? (
                      <IconComponent className="w-10 h-10 text-dynamic-blue" /> 
                    ) : (
                      <Icons.HelpCircle className="w-10 h-10 text-dynamic-blue" /> 
                    )}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3> 
                  
                  <p className="text-base text-gray-600 leading-relaxed"> 
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        {/* End Two-column Layout Container */}

      </div>
    </section>
  );
};

export default Benefits;
