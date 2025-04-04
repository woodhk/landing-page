import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getCoachFeatures, isPerformanceCoachFeature } from '../data/coaches';

export default function Coaches() {
  const coachFeatures = getCoachFeatures();

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Four Brains are Better Than One
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Fluentpro consists of Four AI Coaches that work together to simulate real
            world scenarios and improve staff's Business English and Soft Skills
          </p>
        </div>

        <div className="flex flex-col">
          {coachFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="border-t border-gray-200 py-12"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1 md:pr-6">
                  <div className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-gray-100 text-gray-800 mb-4">
                    {feature.pillText}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {feature.description}
                  </p>
                  
                  {isPerformanceCoachFeature(feature) && (
                    <p className="text-gray-600">
                      You can view our marking rubric{' '}
                      <Link 
                        href="#rubric" 
                        className="text-dynamic-blue hover:underline"
                      >
                        {feature.rubricLink}
                      </Link>
                    </p>
                  )}
                </div>
                
                <div className="flex-1">
                  <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden">
                    <Image
                      src={feature.imageUrl}
                      alt={feature.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
