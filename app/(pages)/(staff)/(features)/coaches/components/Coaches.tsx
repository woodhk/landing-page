import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCheck } from 'lucide-react';
import { getCoachFeatures, isPerformanceCoachFeature } from '../data/coaches';

export default function Coaches() {
  const coachFeatures = getCoachFeatures();

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 md:mb-24 lg:mb-32">
          <h2 className="text-4xl md:text-7xl font-bold mb-4 text-gray-900 tracking-tight">
            Four Brains are Better Than One
          </h2>
          <p className="text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Fluentpro consists of Four AI Coaches that work together to simulate real
            world scenarios and improve staff's Business English and Soft Skills
          </p>
        </div>

        <div className="space-y-24 md:space-y-32 lg:space-y-48">
          {coachFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col md:flex-row items-center gap-16 lg:gap-24"
            >
              <div className={`md:w-2/5 flex flex-col justify-center my-auto ${index % 2 !== 0 ? 'md:order-last' : ''}`}>
                <div className="inline px-3 py-1 text-sm font-semibold rounded-full bg-blue-50 text-blue-700 mb-5 w-fit">
                  {feature.pillText}
                </div>
                <h3 className="text-2xl md:text-4xl font-bold mb-6 text-gray-900 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-700 text-base md:text-lg mb-8 leading-relaxed">
                  {feature.description}
                </p>
                
                {isPerformanceCoachFeature(feature) && (
                  <p className="text-gray-700">
                    You can view our marking rubric{' '}
                    <Link 
                      href="#rubric" 
                      className="text-blue-600 hover:text-blue-800 font-medium underline transition-colors"
                    >
                      {feature.rubricLink}
                    </Link>
                  </p>
                )}
              </div>
              
              <div className={`md:w-3/5 ${index % 2 !== 0 ? 'md:order-first' : ''}`}>
                <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-lg">
                  <Image
                    src={feature.imageUrl}
                    alt={feature.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 60vw"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
