"use client";

import React from "react";
import Hero from "./components/Hero";
import Scenario from "./components/Scenario";
import ComparisonTable from "./components/Comparison"
import CustomCourses from "../../../../components/home/CustomCourses";
import FAQ from "../../../../components/home/FAQ";
import CtaSection from "../../../../components/home/Cta";

export default function StaffPage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Scenario />
      <ComparisonTable />
      <CustomCourses />
      <FAQ />
      <CtaSection />
    </div>
  );
}