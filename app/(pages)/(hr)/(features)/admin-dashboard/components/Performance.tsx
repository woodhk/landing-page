"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import performanceData from '../data/performance';

const Performance: React.FC = () => {
  const [activeIndividual, setActiveIndividual] = useState(0);
  const [activeCohort, setActiveCohort] = useState(0);

  // Function to determine the width class based on the index
  const getUnderlineWidthClass = (index: number, totalItems: number) => {
    const widthPercent = ((index + 1) / totalItems) * 100;
    return `w-[${widthPercent}%]`;
  };

  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-8 md:px-16 lg:px-20">
        <div className="text-center mb-28">
          <h2 className="text-7xl font-bold mb-4">Track Individual and Team Growth</h2>
          <p className="text-gray-600 max-w-4xl text-3xl mx-auto ">
          Discover the analytics that reveal how each individual is performing and how teams are performing as a whole.
          </p>
        </div>
        
        {/* Individual Performance Section */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Left side image - now moved to right */}
            <div className="w-full md:w-3/5 mb-8 md:mb-0 md:order-2">
              <div className="relative h-96 md:h-[32rem] rounded-lg overflow-hidden shadow-md group">
                {performanceData[0].features.map((feature, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ease-in-out 
                      ${index === activeIndividual ? 'opacity-100' : 'opacity-0'}`}
                  >
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right side features - now moved to left */}
            <div className="w-full md:w-2/5 md:pr-4 md:order-1 flex flex-col justify-center">
              <h3 className="text-3xl text-dynamic-blue font-bold mb-6">{performanceData[0].title}</h3>
              <div className="space-y-8">
                {performanceData[0].features.map((feature, index) => (
                  <div 
                    key={index} 
                    className={`pb-2 relative cursor-pointer transition-all duration-300 ease-in-out 
                      ${index === activeIndividual ? 'transform -translate-x-1' : 'hover:-translate-x-1 hover:text-gray-700'}`}
                    onClick={() => setActiveIndividual(index)}
                    role="button"
                    tabIndex={0}
                  >
                    <h4 className={`text-xl font-bold mb-2 transition-colors duration-300 ${index === activeIndividual ? '' : 'text-gray-500'}`}>
                      {feature.title}
                    </h4>
                    <p className={`mb-2 transition-colors duration-300 ${index === activeIndividual ? 'text-gray-600' : 'text-gray-500'}`}>
                      {feature.description}
                    </p>
                    {index === activeIndividual && (
                      <div className="absolute bottom-0 left-0 w-full h-0.5">
                        {/* Gray background line */}
                        <div className="absolute inset-0 bg-gray-200"></div>
                        {/* Blue progress line */}
                        <div 
                          className={`absolute left-0 top-0 h-full bg-blue-500 transition-all duration-500 ease-out
                            ${index === 0 ? 'w-1/3' : index === 1 ? 'w-2/3' : 'w-full'}`}
                        ></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Cohort Performance Section */}
        <div>
          <div className="flex flex-col md:flex-row gap-12">
            {/* Right side image - now moved to left */}
            <div className="w-full md:w-3/5 mb-8 md:mb-0">
              <div className="relative h-96 md:h-[32rem] rounded-lg overflow-hidden shadow-md group">
                {performanceData[1].features.map((feature, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ease-in-out 
                      ${index === activeCohort ? 'opacity-100' : 'opacity-0'}`}
                  >
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Left side features - now moved to right */}
            <div className="w-full md:w-2/5 md:pl-4 flex flex-col justify-center">
              <h3 className="text-3xl text-blue-700 font-bold mb-6">{performanceData[1].title}</h3>
              <div className="space-y-8">
                {performanceData[1].features.map((feature, index) => (
                  <div 
                    key={index} 
                    className={`pb-2 relative cursor-pointer transition-all duration-300 ease-in-out 
                      ${index === activeCohort ? 'transform translate-x-1' : 'hover:translate-x-1 hover:text-gray-700'}`}
                    onClick={() => setActiveCohort(index)}
                    role="button"
                    tabIndex={0}
                  >
                    <h4 className={`text-xl font-bold mb-2 transition-colors duration-300 ${index === activeCohort ? '' : 'text-gray-500'}`}>
                      {feature.title}
                    </h4>
                    <p className={`mb-2 transition-colors duration-300 ${index === activeCohort ? 'text-gray-600' : 'text-gray-500'}`}>
                      {feature.description}
                    </p>
                    {index === activeCohort && (
                      <div className="absolute bottom-0 left-0 w-full h-0.5">
                        {/* Gray background line */}
                        <div className="absolute inset-0 bg-gray-200"></div>
                        {/* Blue progress line */}
                        <div 
                          className={`absolute left-0 top-0 h-full bg-blue-500 transition-all duration-500 ease-out
                            ${index === 0 ? 'w-1/3' : index === 1 ? 'w-2/3' : 'w-full'}`}
                        ></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Performance;
