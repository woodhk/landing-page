"use client";

import React from 'react';
import HeroSection from './components/HeroSection';
// No need to import Navbar as it's in the shared layout

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <HeroSection />
        
        {/* Additional home page sections can go here */}
      </div>
    </div>
  );
}