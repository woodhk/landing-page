"use client";

import React, { ReactNode } from "react";
import Hero from "./components/Hero";
import Scenario from "./components/Scenario";
import ComparisonTable from "./components/Comparison"
import CustomCourses from "../../../../components/home/CustomCourses";
import FAQ from "../../../../components/home/FAQ";
import CtaSection from "../../../../components/home/Cta";

// Section wrapper component for consistent spacing
const Section = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <section className={`my-64 ${className}`}>
    {children}
  </section>
);

export default function StaffPage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Section><Scenario /></Section>
      <Section><ComparisonTable /></Section>
      <Section><CustomCourses /></Section>
      <Section><FAQ /></Section>
      <Section><CtaSection /></Section>
    </div>
  );
}