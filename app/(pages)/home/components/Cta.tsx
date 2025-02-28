'use client';

import React, { useState } from 'react';
import { FormData, steps, expectationPoints, companySizeOptions, learnersOptions, countryOptions } from '../data/Cta';
import { Check, ChevronLeft, ChevronRight, User } from 'lucide-react';
import CalendlyIntegration from './CalendlyIntegration';

const Cta = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({});
  const [isComplete, setIsComplete] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    } else {
      // Handle form submission
      setIsComplete(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleDateSelection = (date: string) => {
    setFormData((prev) => ({ ...prev, selectedDate: date }));
    setIsComplete(true); // Move to completion state after date selection
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 py-16 px-4 max-w-7xl mx-auto">
      {/* Left side - What to expect */}
      <div className="flex-1 max-w-md">
        <h2 className="text-5xl font-bold mb-2">Request Your</h2>
        <h2 className="text-5xl font-bold mb-2">30-minute</h2>
        <h2 className="text-5xl font-bold mb-8">Fluentpro demo</h2>
        
        <div className="mb-10">
          <h3 className="text-xl font-medium mb-4">What to expect:</h3>
          <ul className="space-y-5">
            {expectationPoints.map((point) => (
              <li key={point.id} className="flex items-center gap-3">
                <div className="text-dynamic-blue flex-shrink-0">
                  <Check size={20} strokeWidth={3} className="text-dynamic-blue" />
                </div>
                <span className="text-lg">
                  {point.text.includes('personalised demo') ? (
                    <>Get a <strong>personalised demo</strong> of Fluentpro</>
                  ) : point.text.includes('success stories') ? (
                    <>Hear proven customer <strong>success stories</strong></>
                  ) : (
                    <>Learn about <strong>pricing</strong> for your use case</>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <p className="font-medium mb-4">Trusted by Global Industry Leaders</p>
          <div className="flex space-x-3">
            <div className="w-20 h-12 bg-light flex items-center justify-center p-2">
              <img src="/jpmorgan.png" alt="JP Morgan" className="max-w-full max-h-full object-contain" />
            </div>
            <div className="w-20 h-12 bg-light flex items-center justify-center p-2">
              <img src="/bank-of-china.png" alt="Bank of China" className="max-w-full max-h-full object-contain" />
            </div>
            <div className="w-20 h-12 bg-light flex items-center justify-center p-2">
              <img src="/hutchison.png" alt="Hutchison" className="max-w-full max-h-full object-contain" />
            </div>
            <div className="w-20 h-12 bg-light flex items-center justify-center p-2">
              <img src="/hsbc.png" alt="HSBC" className="max-w-full max-h-full object-contain" />
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Form steps */}
      <div className="flex-1">
        <div className="rounded-lg border border-light-2 p-8 bg-white shadow-sm max-w-md mx-auto">
          {!isComplete ? (
            <>
              <h2 className="text-3xl font-bold text-center mb-8">Request a Demo</h2>
              
              {/* Progress indicator */}
              <div className="flex items-center justify-center mb-10">
                {steps.map((step, index) => (
                  <React.Fragment key={step.id}>
                    <div className="flex flex-col items-center">
                      <div 
                        className={`w-8 h-8 rounded-full flex items-center justify-center
                        ${currentStep > step.id 
                          ? 'bg-functional-success text-white' 
                          : currentStep === step.id 
                            ? 'bg-black text-white' 
                            : 'bg-white border border-gray-300'}`}
                      >
                        {currentStep > step.id ? (
                          <Check size={16} />
                        ) : (
                          <span className="text-xs">{step.id}</span>
                        )}
                      </div>
                      <span className="text-xs mt-1">Step {step.id}</span>
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`w-24 h-[1px] ${currentStep > index + 1 ? 'bg-functional-success' : 'bg-gray-300'}`} />
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Step 1 */}
              {currentStep === 1 && (
                <div className="space-y-4">
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email || ''}
                      onChange={handleInputChange}
                      placeholder="Work Email *"
                      className="w-full p-3 border border-gray-300 rounded"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName || ''}
                      onChange={handleInputChange}
                      placeholder="Full Name *"
                      className="w-full p-3 border border-gray-300 rounded"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber || ''}
                      onChange={handleInputChange}
                      placeholder="Phone Number *"
                      className="w-full p-3 border border-gray-300 rounded"
                      required
                    />
                  </div>
                  <div>
                    <select
                      name="country"
                      value={formData.country || ''}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded appearance-none bg-white"
                      required
                    >
                      <option value="" disabled selected>Country</option>
                      {countryOptions.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              {/* Step 2 */}
              {currentStep === 2 && (
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <input
                        type="text"
                        name="jobTitle"
                        value={formData.jobTitle || ''}
                        onChange={handleInputChange}
                        placeholder="Job Title *"
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                      />
                    </div>
                    <div className="flex-1">
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName || ''}
                        onChange={handleInputChange}
                        placeholder="Company Name *"
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <select
                        name="companySize"
                        value={formData.companySize || ''}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded appearance-none bg-white"
                      >
                        <option value="" disabled selected>Company Size</option>
                        {companySizeOptions.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="flex-1">
                      <select
                        name="learners"
                        value={formData.learners || ''}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded appearance-none bg-white"
                      >
                        <option value="" disabled selected># of Learners</option>
                        {learnersOptions.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <textarea
                      name="details"
                      value={formData.details || ''}
                      onChange={handleInputChange}
                      placeholder="Please provide more details about your request"
                      className="w-full p-3 border border-gray-300 rounded h-36"
                    />
                  </div>
                </div>
              )}

              {/* Step 3 */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <h3 className="text-lg font-medium text-center">Select a time that suits you best</h3>
                  
                  {/* Calendly Integration */}
                  <CalendlyIntegration 
                    url="https://calendly.com/languagekey/fluentpro-consultation" 
                    onDateSelected={handleDateSelection}
                  />
                  
                  <button 
                    className="w-full py-2 bg-gray-200 text-gray-800 rounded mt-4"
                    onClick={handleBack}
                  >
                    Cancel
                  </button>
                </div>
              )}

              {/* Back/Continue buttons */}
              {currentStep < 3 && (
                <div className="mt-6">
                  {currentStep > 1 && (
                    <button
                      className="mr-4 text-gray-500 flex items-center"
                      onClick={handleBack}
                    >
                      <ChevronLeft size={16} />
                      <span>Back</span>
                    </button>
                  )}
                  <button
                    className="w-full py-3 bg-gray-200 text-gray-800 rounded font-medium"
                    onClick={handleNext}
                  >
                    Continue
                  </button>
                </div>
              )}
            </>
          ) : (
            // Completion state
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Demo Booked <Check className="inline-block text-functional-success ml-2" size={28} /></h2>
              <p className="mb-8 text-lg">You're Demo has been booked for: {formData.selectedDate || 'Invalid Date'}</p>
              
              <div className="flex items-center justify-center gap-6 mb-12">
                <div className="text-right">
                  <p className="text-lg">You will be speaking</p>
                  <p className="text-lg">with &lt;Name&gt;</p>
                </div>
                <div className="w-16 h-16 bg-dark rounded-full flex items-center justify-center">
                  <User size={28} className="text-white" />
                </div>
              </div>
              
              <p className="text-gray-600">
                An email has been sent to {formData.email || 'email@example.com'}<br />
                on what to expect on the call
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cta;