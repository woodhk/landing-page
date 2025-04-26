"use client";

import React from "react";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits"
import Course from "./components/Course";
import Comparison from "./components/Comparison";
import Cta from "../../../../../components/home/Cta";

export default function CustomCourses() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero section with contained width */}
      <Hero />
      <Benefits />
      <Comparison />
      <Course />
    
      <Cta />
    </div>
  );
}