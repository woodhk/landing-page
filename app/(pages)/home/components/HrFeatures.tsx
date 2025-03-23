'use client';

import React, { useState, ReactNode } from 'react';
import Image from 'next/image';

// Define types to fix TypeScript errors
interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  imagePath: string;
  highlight?: string;
  id: number;
}

interface ROIMetricCardProps {
  title: string;
  value: string;
  description: string;
  icon: ReactNode;
}

interface CompanyCardProps {
  logoPath: string;
}

// Feature card component with configurable static displays and hover effects
const FeatureCard = ({ title, description, icon, imagePath, highlight, id }: FeatureCardProps & { id: number }) => {
  // Cards with IDs 1 and 4 always show image with bullet points
  const isImageCard = id === 1 || id === 4;
  // State to track hover status
  const [isHovered, setIsHovered] = useState(false);
  
  // Generate bullet points from description for image cards
  const getBulletPoints = () => {
    if (isImageCard) {
      // Split the description into sentences
      const sentences = description.split('. ').filter(s => s.length > 0);
      // Return up to 3 bullet points
      return sentences.slice(0, 3).map(s => s.endsWith('.') ? s : `${s}.`);
    }
    return [];
  };
  
  const bulletPoints = getBulletPoints();
  
  // Image cards show image with title and bullet points on hover
  if (isImageCard) {
    return (
      <div 
        className="rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden h-full border border-gray-100 relative"
        style={{ minHeight: '320px' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background image - always visible */}
        <div className="h-full w-full">
          <Image
            src={imagePath}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Gradient overlay - only visible on hover */}
          <div 
            className={`absolute inset-0 bg-gradient-to-b from-transparent via-gray700/30 to-gray-800/80 transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Empty div to maintain layout */}
          </div>
          
          {/* Blur area that includes the heading - only visible on hover */}
          <div 
            className={`absolute bottom-0 left-0 right-0 h-2/5 transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ 
              backdropFilter: 'blur(2px)',
              WebkitBackdropFilter: 'blur(2px)',
            }}
          ></div>
          
          {/* Title and bullet points at the bottom - only visible on hover */}
          <div 
            className={`absolute bottom-0 left-0 right-0 p-6 text-white transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <h3 className="text-2xl font-bold mb-3">{title}</h3>
            <ul className="space-y-2">
              {bulletPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-white rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                  <span className="text-sm font-medium text-white/90">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  // Content cards (IDs 2 and 3) always show content
  return (
    <div 
      className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 h-full border border-gray-100 relative p-6"
      style={{ minHeight: '320px' }}
    >
      <div className="flex items-center mb-4">
        <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center shadow-sm">
          {icon}
        </div>
      </div>
      
      {highlight && (
        <div className="mb-3">
          <span className="text-5xl font-bold text-dynamic-blue">{highlight}</span>
        </div>
      )}
      
      <h3 className="text-2xl font-bold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

// Main ROI metrics card with Apple-inspired design
const ROIMetricCard = ({ title, value, description, icon }: ROIMetricCardProps) => {
  return (
    <div className="bg-gray-100 rounded-xl shadow-sm p-6 flex flex-col h-full border border-gray-100">
      <div className="flex justify-between items-start mb-3">
        <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
          {icon}
        </div>
        <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
          Up to
        </span>
      </div>
      
      <div className="flex-grow flex flex-col justify-center">
        <div className="text-6xl font-bold text-dynamic-blue mb-2 leading-none">{value}</div>
        <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

// Company card with simplified design - no hover effect
const CompanyCard = ({ logoPath }: CompanyCardProps) => {
  return (
    <div className="rounded-xl shadow-sm h-full relative overflow-hidden">
      {/* Main background with image */}
      <div className="relative h-full w-full">
        <Image
          src="/about-us-hero.svg"
          alt="About The Language Key"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
        
        {/* Header content */}
        <div className="absolute top-0 left-0 right-0 p-6 bg-gradient-to-b from-deep-dynamic-blue/70 to-transparent">
          <div className="flex items-center mb-4">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mr-4 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#234BFF" className="text-dynamic-blue">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <span className="block text-xs font-medium text-blue-100 uppercase tracking-wider mb-1">Since 1994</span>
              <h3 className="text-xl font-bold text-white">Trusted by Leading Companies</h3>
            </div>
          </div>
        </div>
        
        {/* Button overlay at bottom */}
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-center p-6 bg-gradient-to-t from-deep-dynamic-blue/70 to-transparent">
          <a 
            href="https://language-key.vercel.app/home" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white hover:bg-blue-50 text-dynamic-blue font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg w-full"
          >
            Learn More About Our Experience
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

const HrRoiComponent = () => {
  // Features data with updated descriptions and highlights for visual emphasis
  const features = [
    {
      id: 1,
      title: "Track Progress & Minimize Admin",
      description: "Save time with automated individual progress tracking and real-time analytics. Designed to reduce HR workload, not add to it.",
      imagePath: "/admin-dashboard.png",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#234BFF" className="text-dynamic-blue">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Flexible Learning For Any Staff Member",
      description: "Staff can engage in training without the need for travel or coordinating schedules with trainers, allowing for uninterrupted progress at their convenience.",
      imagePath: "/staff-homepage.png",
      highlight: "24/7",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#234BFF" className="text-dynamic-blue">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Company-Specific Training",
      description: "Upload your company documents to create realistic role-plays based on your products, services, and policies—ensuring practical, job-relevant training.",
      imagePath: "/upload.svg",
      highlight: "100%",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#234BFF" className="text-dynamic-blue">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Business English Focus",
      description: "Skip general English and focus only on job-specific scenarios. This targeted approach ensures every minute of training directly contributes to improved workplace performance.",
      imagePath: "/exercises-homepage.png",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#234BFF" className="text-dynamic-blue">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
  ];

  // ROI metrics data with larger, bolder numbers inspired by Apple design
  const roiMetrics = [
    {
      id: 1,
      title: "Time Saved",
      value: "65%",
      description: "Reduction in training administration time",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#234BFF" className="text-dynamic-blue">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Cost Reduction",
      value: "40%",
      description: "Compared to traditional training methods",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#234BFF" className="text-dynamic-blue">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Skill Application",
      value: "92%",
      description: "Of staff applying new skills immediately",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#234BFF" className="text-dynamic-blue">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Section Title */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-blue-100 text-dynamic-blue shadow-sm mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
            </svg>
            Workplace English With Tangible ROI
          </div>
          <h2 className="text-3xl md:text-6xl font-bold text-gray-900 mb-4">
            Designed To Maximize <span className="text-dynamic-blue font-bold">ROI</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            FluentPro delivers measurable business impact by focusing exclusively on job-relevant language skills
            that improve team performance and efficiency.
          </p>
        </div>
      
        
        {/* ROI Metrics Section - Apple-inspired layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {roiMetrics.map(metric => (
            <ROIMetricCard
              key={metric.id}
              title={metric.title}
              value={metric.value}
              description={metric.description}
              icon={metric.icon}
            />
          ))}
        </div>
        
        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Features cards with hover effect - increased visibility */}
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map(feature => (
              <FeatureCard
                key={feature.id}
                id={feature.id}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                imagePath={feature.imagePath}
                highlight={feature.highlight}
              />
            ))}
          </div>

          {/* Company sidebar */}
          <div className="lg:col-span-3 h-full">
            <CompanyCard logoPath="/langkey.svg" />
          </div>
        </div>
        
        {/* Additional visible feature cards for smaller screens */}
        <div className="block lg:hidden mt-6">
          <h3 className="text-xl font-bold mb-4 text-center text-gray-800">More Ways We Maximize ROI</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.slice(0, 2).map(feature => (
              <FeatureCard
                key={`mobile-${feature.id}`}
                id={feature.id}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                imagePath={feature.imagePath}
                highlight={feature.highlight}
              />
            ))}
          </div>
        </div>
        
      {/* Bottom CTA */}
      <div 
        className="mt-12 py-12 rounded-xl p-8 text-white text-center bg-no-repeat bg-cover bg-center" 
        style={{ backgroundImage: "url('/cta-bg.svg')" }}
      >
        <h3 className="text-4xl font-bold mb-4">Ready to maximize your language training ROI?</h3>
        <p className="mb-6 max-w-2xl mx-auto text-xl">
          Join the waitlist to secure early access to FluentPro.
        </p>
        <a 
          href="https://forms.gle/tLkLiSziGZZDjLpJA" 
          className="inline-flex items-center bg-white text-black px-8 py-4 rounded-lg text-base font-medium hover:bg-gray-100 transition-colors whitespace-nowrap flex gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-200"
        >
          Secure Early Access
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
      </div>
    </section>
  );
};

export default HrRoiComponent;