import React, { useState } from 'react';
import { testimonialLogos } from '../data-testimonial/testimonials';

const Video: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  
  return (
    <section className="bg-[#EBF1FF] w-full py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading and subheading above the video */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1C2530] mb-4">
            Meet FluentPro
          </h2>
          <p className="text-xl text-[#4A5768]">
            An AI Powered Business English Speaking Coach
          </p>
        </div>
        
        {/* Video Section with dark background */}
        <div 
          className="relative overflow-hidden rounded-xl shadow-lg"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        > 
          {/* Video container */}
          <div className="aspect-w-16 aspect-h-9 bg-[#0D1127] relative">
            {/* This will be replaced with the actual video */}
            <div className="w-full h-full absolute inset-0">
              {/* Video placeholder - would be replaced with actual video */}
              <img 
                src="/api/placeholder/1200/675" 
                alt="placeholder" 
                className="w-full h-full object-cover opacity-80"
              />
            </div>
            
            {/* Listen button with hover effect */}
            <div className="absolute top-8 left-8 z-20">
              <button 
                className="bg-white rounded-full flex items-center justify-start overflow-hidden transition-all duration-300 ease-in-out shadow-md"
                style={{ 
                  width: isHovering ? '120px' : '48px',
                  height: '48px',
                  paddingLeft: '12px',
                  paddingRight: isHovering ? '16px' : '12px'
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 flex-shrink-0">
                  <path d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                </svg>
                <span 
                  className="ml-2 font-medium whitespace-nowrap transition-opacity duration-300 ease-in-out"
                  style={{ 
                    opacity: isHovering ? 1 : 0,
                    transform: isHovering ? 'translateX(0)' : 'translateX(-10px)',
                    transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out'
                  }}
                >
                  Listen
                </span>
              </button>
            </div>
            
            {/* Play button - properly centered */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <button className="bg-[#5B6FF9]/90 hover:bg-[#4257FF] w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg transform translate-x-0 translate-y-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-8 h-8">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Gradient transition overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-[#0D1127]/0 to-[#EBF1FF] pointer-events-none"></div>
        </div>
        
        {/* Testimonials Section with infinite scroll */}
        <div className="mt-8 relative">
          <div className="flex flex-col md:flex-row items-center py-6">
            {/* Trusted by text - Left side */}
            <div className="w-full md:w-1/4 flex-shrink-0 mb-6 md:mb-0">
              <h3 className="text-xl font-medium text-[#4A5768]">
                Trusted by over 50,000<br className="hidden md:block" /> 
                companies of all sizes
              </h3>
            </div>
            
            {/* Logo carousel with infinite scroll */}
            <div className="w-full md:w-3/4 overflow-hidden bg-[#DEE4F1] rounded-md">
              <div className="marquee-container relative py-4">
                <div className="marquee flex space-x-8">
                  {testimonialLogos.map((logo, index) => (
                    <div 
                      key={`logo-first-${index}`}
                      className="flex-shrink-0 flex items-center justify-center h-10 w-32"
                    >
                      <img 
                        src={logo.src} 
                        alt={logo.alt} 
                        className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" 
                      />
                    </div>
                  ))}
                  
                  {/* Duplicate logos for seamless scrolling */}
                  {testimonialLogos.slice(0, 10).map((logo, index) => (
                    <div 
                      key={`logo-duplicate-${index}`}
                      className="flex-shrink-0 flex items-center justify-center h-10 w-32"
                    >
                      <img 
                        src={logo.src} 
                        alt={logo.alt} 
                        className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" 
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CSS for the infinite scrolling effect */}
      <style jsx>{`
        .marquee-container {
          overflow: hidden;
          width: 100%;
        }
        
        .marquee {
          animation: scroll 30s linear infinite;
          display: flex;
          white-space: nowrap;
        }
        
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-32px * ${testimonialLogos.length})); }
        }
      `}</style>
    </section>
  );
};

export default Video;