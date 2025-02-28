// app/(pages)/home/components/AiEthics.tsx
"use client";

import React from "react";
import { Shield, Lock, Filter, FileText } from "lucide-react";
import { aiEthicsData, EthicsCardProps } from "../data/AiEthics";

const iconMap = {
  Shield: Shield,
  Lock: Lock,
  Filter: Filter,
  FileText: FileText,
};

const EthicsCard = ({ title, description, icon, index = 0 }: EthicsCardProps & { index?: number }) => {
  const IconComponent = iconMap[icon as keyof typeof iconMap];
  const isLastCard = index === 3;
  
  // Array of colors for icon variation
  const iconColors = [
    "text-purple-500", // GDPR Compliant - purple as requested
    "text-deep-azure", 
    "text-emerald-500", 
    "text-amber-500"
  ];
  
  // Array of background colors for icon variation
  const bgColors = [
    "bg-purple-500/10", // GDPR Compliant - matching purple background
    "bg-deep-azure/10", 
    "bg-emerald-500/10", 
    "bg-amber-500/10"
  ];
  
  // Get color based on index
  const iconColor = iconColors[index % iconColors.length];
  const bgColor = bgColors[index % bgColors.length];
  
  return (
    <div className={`bg-light-3 p-6 shadow-sm hover:shadow-md transition-all duration-300 
      ${isLastCard ? 'rounded-lg rounded-br-[3.5rem]' : 'rounded-lg'}`}>
      <div className="flex items-center gap-3 mb-3">
        <div className={`${bgColor} rounded-full p-2.5 shadow-sm`}>
          <IconComponent className={`w-5 h-5 ${iconColor}`} />
        </div>
        <h3 className="font-semibold text-dark">{title}</h3>
      </div>
      <p className="text-medium text-sm leading-relaxed">{description}</p>
    </div>
  );
};

const AiEthics = () => {
  const { heading, subHeading, description, cards } = aiEthicsData;
  
  return (
    <section className="w-full py-16 bg-white relative">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-dynamic-blue/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-deep-azure/5 blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <div className="inline-block mb-3">
            <span className="bg-blue-50 text-dynamic-blue px-4 py-1.5 rounded-full text-sm font-medium shadow-sm">
              Enterprise Ready
            </span>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
                {heading}
              </h2>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-dark mb-2">
                {subHeading}
              </h3>
              <p className="text-medium leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <EthicsCard
              key={index}
              title={card.title}
              description={card.description}
              icon={card.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiEthics;