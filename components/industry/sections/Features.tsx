import React from 'react';
import { FeaturesSection } from '../types';

interface FeaturesProps {
  data: FeaturesSection;
}

export const Features: React.FC<FeaturesProps> = ({ data }) => {
  const { sectionTitle, mainDescription, features } = data;

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="bg-dynamic-blue/80 rounded-3xl rounded-bl-none shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-6">
            {/* Left side - Main heading and description */}
            <div className="text-white p-8 md:p-12">
              <h2 className="text-4xl md:text-5xl font-semibold mb-8">
                {sectionTitle}
              </h2>
              <p className="text-2xl mb-4">
                {mainDescription}
              </p>
            </div>

            {/* Right side - Features list */}
            <div className="bg-light-3 p-8 md:p-12 space-y-12 rounded-tr-3xl rounded-br-3xl">
              {features.map((feature, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-2xl md:text-3xl font-semibold">
                    {feature.title}
                  </h3>
                  <p>
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;