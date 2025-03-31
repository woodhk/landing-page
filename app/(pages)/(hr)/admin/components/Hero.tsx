import React from 'react';
import Button from '../../../../../components/shared/Button';

const HeroSection: React.FC = () => {

  return (
    <>
    <div className="relative">
      {/* SVG background image */}
      <div className="absolute inset-0 w-full h-[calc(100%+12rem)] -top-24">
        <div 
          className="absolute inset-0 w-full h-full"
          style={{ 
            backgroundImage: 'url("/abstract-bg/abstract-bg-hero-3.svg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: 'scaleX(-1)',
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 85%, rgba(0,0,0,0.1) 95%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 85%, rgba(0,0,0,0.1) 95%, rgba(0,0,0,0) 100%)'
          }}
        />
      </div>

      {/* Background gradient element */}
      <div className="absolute -top-0 -right-0 w-60 md:w-96 h-60 md:h-96 rounded-full bg-gradient-to-br from-dynamic-blue/10 to-neon-violet/5 blur-2xl" />

      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 items-center py-4 md:py-8 pb-12 md:pb-32 md:pt-32 px-4 sm:px-6 lg:px-4 max-w-7xl mx-auto">
        <div className="flex flex-col space-y-4 md:space-y-6 max-w-[560px]">
          {/* Main content with improved vertical rhythm */}
          <div>
            <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold text-dark leading-tight mb-3">
            Track ROI From Your Team's English Training Instantly
            </h1>
          </div>
          
          {/* Features with improved design - Custom check items */}
          <div>
            <p className="text-xl font-medium text-gray-900">
            Get real-time insights on staff progress with no extra admin work - all from one dashboard.
            </p>
          </div>
          
            
            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center mt-3 md:mt-5 gap-4 sm:gap-0">
              <div className="w-full sm:w-auto sm:flex-grow sm:max-w-sm">
                <Button 
                  primary 
                  size="large" 
                  text="Secure Early Access"
                />
              </div>
            </div>
          
        </div>
        
        {/* Right panel - only visible on larger screens */}
        <div className="hidden lg:flex h-full items-center justify-center">
          <div className="relative p-4 w-full">
            <img 
              src="/app-screenshots/fp-computer.svg" 
              alt="Computer Illustration" 
              className="w-full h-auto max-w-lg mx-auto transform scale-[1.2] hover:scale-[1.3] transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default HeroSection;