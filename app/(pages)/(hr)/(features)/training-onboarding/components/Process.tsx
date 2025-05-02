"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { processSteps } from "../data/process";
import { motion, AnimatePresence } from "framer-motion";

const Process = () => {
  const [activeStep, setActiveStep] = useState(1);
  
  // Auto-cycle through steps (disabled when user interacts)
  const [autoCycle, setAutoCycle] = useState(true);
  
  useEffect(() => {
    if (!autoCycle) return;
    
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev >= processSteps.length ? 1 : prev + 1));
    }, 6000);
    
    return () => clearInterval(interval);
  }, [autoCycle]);

  const handleStepClick = (stepId: number) => {
    setActiveStep(stepId);
    setAutoCycle(false); // Disable auto-cycling when user interacts
  };

  return (
    <div className="relative">
      {/* Split background: 1/3 white, 2/3 blue-50 */}
      <div className="absolute inset-0 w-full h-full">
        <div className="w-full h-1/3 bg-white" />
        <div className="w-full h-2/3 bg-blue-50" />
      </div>

      <div className="container mx-auto py-20 px-4 relative">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-blue-100/50 blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-indigo-100/50 blur-3xl -z-10" />
        
        {/* Rounded container for heading, desktop navigation and content */}
        <div className="rounded-2xl border border-gray-200 bg-white px-6 md:px-8 py-8 md:py-10 mb-6 shadow-lg">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="max-w-3xl mx-auto text-4xl md:text-7xl font-bold pb-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            From Sign up to Monitoring Training Within Minutes
            </h2>
          </motion.div>

          {/* Tablet/Desktop Navigation */}
          <div className="hidden md:flex flex-wrap justify-center gap-3 mb-10">
            {processSteps.map((step) => (
              <motion.button
                key={step.id}
                onClick={() => handleStepClick(step.id)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: step.id * 0.1 }}
                className={`
                  flex-1 max-w-[240px] py-4 px-5 rounded-xl transition-all duration-300
                  ${activeStep === step.id 
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-200" 
                    : "bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:shadow-md"}
                `}
                whileHover={{ y: -5 }}
                whileTap={{ y: 0 }}
              >
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <span className={`flex items-center justify-center w-6 h-6 rounded-full text-sm font-bold 
                      ${activeStep === step.id ? "bg-white text-blue-600" : "bg-blue-100 text-blue-600"}`}>
                      {step.id}
                    </span>
                    <span className="font-bold">{step.title}</span>
                  </div>
                  <p className={`text-sm mt-1 ${activeStep === step.id ? "text-blue-100" : "text-gray-500"}`}>
                    {step.shortDescription}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Content for selected step with animation */}
          <div className="relative h-[450px] md:h-[400px]">
            <AnimatePresence mode="wait">
              {processSteps.map((step) => (
                activeStep === step.id && (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 w-full"
                  >
                    <div 
                      className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg bg-white h-full"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                        <div className="p-8 flex flex-col justify-center">
                          <div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">{step.title}</h3>
                            <p className="text-gray-700">{step.description}</p>
                          </div>
                          {step.id === 4 && (
                            <motion.a 
                              href="/admin-dashboard" 
                              className="inline-flex items-center mt-4 text-blue-600 font-medium group"
                              whileHover={{ x: 5 }}
                              transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                              Learn More
                              <span className="ml-1 transition-transform duration-200 ease-in-out transform group-hover:translate-x-1">→</span>
                            </motion.a>
                          )}
                        </div>
                        <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden">
                          <div className="absolute inset-0 opacity-20 bg-grid-pattern" />
                          <motion.div 
                            className="relative h-full w-full"
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5 }}
                          >
                            <Image
                              src={step.image}
                              alt={`${step.title} illustration`}
                              fill
                              style={{ objectFit: "contain" }}
                              className="p-6"
                            />
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Process Steps Navigation - Mobile version */}
        <div className="flex overflow-x-auto gap-2 mb-8 pb-2 md:hidden">
          {processSteps.map((step) => (
            <button
              key={step.id}
              onClick={() => handleStepClick(step.id)}
              className={`
                flex-shrink-0 py-3 px-4 rounded-lg shadow-sm transition-all duration-300
                ${activeStep === step.id 
                  ? "bg-blue-600 text-white shadow-md transform -translate-y-1" 
                  : "bg-white hover:bg-gray-50 border border-gray-200"}
              `}
            >
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <span className="font-bold">{step.id}</span>
                  <span className="font-bold">{step.title}</span>
                </div>
                <p className="text-sm mt-1 max-w-[180px] line-clamp-1">
                  {step.shortDescription}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Step dots for mobile */}
        <div className="flex justify-center gap-2 mt-6 md:hidden">
          {processSteps.map((step) => (
            <button
              key={step.id}
              onClick={() => handleStepClick(step.id)}
              className={`w-2 h-2 rounded-full ${
                activeStep === step.id ? "bg-blue-600" : "bg-gray-300"
              }`}
              aria-label={`Go to step ${step.id}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;
