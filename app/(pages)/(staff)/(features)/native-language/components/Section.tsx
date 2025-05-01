import React from 'react';
import Image from 'next/image';
import { languageFeatures } from '../data/section';

const LanguageFeatures: React.FC = () => {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 md:mb-24">
          <h1 className="max-w-3xl mx-auto text-3xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Spend More Time Learning, <br /> Less Time Understanding Instructions
          </h1>
          <p className="text-2xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Boost user engagement and learning performance with built-in native language support.
          </p>
        </div>
        
        <div className="space-y-24 md:space-y-32 lg:space-y-48">
          {languageFeatures.map((feature, index) => (
            <div 
              key={feature.id} 
              className="flex flex-col md:flex-row items-center gap-16 lg:gap-24"
            >
              <div className={`md:w-2/5 flex flex-col justify-center my-auto ${index % 2 !== 0 ? 'md:order-last' : ''}`}>
                <h2 className="text-2xl md:text-4xl font-bold mb-6 text-gray-900 tracking-tight">
                  {feature.title}
                </h2>
                <div className="space-y-6">
                  {feature.description.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-gray-700 text-base md:text-lg leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
              
              <div className={`md:w-3/5 ${index % 2 !== 0 ? 'md:order-first' : ''}`}>
                <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-lg">
                  <Image
                    src={feature.imagePath}
                    alt={feature.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 60vw"
                    priority={index === 0}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguageFeatures;