"use client";

import React, { ReactNode } from 'react';
import HeroSection from './components/HeroSection';
import Testimonials from './components/Testimonials';
import AiCta from './components/AiCta';
import KeyValueProp from './components/KeyValueProp';
import Benefits from './components/Benefits';
import Reasons from './components/Reasons';
import CustomCourses from '../../../components/home/CustomCourses';
import CrossIndustry from './components/CrossIndustry';
import Audience from './components/Audience';
import AiEthics from '../../../components/home/AiEthics';
import FAQ from '../../../components/home/FAQ';
import Cta from '../../../components/home/Cta';

// Section wrapper component for consistent spacing
const Section = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <section className={`my-64 ${className}`}>
    {children}
  </section>
);
  
export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero section with contained width */}
      <HeroSection />
      <Testimonials />
      <Section><AiCta /></Section>
      <Section><KeyValueProp /></Section>
      <Section><Benefits /></Section>
      <Section><AiEthics /></Section>
      <Section><CustomCourses /></Section>
      <Section><Reasons /></Section>
      <Section><Audience /></Section>
      <Section><FAQ /></Section>
      <Section><Cta /></Section>
    </div>
  );
}