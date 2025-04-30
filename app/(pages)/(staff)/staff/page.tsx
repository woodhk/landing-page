"use client";

import React, { ReactNode } from "react";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Scenario from "./components/Scenario";
import ComparisonTable from "./components/Comparison"
import CustomCourses from "../../../../components/home/CustomCourses";
import FAQ from "../../../../components/home/FAQ";
import CtaSection from "../../../../components/home/Cta";


export default function StaffPage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Benefits />
      <Scenario />
      <ComparisonTable />
      <CustomCourses />
      <FAQ />
      <CtaSection />
    </div>
  );
}