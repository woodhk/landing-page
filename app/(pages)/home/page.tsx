"use client";

import React from 'react';
import HeroSection from './components/HeroSection';
import Video from './components/Video';
import Experts from './components/Expert';
import Testimonial from './components/Testimonials';
import Industry from './components/Industry'; 
import Benefits from './components/Benefits'; 
import KeyValuePropositions from './components/KeyValuePropositions'; 
import AutomatedOnboarding from './components/AutomatedOnboarding'; 
import HrFeatures from './components/HrFeatures'; 
import EthicsCard from './components/AiEthics'; 
import AiEthics from './components/AiEthics';
import LandingTestimonial from './components/Testimonial2';
import MissionVision from './components/MissionVision';
import FAQ from './components/FAQ';
import Cta from './components/Cta';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero section with contained width */}
      
        <HeroSection />
      
      {/* Video section outside the container for full-width background */}
      <Video />
      
      {/* Expert section - intentionally without container to allow full-width background */}
      <Experts />
      
      {/* Testimonials section - intentionally without container to allow full-width background */}
      <Testimonial />

      {/* Industry section - full-width background */}
      <Industry />
      <Benefits />
      <KeyValuePropositions />
      <AutomatedOnboarding />
      <HrFeatures />
      <AiEthics />
      <LandingTestimonial />
      <MissionVision />
      <FAQ />
      <Cta />
    </div>
    
    
  );
}