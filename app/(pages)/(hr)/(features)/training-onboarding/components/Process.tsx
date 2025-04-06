"use client";

import React, { useState } from "react";
import Image from "next/image";
import { processSteps } from "../data/process";

const Process = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Automated Staff Onboarding</h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          From Sign up to Monitoring Training Within Minutes
        </p>
      </div>

      {/* Process Steps Navigation */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {processSteps.map((step) => (
          <button
            key={step.id}
            onClick={() => setActiveStep(step.id)}
            className={`
              flex-1 max-w-[240px] py-3 px-4 rounded-lg transition
              ${activeStep === step.id ? "bg-gray-800 text-white" : "bg-gray-200 hover:bg-gray-300"}
            `}
          >
            <div className="text-left">
              <div className="flex items-center gap-2">
                <span className="font-bold">{step.id})</span>
                <span className="font-bold">{step.title}</span>
              </div>
              <p className="text-sm mt-1">{step.shortDescription}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Content for selected step */}
      {processSteps.map((step) => (
        <div 
          key={step.id}
          className={`
            rounded-xl overflow-hidden border border-gray-200 
            ${activeStep === step.id ? "block" : "hidden"}
          `}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-700">{step.description}</p>
            </div>
            <div className="relative min-h-[300px] bg-gray-100">
              <Image
                src={step.image}
                alt={`${step.title} illustration`}
                fill
                style={{ objectFit: "cover" }}
                className="p-4"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Process;
