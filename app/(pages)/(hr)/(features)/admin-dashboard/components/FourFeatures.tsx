import React from 'react';
import Image from 'next/image';
import fourFeatures from '../data/fourFeatures';

const FourFeatures: React.FC = () => {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="max-w-5xl mx-auto text-2xl sm:text-3xl md:text-6xl font-bold mb-10 text-center">Access Real-Time Training Progression</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fourFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-100 rounded-lg p-6 transition-all duration-300 hover:shadow-md flex flex-col items-center text-center"
            >
              <div className="relative w-full h-40 mb-4">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              
              <p className="text-gray-700 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FourFeatures;
