import React from 'react';
import { sections } from '../data/sections';
import Image from 'next/image';
import Link from 'next/link';

const Sections = () => {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 space-y-16">
        {sections.map((section, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-semibold mb-4">{section.title}</h1>
              <p className="text-lg text-gray-600 mb-6">{section.description}</p>
              <Link 
                href={section.href}
                className="inline-flex items-center px-4 py-2 bg-gray-200 rounded-md text-sm font-medium hover:bg-gray-300 transition-colors"
              >
                Learn more
              </Link>
            </div>
            <div className="relative aspect-[4/3]">
              <Image
                src={section.image}
                alt={section.title}
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sections; 