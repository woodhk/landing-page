'use client';

import React, { useState, ReactNode } from 'react';
import Image from 'next/image';

// Type definitions
interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  imagePath: string;
  tall?: boolean;
}

// Card component with hover effects - modified to only show image on hover without text
const FeatureCard = ({ title, description, icon, imagePath, tall = false }: FeatureCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="bg-gray-100 p-3 rounded-3xl h-full">
      <div 
        className={`relative bg-white rounded-2xl overflow-hidden transition-all duration-500 ${
          tall ? 'h-full' : 'h-48 sm:h-64'
        } ${isHovered ? 'shadow-lg' : 'shadow-sm'}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Content Layer */}
        <div 
          className={`absolute inset-0 p-6 flex flex-col transition-all duration-500 ease-in-out ${
            isHovered ? 'opacity-0 transform translate-y-4' : 'opacity-100'
          }`}
        >
          <div className="mb-4">
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center shadow-sm">
              {icon}
            </div>
          </div>
          
          <div className="mt-auto">
            <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {description}
            </p>
          </div>
        </div>
        
        {/* Image Layer - removed text overlay */}
        <div 
          className={`absolute inset-0 transition-all duration-500 ease-in-out ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 p-4 flex items-center justify-center">
            <Image
              src={imagePath}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Type definition for FluentProCard
interface FluentProCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  logoPath: string;
  imagePath: string;
}

// FluentPro middle card component with hover effects - modified to only show image on hover
const FluentProCard = ({ title, description, icon, logoPath, imagePath }: FluentProCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="bg-gray-100 p-3 rounded-3xl h-full">
      <div 
        className="relative bg-white rounded-2xl shadow-sm overflow-hidden transition-all duration-500 h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Content Layer */}
        <div 
          className={`absolute inset-0 flex flex-col h-full p-6 transition-all duration-500 ease-in-out ${
            isHovered ? 'opacity-0 transform translate-y-8' : 'opacity-100'
          }`}
        >
          <div className="mb-4">
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center shadow-sm">
              {icon}
            </div>
          </div>
          
          <div className="flex justify-center items-center flex-grow py-6">
            <img src={logoPath} alt={title} className="max-w-full max-h-36" />
          </div>
          
          <div className="mt-auto">
            <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {description}
            </p>
          </div>
        </div>
        
        {/* Image Layer - removed text overlay */}
        <div 
          className={`absolute inset-0 transition-all duration-500 ease-in-out ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src={imagePath}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const HrFeaturesBento = () => {
  // Feature interface
  interface Feature {
    id: number;
    title: string;
    description: string;
    imagePath: string;
    icon: ReactNode;
    column: string;
  }
  
  // Features data
  const features: Feature[] = [
    {
      id: 1,
      title: "Track Progress & Minimize Admin Work",
      description: "Gain insights into employee performance with detailed, real time analytics and reporting—designed to reduce HR workload, not add to it.",
      imagePath: "/admin-dashboard.png",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-700">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      column: "left"
    },
    {
      id: 2,
      title: "Flexible Learning for Any Staff Member",
      description: "Staff can engage in training without the need for travel or coordinating schedules with trainers, allowing for uninterrupted progress at their convenience.",
      imagePath: "/staff-homepage.png",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-700">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      column: "left"
    },
    {
      id: 3,
      title: "Company Specific Personalisation",
      description: "Upload your company documents to create realistic role-plays based on your products, services, and policies—ensuring practical, job-relevant training.",
      imagePath: "/upload.svg",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-700">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      column: "right"
    },
    {
      id: 4,
      title: "Focused Training for Maximum Impact",
      description: "We skip general English and focus only on the essential scenarios staff face with customers, and colleagues, ensuring  targeted training that maximizes learning efficiency and company ROI.",
      imagePath: "/scenarios-homepage.png",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-700">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      column: "right"
    }
  ];

  const leftColumnFeatures = features.filter(feature => feature.column === "left");
  const rightColumnFeatures = features.filter(feature => feature.column === "right");

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-7xl font-semibold text-gray-900 mb-6">
            Designed to Maximize <br /> <span className="text-dynamic-blue font-bold">R</span>eturn <span className="text-dynamic-blue font-bold">O</span>n <span className="text-dynamic-blue font-bold">I</span>nvestment
          </h2>
        </div>
        
        {/* Main grid container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* First column - 2 cards stacked */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {leftColumnFeatures.map(feature => (
              <FeatureCard
                key={feature.id}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                imagePath={feature.imagePath}
              />
            ))}
          </div>

          {/* Middle column - 1 tall card */}
          <div className="lg:col-span-3">
            <FluentProCard
              title="Parent Company"
              description="Fluentpro is the latest product of The LanguageKey. Over the past 30 years, we've conducted training for 100s of Hong Kong and international companies, including many Fortune 500 companies."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-700">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
              logoPath="/langkey.svg"
              imagePath="/workshop.png"
            />
          </div>

          {/* Third column - 2 cards stacked */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {rightColumnFeatures.map(feature => (
              <FeatureCard
                key={feature.id}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                imagePath={feature.imagePath}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HrFeaturesBento;