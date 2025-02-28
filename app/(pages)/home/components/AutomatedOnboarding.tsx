'use client';

// app/(pages)/home/components/AutomatedOnboarding.tsx
import { useState } from 'react';
import { onboardingSteps } from '../data/AutomatedOnboarding';

export default function AutomatedOnboarding() {
  const [activeStep, setActiveStep] = useState(1);

  const handleStepClick = (stepId: number) => {
    setActiveStep(stepId);
  };

  const activeContent = onboardingSteps.find(step => step.id === activeStep)?.content;

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold mb-2">Designed for Learners.</h2>
        <h2 className="text-5xl font-bold mb-8">Loved by HR and L&D</h2>
      </div>

      {/* Main Content with Curved Border */}
      <div className="border border-light-2 rounded-[2rem] overflow-hidden shadow-md bg-white mb-8">
        <div className="p-8 text-center">
          <p className="text-medium-3 text-lg">From Sign up to Monitoring Training Within Minutes</p>
          <h3 className="text-3xl font-bold mt-4 mb-8">Automated Staff Onboarding</h3>
          
          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {onboardingSteps.map((step) => (
              <div 
                key={step.id}
                onClick={() => handleStepClick(step.id)}
                className={`p-4 rounded-lg cursor-pointer transition-all duration-200 ${
                  activeStep === step.id 
                    ? 'bg-light-3 text-dark shadow-md' 
                    : 'bg-gray-100 text-dark-2 hover:bg-light-2'
                }`}
              >
                <h4 className="font-bold text-lg">{step.id}) {step.title}</h4>
                <p className="text-sm mt-1">{step.subtitle}</p>
              </div>
            ))}
          </div>

          {/* Content Card */}
          {activeContent && (
            <div className="border border-light-2 rounded-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Text Content */}
                <div className="p-8 bg-light-3">
                  <h3 className="text-2xl font-bold mb-6 text-dark">{activeContent.heading}</h3>
                  <p className="text-dark-2 leading-relaxed">{activeContent.description}</p>
                </div>

                {/* Image Placeholder */}
                <div className="bg-gray-50 flex items-center justify-center p-8">
                  <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-md">
                    <p className="text-medium text-center px-6">{activeContent.imagePlaceholder}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}