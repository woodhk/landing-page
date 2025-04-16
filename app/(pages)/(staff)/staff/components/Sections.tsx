import React from 'react';
import { sections } from '../data/sections';
import Image from 'next/image';
import Link from 'next/link';

const Sections = () => {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 space-y-24">
        {sections.map((section, index) => (
          <div 
            key={index} 
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
          >
            <div className="w-full md:w-1/2 space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">{section.title}</h2>
                <div className="w-16 h-1 bg-gray-300"></div>
              </div>
              <p className="text-lg leading-relaxed text-gray-700">{section.description}</p>
              <div className="pt-4">
                <Link 
                  href={section.href}
                  className="inline-flex items-center px-5 py-3 border border-gray-300 bg-white rounded-lg text-base font-medium text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
                >
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="relative aspect-[1/1] w-full overflow-hidden rounded-xl shadow-lg">
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="object-cover transition-transform scale-95 duration-700"
                  priority
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sections;