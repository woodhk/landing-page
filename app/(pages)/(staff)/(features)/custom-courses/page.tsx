"use client";

import React from "react";
import Hero from "./components/Hero";
import Course from "./components/Course";
import Cta from "../../../../../components/home/Cta";

export default function CustomCourses() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero section with contained width */}
      <Hero />
      <Course />
      <Cta />
    </div>
  );
}