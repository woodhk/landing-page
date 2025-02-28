'use client';

import React, { useState, useEffect } from 'react';
import { FormData, steps, expectationPoints, companySizeOptions, learnersOptions, countryOptions } from '../data/Cta';
import { Check, ChevronLeft, ChevronRight, User, Calendar, Clock, Briefcase } from 'lucide-react';
import CalendlyIntegration from './CalendlyIntegration';
import { motion, AnimatePresence } from 'framer-motion';

const Cta = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({});
  const [isComplete, setIsComplete] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  // Validate form based on current step
  useEffect(() => {
    const validateForm = () => {
      if (currentStep === 1) {
        const { email, fullName, phoneNumber, country } = formData;
        setIsFormValid(!!(email && fullName && phoneNumber && country));
      } else if (currentStep === 2) {
        const { jobTitle, companyName } = formData;
        setIsFormValid(!!(jobTitle && companyName));
      } else {
        setIsFormValid(true);
      }
    };
    validateForm();
  }, [formData, currentStep]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (currentStep < steps.length && isFormValid) {
      setCurrentStep(currentStep + 1);
    } else {
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
    setBookingConfirmed(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 300, damping: 24 }
    }
  };

  const slideVariants = {
    hidden: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 300, damping: 30 }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      transition: { duration: 0.3 }
    })
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-white py-20 px-6 md:px-8 lg:px-12">
      <div className="absolute inset-0 bg-[url('/logo.svg')] bg-no-repeat bg-right-bottom opacity-[0.03] pointer-events-none"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row gap-20 max-w-7xl mx-auto justify-center items-center relative z-10"
      >
        {/* Left side - What to expect */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 max-w-md mx-auto"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-6xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#234BFF] to-[#1A38BF]">Request Your</h2>
            <h2 className="text-6xl font-bold mb-2">30-minute</h2>
            <h2 className="text-6xl font-bold mb-10">Fluentpro demo</h2>
          </motion.div>
          
          <motion.div variants={itemVariants} className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-gray-800">What to expect:</h3>
            <ul className="space-y-6">
              {expectationPoints.map((point) => (
                <motion.li 
                  key={point.id} 
                  className="flex items-center gap-4"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <div className="relative">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#234BFF]">
                      <Check size={18} strokeWidth={3} className="text-white" />
                    </div>
                    <div className="absolute -inset-1 rounded-full bg-blue-500/20 blur-sm -z-10"></div>
                  </div>
                  <span className="text-lg">
                    {point.text.includes('personalised demo') ? (
                      <>Get a <span className="font-bold">personalised demo</span> of Fluentpro</>
                    ) : point.text.includes('success stories') ? (
                      <>Hear proven customer <span className="font-bold">success stories</span></>
                    ) : (
                      <>Learn about <span className="font-bold">pricing</span> for your use case</>
                    )}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <p className="font-semibold mb-5 text-gray-700">Trusted by Global Industry Leaders</p>
            <div className="grid grid-cols-4 gap-3">
              {[
                { img: "/jpmorgan.png", alt: "JP Morgan" },
                { img: "/bank-of-china.png", alt: "Bank of China" },
                { img: "/hutchison.png", alt: "Hutchison" },
                { img: "/hsbc.png", alt: "HSBC" }
              ].map((company, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="h-14 bg-white rounded-lg shadow-sm flex items-center justify-center p-2 border border-gray-100"
                >
                  <img src={company.img} alt={company.alt} className="max-w-full max-h-full object-contain" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right side - Form steps */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-1 md:max-w-lg mx-auto"
        >
          <div className="rounded-2xl border border-gray-200 bg-white shadow-lg overflow-hidden">
            <div className="p-8 md:p-10">
              <h2 className="text-3xl font-bold text-center mb-8">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#234BFF] to-[#1A38BF]">
                  Request a Demo
                </span>
              </h2>
              
              {/* Progress indicator */}
              <div className="relative flex items-center justify-between mb-12 px-4">
                <div className="absolute top-1/2 left-[calc(20px+0.5rem)] right-[calc(20px+0.5rem)] h-1.5 bg-black -z-10 transform -translate-y-1/2"></div>
                
                {steps.map((step, index) => (
                  <div key={step.id} className="flex flex-col items-center relative">
                    <motion.div 
                      className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md
                        ${(currentStep > step.id || (bookingConfirmed && step.id === 3))
                          ? 'bg-green-500 text-white' 
                          : currentStep === step.id 
                            ? 'bg-[#234BFF] text-white' 
                            : 'bg-white border border-gray-300 text-gray-500'}`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    >
                      {currentStep > step.id || (bookingConfirmed && step.id === 3) ? (
                        <Check size={20} />
                      ) : (
                        <span className="text-base font-medium">{step.id}</span>
                      )}
                    </motion.div>
                    <span className={`text-xs mt-2 font-medium ${currentStep >= step.id ? 'text-gray-800' : 'text-gray-400'}`}>
                      {step.id === 1 ? 'Personal' : step.id === 2 ? 'Company' : 'Schedule'}
                    </span>
                  </div>
                ))}
              </div>

              <AnimatePresence mode="wait" custom={currentStep}>
                {/* Step 1 */}
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    custom={1}
                    variants={slideVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="space-y-5"
                  >
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email || ''}
                        onChange={handleInputChange}
                        placeholder="Work Email *"
                        className="w-full p-4 border border-gray-300 rounded-lg bg-blue-50 bg-opacity-30 placeholder-gray-500 focus:border-[#234BFF] focus:ring focus:ring-blue-100 transition-all"
                        required
                      />
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName || ''}
                        onChange={handleInputChange}
                        placeholder="Full Name *"
                        className="w-full p-4 border border-gray-300 rounded-lg bg-blue-50 bg-opacity-30 placeholder-gray-500 focus:border-[#234BFF] focus:ring focus:ring-blue-100 transition-all"
                        required
                      />
                    </div>
                    <div className="relative">
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber || ''}
                        onChange={handleInputChange}
                        placeholder="Phone Number *"
                        className="w-full p-4 border border-gray-300 rounded-lg bg-blue-50 bg-opacity-30 placeholder-gray-500 focus:border-[#234BFF] focus:ring focus:ring-blue-100 transition-all"
                        required
                      />
                    </div>
                    <div className="relative">
                      <select
                        name="country"
                        value={formData.country || ''}
                        onChange={handleInputChange}
                        className="w-full p-4 border border-gray-300 rounded-lg bg-blue-50 bg-opacity-30 appearance-none focus:border-[#234BFF] focus:ring focus:ring-blue-100 transition-all"
                        required
                      >
                        <option value="" disabled selected>Country *</option>
                        {countryOptions.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <ChevronDown size={18} className="text-gray-500" />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 2 */}
                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    custom={currentStep > 1 ? -1 : 1}
                    variants={slideVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                          <User size={18} className="text-gray-400" />
                        </div>
                        <input
                          type="text"
                          name="jobTitle"
                          value={formData.jobTitle || ''}
                          onChange={handleInputChange}
                          placeholder="Job Title *"
                          className="w-full p-4 pl-12 border border-gray-300 rounded-lg bg-blue-50 bg-opacity-30 placeholder-gray-500 focus:border-[#234BFF] focus:ring focus:ring-blue-100 transition-all"
                          required
                        />
                      </div>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                          <Briefcase size={18} className="text-gray-400" />
                        </div>
                        <input
                          type="text"
                          name="companyName"
                          value={formData.companyName || ''}
                          onChange={handleInputChange}
                          placeholder="Company Name *"
                          className="w-full p-4 pl-12 border border-gray-300 rounded-lg bg-blue-50 bg-opacity-30 placeholder-gray-500 focus:border-[#234BFF] focus:ring focus:ring-blue-100 transition-all"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="relative">
                        <select
                          name="companySize"
                          value={formData.companySize || ''}
                          onChange={handleInputChange}
                          className="w-full p-4 border border-gray-300 rounded-lg bg-blue-50 bg-opacity-30 appearance-none placeholder-gray-500 focus:border-[#234BFF] focus:ring focus:ring-blue-100 transition-all"
                        >
                          <option value="" disabled selected>Company Size</option>
                          {companySizeOptions.map(option => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                          <ChevronDown size={18} className="text-gray-500" />
                        </div>
                      </div>
                      <div className="relative">
                        <select
                          name="learners"
                          value={formData.learners || ''}
                          onChange={handleInputChange}
                          className="w-full p-4 border border-gray-300 rounded-lg bg-blue-50 bg-opacity-30 appearance-none placeholder-gray-500 focus:border-[#234BFF] focus:ring focus:ring-blue-100 transition-all"
                        >
                          <option value="" disabled selected># of Learners</option>
                          {learnersOptions.map(option => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                          <ChevronDown size={18} className="text-gray-500" />
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <textarea
                        name="details"
                        value={formData.details || ''}
                        onChange={handleInputChange}
                        placeholder="Please provide more details about your request"
                        className="w-full p-4 border border-gray-300 rounded-lg bg-blue-50 bg-opacity-30 placeholder-gray-500 focus:border-[#234BFF] focus:ring focus:ring-blue-100 transition-all h-32 resize-none"
                      />
                    </div>
                  </motion.div>
                )}

                {/* Step 3 */}
                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    custom={1}
                    variants={slideVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="space-y-6"
                  >
                    <div className={`flex items-center justify-center gap-4 ${
                        bookingConfirmed ? 'bg-[#E6F9F0]' : 'bg-blue-50'
                      } p-4 rounded-lg mb-4 transition-colors duration-300`}>
                      {bookingConfirmed ? (
                        <Check size={24} className="text-[#1E8B59]" />
                      ) : (
                        <Calendar size={24} className="text-[#234BFF]" />
                      )}
                      <h3 className={`text-lg font-medium ${
                        bookingConfirmed ? 'text-[#1E8B59]' : ''
                      }`}>
                        {bookingConfirmed 
                          ? "Fluentpro Demo was Successfully booked!" 
                          : "Select a convenient time for your demo"}
                      </h3>
                    </div>
                    
                    {/* Calendly Integration */}
                    <div className="bg-white rounded-lg overflow-hidden border border-gray-100 shadow-inner">
                      <CalendlyIntegration 
                        url="https://calendly.com/languagekey/fluentpro-consultation" 
                        onDateSelected={handleDateSelection}
                      />
                    </div>
                    
                    <motion.button 
                      className="w-full py-3 px-4 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
                      onClick={handleBack}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ChevronLeft size={20} />
                      Back to previous step
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Back/Continue buttons */}
              {currentStep < 3 && (
                <div className="mt-8 flex flex-col-reverse md:flex-row md:items-center md:justify-between">
                  {currentStep > 1 && (
                    <motion.button
                      className="mt-3 md:mt-0 text-gray-600 flex items-center justify-center md:justify-start gap-1 py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors w-full md:w-auto"
                      onClick={handleBack}
                      whileHover={{ x: -3 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ChevronLeft size={18} />
                      <span>Back</span>
                    </motion.button>
                  )}
                  <motion.button
                    className={`w-full md:w-auto py-4 px-8 rounded-lg font-medium flex items-center justify-center gap-2 shadow-md ${
                      isFormValid 
                        ? 'bg-[#234BFF] hover:bg-[#1A38BF] text-white' 
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    } transition-colors`}
                    onClick={handleNext}
                    disabled={!isFormValid}
                    whileHover={isFormValid ? { scale: 1.02 } : {}}
                    whileTap={isFormValid ? { scale: 0.98 } : {}}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <span>Continue to {currentStep === 1 ? 'Company Info' : 'Scheduling'}</span>
                    <ChevronRight size={18} />
                  </motion.button>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

// ChevronDown component for select inputs
const ChevronDown = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export default Cta;