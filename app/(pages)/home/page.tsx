"use client";

import React from 'react';
import HeroSection from './components/HeroSection';
import Video from './components/Video';
import Experts from './components/Expert';
// No need to import Navbar as it's in the shared layout

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <HeroSection />
      </div>
      
      {/* Video section outside the width-constrained container */}
      <Video />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Additional home page sections can go here */}
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-0">
        <Experts />
      </div>
    </div>
  );
}