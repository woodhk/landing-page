"use client";

import React, { useState } from "react";
import Image from "next/image";
import processes from "../data/process";

const Process = () => {
  const [activeTab, setActiveTab] = useState("step-1");

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Three Steps, Unlimited Exercises</h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          The three step process Fluentpro takes to identify common mistakes and create drills to fix them.
        </p>
      </div>

      <div className="w-full max-w-6xl mx-auto">
        {/* Custom Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-lg p-1 inline-flex w-auto sm:w-96">
            {processes.map((process) => (
              <button
                key={process.id}
                onClick={() => setActiveTab(process.id)}
                className={`
                  px-6 py-2 mx-1 text-sm rounded-md transition-colors focus:outline-none flex-1 text-center
                  ${activeTab === process.id ? "bg-white shadow" : "text-gray-600 hover:bg-gray-200"}
                `}
              >
                {process.pill}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        {processes.map((process) => (
          <div
            key={process.id}
            className={`${activeTab === process.id ? "block" : "hidden"}`}
          >
            <div className="bg-gray-100 p-10 rounded-lg w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="inline-block bg-gray-200 rounded-full px-4 py-1 mb-4">
                    {process.pill}
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{process.title}</h3>
                  <p className="text-lg">{process.description}</p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative w-full h-80 overflow-hidden rounded-lg">
                    {/* Background image */}
                    <Image
                      src={process.imagePath}
                      alt={`${process.title} background`}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 66vw"
                      style={{ objectFit: "cover" }}
                      className="rounded-lg"
                    />
                    
                    {/* Small image overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-4/5 h-4/5 shadow-lg">
                        <Image
                          src={process.smallImagePath}
                          alt={process.title}
                          fill
                          sizes="(max-width: 768px) 80vw, 50vw"
                          style={{ objectFit: "contain" }}
                          className="rounded"
                        />
                      </div>
                    </div>
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