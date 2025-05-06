import React from 'react';
import Image from "next/image";
import { ArrowRight } from 'lucide-react';
import { adminFeatures } from "../data/admin";

export default function Features() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 md:mb-24 lg:mb-32">
          <h2 className="max-w-3xl mx-auto text-4xl md:text-8xl font-bold mb-6 text-gray-900 tracking-tight">
            Access Powerful Tools to Manage Staff Training
          </h2>
          <p className="text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Effortlessly control training seats, manage staff training, and share reports with department heads and executives.
          </p>
        </div>

        <div className="space-y-24 md:space-y-32 lg:space-y-48">
          {adminFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col md:flex-row items-center gap-16 lg:gap-24"
            >
              <div className={`md:w-2/5 flex flex-col justify-center my-auto ${index % 2 !== 0 ? 'md:order-last' : ''}`}>
                <div className="inline px-3 py-1 text-sm font-semibold rounded-full bg-blue-50 text-blue-700 mb-5 w-fit">
                  {feature.tag}
                </div>
                <h3 className="text-2xl md:text-4xl font-bold mb-6 text-gray-900 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-700 text-base md:text-lg mb-8 leading-relaxed">
                  {feature.description}
                </p>
              </div>
              
              <div className={`md:w-3/5 ${index % 2 !== 0 ? 'md:order-first' : ''}`}>
                <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-lg">
                  <Image
                    src={feature.image}
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
}