import React from 'react';
import Button from '../../../../components/shared/Button';
import Image from 'next/image';

const Testimonials = () => {
  const testimonialLogos = [
    { src: "/testimonials/hutchison.png", alt: "Hutchison" },
    { src: "/testimonials/icbc.png", alt: "ICBC" },
    { src: "/testimonials/bdo.png", alt: "BDO" },
    { src: "/testimonials/sino.png", alt: "Sino" }
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Background accent element */}
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-blue-50 rounded-full opacity-50 blur-3xl"></div>
          
          {/* Main content container with improved card-like appearance */}
          <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              
              {/* Left content area - Now spans 7 columns on large screens */}
              <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <div className="inline-block px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-6">
                    Expert Training Solutions
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                    Made by The Language Key
                  </h1>
                  
                  <p className="text-xl text-gray-600 mb-8 max-w-xl">
                    Hong Kong's Leading Business English Training Consultancy for 30+ Years
                  </p>
                </div>
                
                {/* CTA section */}
                <div className="mb-8">
                  <Button
                    primary
                    size="large"
                    text="Learn more about Language Key"
                  />
                </div>
                
                {/* Testimonial logos section with improved layout */}
                <div className="border-t pt-8">
                  <p className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-6">Trusted by teams at</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {testimonialLogos.map((logo, index) => (
                      <div key={index} className="flex items-center justify-center">
                        <Image 
                          src={logo.src}
                          alt={logo.alt}
                          width={100}
                          height={45}
                          className="h-auto w-auto max-h-12 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Right image area - Now spans 5 columns on large screens */}
              <div className="lg:col-span-5 relative h-80 md:h-96 lg:h-auto">
                <Image 
                  src="/images/training.png"
                  alt="Training illustration"
                  fill
                  className="object-cover"
                />
                
                {/* Testimonial quote overlay */}
                <div className="absolute bottom-6 left-0 bg-white/90 backdrop-blur-sm p-4 md:p-6 shadow-lg rounded-r-lg max-w-xs">
                  <div className="flex items-start gap-2">
                    <span className="text-4xl text-blue-500">"</span>
                    <p className="text-sm md:text-base font-medium text-gray-700">
                      The Language Key transformed our team's communication skills.
                    </p>
                  </div>
                  <div className="mt-3 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                      {/* This would be a user avatar */}
                      <div className="w-full h-full bg-blue-100"></div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Jane Cooper</p>
                      <p className="text-xs text-gray-500">HR Director, HSBC</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;