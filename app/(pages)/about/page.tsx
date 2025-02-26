"use client";

import React from 'react';
import AboutHero from './components/AboutHero';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AboutHero />
        
        {/* Additional about page sections */}
        <section className="py-12">
          <h2 className="text-3xl font-bold text-[#1C2530]">Our Mission</h2>
          {/* Content here */}
        </section>
        
        <section className="py-12">
          <h2 className="text-3xl font-bold text-[#1C2530]">Our Team</h2>
          {/* Content here */}
        </section>
      </main>
    </div>
  );
}