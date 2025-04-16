"use client";

import React from 'react';
import HeroSection from './components/HeroSection';
import Testimonials from './components/Testimonials';
import Video from './components/AiCta';
import KeyValueProp from './components/KeyValueProp';
import Benefits from './components/Benefits';
import Reasons from './components/Reasons';
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
      <Testimonials />
      <Video />
      <KeyValueProp />
      <Benefits />
      <AiEthics />
      <CustomCourses />
      <Reasons />
      <Audience />
      <FAQ />
      <Cta />
    </div>
  );
}