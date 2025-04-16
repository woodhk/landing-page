import React from 'react';
import Button from '../../../../components/shared/Button';
import Image from 'next/image';

const Testimonials = () => {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side - Text content */}
          <div className="flex flex-col items-start justify-start">
            <h1 className="text-7xl font-bold text-start mb-4">
              Product of The Language Key
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Hong Kong's Leading Business English Training Consultancy for 30+ Years
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <Button
                primary
                size="large" 
                text="About Us"
              />
              <Button
                primary={false}
                size="large" 
                text="Request a demo"
              />
            </div>
            
            <div>
              <p className="text-gray-500 mb-2">Trusted by teams at</p>
              
              {/* Static testimonial logos */}
              <div className="flex flex-nowrap items-center justify-between gap-6 mt-4">
                <Image 
                  src="/testimonials/hutchison.png"
                  alt="Hutchison"
                  width={90}
                  height={40}
                  className="h-auto w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
                />
                <Image 
                  src="/testimonials/icbc.png"
                  alt="ICBC"
                  width={90}
                  height={40}
                  className="h-auto w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
                />
                <Image 
                  src="/testimonials/bdo.png"
                  alt="BDO"
                  width={90}
                  height={40}
                  className="h-auto w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
                />
                <Image 
                  src="/testimonials/sino.png"
                  alt="Sino"
                  width={90}
                  height={40}
                  className="h-auto w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
                />
              </div>
            </div>
          </div>
          
          {/* Right side - Image */}
          <div className="flex justify-center">
            <Image 
              src="/logo/langkey.svg"
              alt="Training illustration"
              width={500}
              height={400}
              className="object-contain rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;