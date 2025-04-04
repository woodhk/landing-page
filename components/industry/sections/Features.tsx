import React from 'react';
import Image from 'next/image';
import { FeaturesSection } from '../types';

interface FeaturesProps {
  data: FeaturesSection;
}

export const Features: React.FC<FeaturesProps> = ({ data }) => {
  const { sectionTitle, flexibleCard, focusedCard } = data;

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          {sectionTitle}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Flexible Learning Card */}
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <div className="relative h-64 w-full">
              <Image 
                src={flexibleCard.imageUrl} 
                alt={flexibleCard.title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">{flexibleCard.title}</h3>
              <p className="text-gray-700">{flexibleCard.description}</p>
            </div>
          </div>
          
          {/* Focused Training Card */}
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <div className="relative h-64 w-full">
              <Image 
                src={focusedCard.imageUrl} 
                alt={focusedCard.title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">{focusedCard.title}</h3>
              <p className="text-gray-700">{focusedCard.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features; 