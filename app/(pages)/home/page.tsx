"use client";

import React from 'react';
import HeroSection from './components/HeroSection';
import CustomCourses from './components/CustomCourses';
import AiEthics from './components/AiEthics';
import FAQ from './components/FAQ';
import Cta from './components/Cta';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero section with contained width */}
      <HeroSection />
      <CustomCourses />
      <AiEthics />
      <FAQ />
      <Cta />
    </div>
  );
}