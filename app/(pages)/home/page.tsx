"use client";

import React from 'react';
import HeroSection from './components/HeroSection';
import Video from './components/Video';
import Experts from './components/Expert';
import Testimonial from './components/Testimonials';
import Industry from './components/Industry'; // Import the Industry component
import Benefits from './components/Benefits'; // Import the Industry component

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero section with contained width */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <HeroSection />
      </div>
      
      {/* Video section outside the container for full-width background */}
      <Video />
      
      {/* Expert section - intentionally without container to allow full-width background */}
      <Experts />
      
      {/* Testimonials section - intentionally without container to allow full-width background */}
      <Testimonial />

      {/* Industry section - full-width background */}
      <Industry />
      <Benefits />
      
    </div>
    
    
  );
}