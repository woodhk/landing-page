import React from 'react';
import Button from '../../../../components/shared/Button';
import { Download, ArrowRight } from 'lucide-react';

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

      <div className="relative flex flex-col items-center py-4 md:py-8 pb-12 md:pb-24 md:pt-32 px-4 sm:px-6 lg:px-4 max-w-7xl mx-auto">
        {/* Main content centered with improved vertical rhythm */}
        <div className="flex flex-col items-center text-center max-w-7xl mx-auto mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-semibold text-dark leading-tight mb-8 max-w-7xl">
               English Training Without English Trainers
          </h1>
          
          <h2 className="text-xl md:text-3xl text-gray-900 mb-10 max-w-4xl">
            Easily train and track your team's English speaking skills with 
            <br />
            <span className="font-semibold">AI-powered lessons</span> tailored to staff's role and industry
          </h2>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
            <Button 
              primary
              size="large" 
              text="Secure Early Access"
              icon={<ArrowRight size={20} />}
            />
            <Button 
              primary={false}
              size="large" 
              text="Download Brochure"
              icon={<Download size={20} />}
            />
          </div>
        </div>
        
        {/* YouTube video replacing the image - with increased height */}
        <div className="w-full max-w-4xl mx-auto">
          <div className="relative" style={{ paddingBottom: "56.25%" }}>
            <iframe 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              height="450"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default HeroSection;