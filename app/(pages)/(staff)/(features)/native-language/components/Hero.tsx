import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8 text-gray-900">
          The English Coach Who Understands Your Language
          </h1>
          <p className="text-gray-600 text-xl mb-8">
          Ask questions, translate phrases, and get personalised help in your native language.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Link
              href="#early-access"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-dynamic-blue text-white font-medium hover:bg-dynamic-blue/80 transition-colors"
            >
              Secure Early Access
            </Link>
            <Link
              href="#download"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-white border border-gray-200 text-gray-800 font-medium hover:bg-gray-50 transition-colors"
            >
              Download Brochure
            </Link>
          </div>

          <div className="w-full relative aspect-[4/2] max-w-2xl mx-auto">
            <div className="absolute -inset-8 rounded-[1.5rem] overflow-hidden">
              <Image
                src="/abstract-bg/imageBackground4.svg"
                alt="Background pattern"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Using fixed height/width with larger dimensions */}
            <div className="relative z-10 w-full h-full flex items-center justify-center p-4">
              <div className="rounded-lg overflow-hidden shadow-2xl w-full max-w-3xl">
                <Image
                  src="/app-screenshots/nativeLanguage.png"
                  alt="Scenarios Homepage Screenshot"
                  width={1600}
                  height={1600}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}