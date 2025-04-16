import React from 'react';
import Button from '../../../../components/shared/Button';

const HeroSection: React.FC = () => {

  return (
    <>
    <div className="relative bg-[#f2f0ff]">
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

      <div className="relative flex flex-col items-center py-4 md:py-8 pb-12 md:pb-24 md:pt-32 px-4 sm:px-6 lg:px-4 max-w-7xl mx-auto">
        {/* Main content centered with improved vertical rhythm */}
        <div className="flex flex-col items-center text-center max-w-7xl mx-auto mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-[64px] font-semibold text-dark leading-tight mb-6 max-w-7xl">
               Turning Staff into Fluent Professionals
          </h1>
          
          <h2 className="text-xl md:text-3xl text-gray-900 mb-10 max-w-3xl">
            Easily train and track your team's English speaking skills with <span className="font-semibold">AI-powered lessons</span> tailored to their role and industry
          </h2>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
            <Button 
              primary
              size="large" 
              text="Secure Early Access"
            />
            <Button 
              primary={false}
              size="large" 
              text="Download Brochure"
            />
          </div>
        </div>
        
        {/* Image below */}
        <div className="w-full max-w-3xl mx-auto">
          <img 
            src="/app-screenshots/fp-computer.svg" 
            alt="Computer Illustration" 
            className="w-full h-auto mx-auto transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default HeroSection;