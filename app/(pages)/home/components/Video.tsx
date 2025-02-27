import React, { useState } from 'react';

const Video: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  
  return (
    <section className="bg-[#EBF1FF] w-screen max-w-full overflow-hidden">
      {/* Content container with centered max width */}
      <div className="py-16">
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
          className="relative overflow-hidden rounded-xl shadow-lg max-w-7xl lg:max-w-6xl mx-auto"
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
        </div>
      </div>
    </section>
  );
};

export default Video;