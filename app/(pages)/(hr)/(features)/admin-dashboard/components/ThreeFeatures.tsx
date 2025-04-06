import React from 'react';
import Image from 'next/image';
import threeFeatures from '../data/threeFeatures';

const ThreeFeatures: React.FC = () => {
  return (
    <section className="w-full">
      <div className="container mx-auto px-4">
        {threeFeatures.map((feature, index) => (
          <div 
            key={index}
            className={`flex flex-col md:flex-row items-center py-16 border-b ${index === threeFeatures.length - 1 ? 'border-transparent' : 'border-gray-200'}`}
          >
            <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0 order-2 md:order-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {feature.title}
              </h2>
              <div className="space-y-4">
                <p className="text-gray-800">
                  {feature.description1}
                </p>
                <p className="text-gray-800">
                  {feature.description2}
                </p>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <div className="relative w-full h-[240px] md:h-[280px] bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ThreeFeatures;
