import React from 'react';
import Button from '../../../components/ui/Button';

const AboutHero: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div className="space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#1C2530] leading-tight">
          About FluentPro
        </h1>
        <p className="text-lg text-[#4A5768]">
          We're on a mission to transform how global businesses communicate.
        </p>
        
        <div className="pt-8">
          <Button primary size="large" text="Join Our Team" />
        </div>
      </div>
      
      <div className="h-full">
        {/* Image or illustration */}
        <div className="border border-[#DEE4F1] rounded-lg p-6 h-full bg-[#F4F7FB]">
          <div className="aspect-w-16 aspect-h-10 flex items-center justify-center">
            <p className="text-2xl text-center text-[#4A5768]">Company Image</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;