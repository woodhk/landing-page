import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { testimonialLogos } from '../data/testimonial';

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [visibleLogos, setVisibleLogos] = useState<number>(4);
  
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
  
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-8xl font-semibold text-gray-800 leading-tight mb-12 flex items-center justify-center">
            Product of Hong Kong's Leading Business English Training Consultancy for 30+ Years
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