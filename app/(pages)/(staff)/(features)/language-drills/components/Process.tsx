"use client";

import React, { useState } from "react";
import Image from "next/image";
import processes from "../data/process";

const Process = () => {
  const [activeTab, setActiveTab] = useState("step-1");

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">Break Bad Language Habits Early</h2>
        <p className="text-lg md:text-3xl max-w-3xl text-gray-600 mx-auto">
        Use AI to create exercises that stop bad language habits before they cost your business thousands.
        </p>
      </div>

      <div className="w-full max-w-6xl mx-auto">
        {/* Custom Tab Navigation - Underline Style */}
        <div className="flex justify-center border-b border-gray-200 mb-12"> 
          {/* Remove the inner div with bg-gray-100 */}
          {processes.map((process) => (
            <button
              key={process.id}
              onClick={() => setActiveTab(process.id)}
              className={`
                px-4 py-3 mx-1 text-sm font-medium transition-colors focus:outline-none flex-1 text-center border-b-2 
                whitespace-nowrap /* Prevent wrapping on smaller screens */
                ${activeTab === process.id 
                  ? 'border-dynamic-blue text-dynamic-blue' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
              `}
            >
              {process.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {processes.map((process) => (
          <div
            key={process.id}
            className={`${activeTab === process.id ? "block" : "hidden"}`}
          >
            <div className="bg-gray-100 p-10 rounded-lg w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-4">{process.title}</h3>
                  <p className="text-lg">{process.description}</p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative w-full h-96 overflow-hidden rounded-lg">
                    <Image
                      src={process.smallImagePath}
                      alt={process.title}
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
  );
};

export default Process;