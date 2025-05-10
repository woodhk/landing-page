import React from 'react';
import Image from 'next/image';
import * as Icons from 'lucide-react';
import { FeaturesSection } from '../types';

interface FeaturesProps {
  data: FeaturesSection;
}

export const Features: React.FC<FeaturesProps> = ({ data }) => {
  const { sectionTitle, mainDescription, features, imageUrl } = data;

  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading and subheading at top center */}
        <h2 className="text-center text-4xl lg:text-7xl max-w-5xl mx-auto font-bold text-gray-900 mb-4">
          {sectionTitle}
        </h2>
        <p className="text-center text-3xl max-w-3xl mx-auto text-gray-600 mb-16">
          {mainDescription}
        </p>
        
        {/* Image Section */}
        <div className="flex justify-center mb-16">
          <Image 
            src={imageUrl}
            alt="Feature illustration"
            width={1000}
            height={750}
            className="border border-gray-200 rounded-2xl shadow-sm w-full max-w-4xl h-auto"
            priority
          />
        </div>

        {/* Three Column Features Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const IconComponent = (Icons as any)[feature.iconName] || Icons.HelpCircle;
            
            return (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 border border-gray-200 transition-all duration-300 hover:border-dynamic-blue/40 hover:shadow-sm flex flex-col items-start text-left"
              >
                <div className="mb-4">
                  <IconComponent className="w-10 h-10 text-dynamic-blue" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;