import React from 'react';
import Button from '../../../components/ui/Button';
import CheckItem from '../../../components/ui/CheckItem';

const HeroSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div className="space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#1C2530] leading-tight">
          AI-Powered English Training Tailored to Staff's Industry & Role
        </h1>
        <p className="text-lg text-[#4A5768]">
          Give your employees the Business English Speaking skills they need to perform their job better in English.
        </p>
        
        <div className="space-y-4 pt-4">
          <CheckItem text="Business Speaking Conversation Practice" />
          <CheckItem text="Tailored Courses for Staff's Industry & Role" />
          <CheckItem text="Progress Tracking with Real-Time Reports and Analytics" />
        </div>
        
        <div className="pt-8">
          <Button primary size="large" text="Request a Demo" />
        </div>
        
        <div className="pt-4">
          <p className="text-[#4A5768] font-medium">
            Trusted by Global Industry Leaders
            <span className="inline-flex ml-4 items-center">
              {[1, 2, 3, 4].map((i) => (
                <span key={i} className="w-10 h-10 rounded-full bg-[#C9D2E5] ml-2" />
              ))}
              <span className="ml-4 text-[#4A5768]">+200 Others</span>
            </span>
          </p>
        </div>
      </div>
      
      <div className="h-full">
        <div className="border border-[#DEE4F1] rounded-lg p-6 h-full">
          <div className="text-center text-3xl font-bold py-8 text-[#1C2530]">
            HR Dashboard
          </div>
          
          <div className="relative mx-auto w-full max-w-md">
            <div className="aspect-w-16 aspect-h-10 rounded-lg overflow-hidden shadow-lg border-4 border-[#1C2530] bg-white">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-4xl font-bold text-[#234BFF]">
                  AI Role-Play
                </div>
              </div>
            </div>
            
            {/* Device frame - laptop */}
            <div className="absolute -bottom-4 inset-x-0 h-4 bg-[#333E54] rounded-b-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;