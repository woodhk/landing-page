import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { HeroSection } from '../types';

interface HeroProps {
  data: HeroSection;
}

export const Hero: React.FC<HeroProps> = ({ data }) => {
  const { title, description, secureAccessLink, brochureLink, industryName, imageUrl } = data;

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="w-full mx-auto">
            <span className="inline-block px-3 py-1 text-sm font-medium text-dynamic-blue bg-blue-50 rounded-full mb-4">{industryName}</span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 max-w-6xl">
              {title}
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-3xl">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href={secureAccessLink}
                className="inline-flex h-12 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              >
                Secure Early Access
              </Link>
              <Link 
                href={brochureLink}
                className="inline-flex h-12 items-center justify-center rounded-md border border-gray-300 px-8 text-sm font-medium transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
              >
                Download Brochure
              </Link>
            </div>
          </div>
          <div className="hidden md:block relative">
            {imageUrl && (
              <div className="w-full relative">
              <Image 
                src={imageUrl}
                alt={title}
                width={600}
                height={600}
                className="w-full h-auto shadow-xl rounded-3xl rounded-br-none"
              />
            </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;