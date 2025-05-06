import React from 'react';
import Link from 'next/link';
import TypewriterText from '../../../../lib/animations/TypewriterText';
import Button from '../../../../components/shared/Button';

const Hero: React.FC = () => {
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

      <div className="relative flex flex-col items-center justify-center py-12 md:py-16 px-4 sm:px-6 max-w-5xl mx-auto text-center">
        {/* Pill */}
        <span className="inline-block px-3 py-1 text-sm font-medium text-dynamic-blue bg-blue-100 rounded-full mb-4">Industry Solutions</span>
        
        {/* Heading */}
        <h1 className="text-4xl sm:text-4xl md:text-6xl font-bold text-dark mb-6">
          Business English Training for <br /> <TypewriterText />
        </h1>
        
        {/* Subheading */}
        <p className="text-xl font-medium text-gray-900 max-w-2xl mx-auto mb-8">
          Insert subheading here
        </p>
        
        {/* CTA Button */}
        <div className="mb-24">
          <Button 
            primary={true}
            size="large" 
            text="Secure Early Access"
            url="#early-access"
          />
        </div>
        
        {/* Image - now visible on all screen sizes */}
        <div className="w-full max-w-2xl mx-auto">
          <img 
            src="/app-screenshots/onboardingIndustry.png" 
            alt="Language Drills Screenshot" 
            className="w-full h-auto mx-auto transform scale-[1.2] transition-transform duration-300 rounded-xl shadow-xl"
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default Hero;