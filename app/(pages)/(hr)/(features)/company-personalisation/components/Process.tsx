"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { courseSteps } from '../data/process';

const Process = () => {
  const [activeTab, setActiveTab] = useState("1");

  return (
    <div className="relative min-h-screen">
      {/* Background split: 1/3 white, 2/3 gray-100 */}
      <div className="absolute inset-0 w-full h-full">
        <div className="h-1/3 bg-white"></div>
        <div className="h-2/3 bg-gray-50"></div>
      </div>

      <div className="container mx-auto py-16 px-4 relative">
        {/* Rounded card with all elements */}
        <div className="rounded-xl border border-gray-100 shadow-2xl hover:shadow-3xl transition-shadow duration-300 bg-white overflow-hidden">
          <div className="px-8 py-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">Upload, Assign and Save</h2>
              <p className="text-lg md:text-3xl max-w-3xl text-gray-600 mx-auto">
                Create tailored role-plays to your specific company in 5 simple steps.
              </p>
            </div>

            <div className="w-full max-w-6xl mx-auto">
              {/* Custom Tab Navigation - Underline Style */}
              <div className="flex justify-center border-b border-gray-200 mb-12"> 
                {courseSteps.map((step) => (
                  <button
                    key={step.id}
                    onClick={() => setActiveTab(step.id.toString())}
                    className={`
                      px-4 py-3 mx-1 text-sm font-medium transition-colors focus:outline-none flex-1 text-center border-b-2 
                      whitespace-nowrap
                      ${activeTab === step.id.toString() 
                        ? 'border-blue-600 text-blue-600' 
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
                    `}
                  >
                    {step.title}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              {courseSteps.map((step) => (
                <div
                  key={step.id}
                  className={`${activeTab === step.id.toString() ? "block" : "hidden"}`}
                >
                  <div className="bg-gray-100 p-10 rounded-lg w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                      <div>
                        <h3 className="text-3xl font-bold mb-4">{step.title}</h3>
                        <div className="space-y-4">
                          {step.description.map((paragraph, i) => (
                            <p key={i} className="text-lg">{paragraph}</p>
                          ))}
                        </div>
                        {step.buttonText && (
                          <a href="/role-plays" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mt-4">
                            {step.buttonText}
                            <svg
                              className="ml-2 w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </a>
                        )}
                      </div>
                      <div className="flex items-center justify-center">
                        <div className="relative w-full h-[500px] overflow-hidden rounded-lg">
                          <Image
                            src={step.imageSrc}
                            alt={step.imageAlt}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            style={{ objectFit: "contain" }}
                            className="rounded-lg"
                            priority
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;