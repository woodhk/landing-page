import React from 'react';
import Image from 'next/image';

const AboutCompanyPersonalisation = () => {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          {/* Left content section */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">Managing Accounts </h2>
            
            <p className="text-lg text-gray-700">
            Manually chasing unresponsive staff is time-consuming and hard to track. 
            </p>
            
            <p className="text-lg text-gray-700">
            FluentPro’s dashboard shows exactly who’s pending, and lets you trigger a reminder email to all non-responders in one click.
            </p>
          </div>
          
          {/* Right image section - Option 1: Standard img tag */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <div className="relative aspect-square w-full max-w-md mx-auto md:max-w-none rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/abstract-bg/imageBackground7.svg"
                alt="Company Personalisation"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompanyPersonalisation;