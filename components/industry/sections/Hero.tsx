import Link from 'next/link';
import React from 'react';
import { HeroSection } from '../types';

interface HeroProps {
  data: HeroSection;
}

export const Hero: React.FC<HeroProps> = ({ data }) => {
  const { title, description, secureAccessLink, brochureLink } = data;

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            {title}
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href={secureAccessLink}
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-200 px-8 text-sm font-medium transition-colors hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            >
              Secure Early Access
            </Link>
            <Link 
              href={brochureLink}
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-300 px-8 text-sm font-medium transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            >
              Download Brochure
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 