"use client";

import React from 'react';
import HeroSection from './components/HeroSection';
import Video from './components/Video';
import Benefits from './components/Benefits';
import CustomCourses from './components/CustomCourses';
import CrossIndustry from './components/CrossIndustry';
import Audience from './components/Audience';
import AiEthics from '../../../components/home/AiEthics';
import FAQ from '../../../components/home/FAQ';
import Cta from '../../../components/home/Cta';
  
export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero section with contained width */}
      <HeroSection />
      <Video />
      <Benefits />
      <Audience />
      <CustomCourses />
      <CrossIndustry />
 
      <AiEthics />
      <FAQ />
      <Cta />
    </div>
  );
}