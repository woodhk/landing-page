import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../../../../../../components/shared/Button';

export default function Hero() {
  return (
    <>
    <div className="relative">
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
          <div>
          <span className="inline-block px-3 py-1 text-sm font-medium text-dynamic-blue bg-blue-100 rounded-full mb-4">AI Coaches</span>
            <h1 className="text-4xl sm:text-4xl md:text-6xl font-bold text-dark mb-3">
              4 Layers of Assistance Behind Every Response
            </h1>
          </div>
          
          <div>
            <p className="text-xl font-medium text-gray-900">
              Four specialised AI coaches work together to guide, correct, and assess every interaction
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center mt-3 md:mt-5 gap-4">
            <div className="w-full sm:w-auto sm:flex-grow sm:max-w-sm">
              <Button 
                primary={true}
                size="large" 
                text="Secure Early Access"
                url="#early-access"
              />
            </div>
            
          </div>
        </div>
        
        <div className="hidden lg:flex h-full items-center justify-center">
          <div className="relative p-4 w-full">
            <Image
              src="/ui-elements/aiTeacher1.png"
              alt="Scenarios Homepage Screenshot"
              width={1600}
              height={1600}
              className="w-full h-auto max-w-lg mx-auto transform scale-[1.2] hover:scale-[1.3] transition-transform duration-300 rounded-xl shadow-xl"
              priority
            />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}