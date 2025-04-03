import React from 'react';
import Image from 'next/image';
import { languageFeatures } from '../data/section';

const LanguageFeatures: React.FC = () => {
  return (
    <div className="w-full">
        {languageFeatures.map((feature, index) => (
        <div 
          key={feature.id}
          className={`flex flex-col md:flex-row justify-between items-start py-12 px-8 md:px-24 lg:px-32 ${
            index < languageFeatures.length - 1 ? 'border-b border-gray-200' : ''
          }`}
        >
          <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-6 md:mb-0">
            <h2 className="text-5xl font-bold mb-6">{feature.title}</h2>
            <div className="space-y-6">
              {feature.description.map((paragraph, pIndex) => (
                <p key={pIndex} className="text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="w-full relative rounded-lg border border-gray-200 shadow-xl overflow-hidden">
              <Image
                src={feature.imagePath}
                alt={feature.title}
                width={500}
                height={375}
                style={{ 
                  objectFit: 'cover', 
                  width: '100%', 
                  height: 'auto'
                }}
                priority
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LanguageFeatures;