"use client";

import React from "react";
import Link from "next/link";
import { languageDrillsData } from "../data/languageDrills";

// Map of icon components is already imported from lucide-react in the data file

// Color configurations for cards
const CARD_COLORS = {
  icon: [
    "text-purple-500",
    "text-blue-500",
    "text-emerald-500",
    "text-amber-500"
  ],
  background: [
    "bg-purple-500/10",
    "bg-blue-500/10",
    "bg-emerald-500/10",
    "bg-amber-500/10"
  ]
} as const;

interface DrillCardProps {
  title: string;
  description: string;
  icon: any;
  index: number;
}

const DrillCard: React.FC<DrillCardProps> = ({ 
  title, 
  description, 
  icon: Icon,
  index 
}) => {
  const iconColor = CARD_COLORS.icon[index % CARD_COLORS.icon.length];
  const bgColor = CARD_COLORS.background[index % CARD_COLORS.background.length];
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
      <div className="flex items-center gap-3 mb-3">
        <div className={`${bgColor} rounded-full p-2.5`}>
          <Icon className={`w-5 h-5 ${iconColor}`} />
        </div>
        <h3 className="font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

const LanguageDrills: React.FC = () => {
  const { title, mainHeading, description, drills } = languageDrillsData;
  
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <div className="inline-block mb-3">
            <span className="bg-gray-200 text-gray-800 px-4 py-1.5 rounded-full text-sm font-medium">
              {title}
            </span>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {mainHeading}
              </h2>
            </div>
            
            <div className="flex flex-col gap-4">
              <p className="text-gray-600 text-lg leading-relaxed">
                {description}
              </p>
              <Link 
                href="/language-drills"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                Learn more
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
              </Link>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {drills.map((drill, index) => (
            <DrillCard
              key={drill.id}
              {...drill}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguageDrills;
