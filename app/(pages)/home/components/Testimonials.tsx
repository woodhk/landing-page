import React, { useRef, useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import { testimonialLogos } from '../data/testimonial';

// Helper function to clamp a value between min and max
const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

// Define the heading text outside the component
const headingText = "Product of Hong Kong's Leading Business English Training Consultancy for 30+ Years";
const words = headingText.split(' ');
const totalWords = words.length;

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null); // Ref for the whole heading
  const [visibleLogos, setVisibleLogos] = useState<number>(4);
  const [scrollProgress, setScrollProgress] = useState<number>(0); // Overall progress (0 to 1) based on heading visibility
  const animationFrameId = useRef<number | null>(null);
  
  // We'll create a duplicate set of logos to ensure continuous scrolling
  const allLogos = [...testimonialLogos, ...testimonialLogos];
  
  // Adjust the number of visible logos based on screen size
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setVisibleLogos(2);
      } else if (width < 1024) {
        setVisibleLogos(3);
      } else {
        setVisibleLogos(4);
      }
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Scroll handler to update OVERALL heading progress
  const handleScroll = useCallback(() => {
    if (!headingRef.current) return;

    const element = headingRef.current;
    const rect = element.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    // Define the scroll range for the animation (based on the whole heading)
    const start = viewportHeight; // Starts when top of heading enters bottom of viewport
    const end = viewportHeight * 0.3; // Ends when top of heading reaches 30% from viewport top

    const rawProgress = (start - rect.top) / (start - end);
    const progress = clamp(rawProgress, 0, 1);

    setScrollProgress(progress); // Update single progress state

    // Cancel the previous frame
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
    }
    animationFrameId.current = null;

  }, []); // No dependencies needed

  // Effect to attach throttled scroll listener for overall progress
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
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1
            ref={headingRef} // Ref applied to the container H1
            className="text-4xl md:text-5xl lg:text-8xl font-semibold leading-tight mb-12 flex flex-wrap items-center justify-center"
            aria-label={headingText} // Add aria-label for accessibility since spans might affect screen readers
          >
            {words.map((word, index) => {
              // Calculate which word *should* be animating based on overall progress
              const wordSegment = 1 / totalWords;
              // Determine the index of the word that is currently undergoing transition
              const activeWordIndex = Math.floor(scrollProgress / wordSegment);

              let lightness: number;

              if (index < activeWordIndex) {
                 // Word is fully revealed (dark)
                 lightness = 20;
              } else if (index > activeWordIndex) {
                 // Word is not yet revealed (light gray)
                 lightness = 70;
              } else {
                 // This is the currently active word, calculate its specific progress
                 // Handle edge case where scrollProgress is exactly 1
                 if (scrollProgress === 1) {
                     lightness = 20; // Fully dark if progress is 1
                 } else {
                     const progressInCurrentSegment = (scrollProgress % wordSegment) / wordSegment;
                     // Interpolate from 70% to 20% lightness based on segment progress
                     lightness = 70 - progressInCurrentSegment * 50;
                 }
              }

              // Clamp lightness just in case (shouldn't be needed with prior logic, but safe)
              lightness = clamp(lightness, 20, 70);

              return (
                <span
                  key={index}
                  // No individual refs needed anymore
                  style={{
                      color: `hsl(0, 0%, ${lightness}%)`,
                      display: 'inline-block', // Ensures proper spacing/wrapping
                      marginRight: '0.25em', // Adjust spacing as needed
                      transition: 'color 0.05s linear' // Add a minimal CSS transition for slight smoothness
                  }}
                >
                  {word}
                </span>
              );
            })}
          </h1>
          
          <div className="mb-8">
            <a 
              href="#" 
              className="text-blue-600 hover:text-blue-800 font-medium transition-colors text-lg inline-flex items-center"
            >
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
          
          <div className="mt-12">
            <p className="text-md uppercase tracking-wider text-gray-500 font-medium mb-6">
              Trusted by over 200 companies of all sizes
            </p>
            
            {/* Fixed width container to control the number of visible logos */}
            <div className="overflow-hidden mx-auto" style={{ maxWidth: `${visibleLogos * 240}px` }}>
              {/* Scrolling container */}
              <div ref={scrollRef} className="logo-scroll flex py-8">
                {allLogos.map((logo, index) => (
                  <div 
                    key={index} 
                    className="flex-shrink-0 mx-8" 
                    style={{ width: '180px' }}
                  >
                    <Image 
                      src={logo.src}
                      alt={logo.alt}
                      width={180}
                      height={90}
                      className="h-auto w-auto max-h-24 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
                      priority={index < 10} // Priority load first few images
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;