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
        <h2 className="text-center text-4xl lg:text-5xl max-w-3xl mx-auto font-bold text-gray-900 mb-4">
          {sectionTitle}
        </h2>
        <p className="text-center text-xl max-w-3xl mx-auto text-gray-600 mb-16">
          {mainDescription}
        </p>
        
        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mt-8 items-start">
          
          {/* Left Column: Image */}
          <div className="w-full lg:w-3/5 flex justify-center lg:justify-start">
            <Image 
              src={imageUrl}
              alt="Feature illustration"
              width={1000}
              height={750}
              className="w-full h-auto border border-gray-200 rounded-2xl shadow-sm"
              priority
            />
          </div>

          {/* Right Column: Features cards */}
          <div className="w-full lg:w-2/5 flex flex-col gap-6">
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
      </div>
    </section>
  );
};

export default Features;