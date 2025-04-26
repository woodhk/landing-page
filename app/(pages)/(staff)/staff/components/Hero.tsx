import React from 'react';
import Button from '../../../../../components/shared/Button';
import TypewriterText from '../../../../../lib/animations/TypewriterText';

const HeroSection: React.FC = () => {

  return (
    <>
    <div className="relative">
      {/* Blue-50 background instead of image */}
      <div className="absolute inset-0 w-full h-[calc(100%+12rem)] -top-24">
        <div 
          className="absolute inset-0 w-full h-full bg-blue-50"
          style={{ 
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 85%, rgba(0,0,0,0.1) 95%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 85%, rgba(0,0,0,0.1) 95%, rgba(0,0,0,0) 100%)'
          }}
        />
      </div>

      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 items-center py-4 md:py-8 pb-12 md:pb-32 md:pt-32 px-4 sm:px-6 lg:px-4 max-w-7xl mx-auto">
        <div className="flex flex-col space-y-4 md:space-y-6 max-w-[560px]">
          {/* Main content with improved vertical rhythm */}
          <div>
            <h1 className="text-4xl sm:text-4xl md:text-6xl font-bold text-dark mb-3">
              Turning Staff Into <span className="text-dynamic-blue">Fluent Professionals</span>
            </h1>
          </div>
          
          {/* Features with improved design - Custom check items */}
          <div>
            <p className="text-xl font-medium text-gray-900">
            Provide staff with stress-free, real-world English practice through AI-powered role-plays that simulate workplace conversations.
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
              src="/ui-elements/staff-hero.png" 
              alt="Computer Illustration" 
              className="w-full h-auto max-w-lg mx-auto transform scale-[1.2] hover:scale-[1.3] transition-transform duration-300 rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default HeroSection;