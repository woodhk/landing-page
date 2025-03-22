import React, { useState } from 'react';
import { testimonialLogos } from '../data/testimonials';

const Video = () => {
  const [isHovering, setIsHovering] = useState(false);
  
  return (
    <>
      <section className="relative w-full overflow-hidden">
        {/* Dot pattern continuation */}
        <div className="absolute top-0 left-0 right-0 h-32 w-full">
          <div 
            className="absolute inset-0 w-full h-full opacity-[0.15]"
            style={{ 
              backgroundImage: 'radial-gradient(circle, #3B82F6 1px, transparent 2px)', 
              backgroundSize: '20px 20px',
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%)'
            }}
          />
        </div>

        {/* Top gradient - white to blue */}
        <div className="absolute top-0 left-0 right-0 h-16 md:h-24 bg-gradient-to-b from-white to-[#EBF1FF] w-full"></div>
        
        {/* Main content with solid blue background */}
        <div className="bg-[#EBF1FF] w-full pt-16 md:pt-24 pb-16 md:pb-20 px-4 sm:px-6">
          {/* Heading and subheading above the video */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-5xl sm:text-5xl md:text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-dark to-[#4257FF] text-dark mb-3 md:mb-4">
              Meet FluentPro
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-medium">
              An AI Powered Business English Speaking Coach
            </p>
          </div>
          
          {/* Video Section with dark background */}
          <div 
            className="relative overflow-hidden rounded-lg md:rounded-xl shadow-md md:shadow-lg max-w-7xl lg:max-w-6xl mx-auto"
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
              
              {/* Listen button with hover effect - hidden on smallest screens */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 z-20 hidden sm:block">
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
              
              {/* Play button - properly centered with responsive sizing */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <button className="bg-[#5B6FF9]/90 hover:bg-[#4257FF] w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Testimonials bar - redesigned for mobile */}
          <div className="relative z-10 mt-8 sm:mt-10 md:mt-14 max-w-7xl lg:max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center">
              {/* Trusted by text - Top on mobile, Left side on desktop */}
              <div className="min-w-fit sm:pr-6 md:pr-10 mb-4 sm:mb-0 text-center sm:text-left">
                <h3 className="text-lg md:text-xl font-bold text-dark">
                  <span className="sm:hidden">Trusted by 100+ Industry Leaders</span>
                  <span className="hidden sm:block">Trusted by 100+<br />Industry Leaders</span>
                </h3>
              </div>
              
              {/* Logo carousel with fade effect */}
              <div className="flex-1 overflow-hidden relative w-full">
                {/* Left fade gradient */}
                <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-16 z-10 bg-gradient-to-r from-[#EBF1FF] to-transparent"></div>
                
                <div className="marquee-container py-3 md:py-4">
                  <div className="marquee flex space-x-8 sm:space-x-12 md:space-x-16">
                    {testimonialLogos.map((logo, index) => (
                      <div 
                        key={`logo-first-${index}`}
                        className="flex-shrink-0 flex items-center justify-center h-8 sm:h-10 md:h-12"
                      >
                        <img 
                          src={logo.src} 
                          alt={logo.alt} 
                          className="h-8 sm:h-10 md:h-14 w-auto object-contain" 
                        />
                      </div>
                    ))}
                    
                    {/* Duplicate logos for seamless scrolling */}
                    {testimonialLogos.slice(0, 20).map((logo, index) => (
                      <div 
                        key={`logo-duplicate-${index}`}
                        className="flex-shrink-0 flex items-center justify-center h-8 sm:h-10 md:h-12"
                      >
                        <img 
                          src={logo.src} 
                          alt={logo.alt} 
                          className="h-8 sm:h-10 md:h-14 w-auto object-contain" 
                        />
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Right fade gradient */}
                <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-16 z-10 bg-gradient-to-l from-[#EBF1FF] to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom gradient - blue to white */}
        <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 bg-gradient-to-b from-[#EBF1FF] to-white w-full"></div>
      </section>
      
      <style jsx>{`
        .marquee-container {
          overflow: hidden;
          width: 100%;
        }
        
        .marquee {
          animation: scroll 60s linear infinite;
          display: flex;
          white-space: nowrap;
        }
        
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-32px * ${testimonialLogos.length})); }
        }
        
        @media (max-width: 640px) {
          .marquee {
            animation: scroll 60s linear infinite;
          }
        }
      `}</style>
    </>
  );
};

export default Video;