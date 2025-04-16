// app/(pages)/home/components/AiEthics.tsx
"use client";

import React from "react";
import { Shield, Lock, Filter, FileText } from "lucide-react";
import { aiEthicsData, EthicsCardProps } from "../../data/AiEthics";

// Map of icon names to their corresponding components
const ICON_MAP = {
  Shield,
  Lock,
  Filter,
  FileText,
} as const;

// Color configurations for cards
const CARD_COLORS = {
  icon: [
    "text-purple-500", // GDPR Compliant
    "text-deep-azure",
    "text-emerald-500",
    "text-amber-500"
  ],
  background: [
    "bg-purple-500/10", // GDPR Compliant
    "bg-deep-azure/10",
    "bg-emerald-500/10",
    "bg-amber-500/10"
  ]
} as const;

/**
 * EthicsCard component displays individual ethics-related information cards
 * with consistent styling and icon variations based on their position.
 */
const EthicsCard: React.FC<EthicsCardProps & { index?: number }> = ({ 
  title, 
  description, 
  icon, 
  index = 0 
}) => {
  const IconComponent = ICON_MAP[icon as keyof typeof ICON_MAP];
  const isLastCard = index === 3;
  
  const iconColor = CARD_COLORS.icon[index % CARD_COLORS.icon.length];
  const bgColor = CARD_COLORS.background[index % CARD_COLORS.background.length];
  
  return (
    <div 
      className={`bg-light-3 p-6 shadow-sm hover:shadow-md transition-all duration-300 
        ${isLastCard ? 'rounded-lg rounded-br-[3.5rem]' : 'rounded-lg'}`}
    >
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

/**
 * BackgroundDecoration component renders the subtle background effects
 */
const BackgroundDecoration: React.FC = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
    <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-dynamic-blue/5 blur-3xl" />
    <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-deep-azure/5 blur-3xl" />
  </div>
);

/**
 * HeaderSection component displays the enterprise ready badge and main content
 */
const HeaderSection: React.FC<{
  heading: string;
  subHeading: string;
  description: string;
}> = ({ heading, subHeading, description }) => (
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
);

/**
 * AiEthics component showcases AI ethics-related information in a grid layout
 * with consistent styling and visual hierarchy.
 */
const AiEthics: React.FC = () => {
  const { heading, subHeading, description, cards } = aiEthicsData;
  
  return (
    <section className="w-full bg-white relative">
      <BackgroundDecoration />
      <div className="container mx-auto px-4">
        <HeaderSection 
          heading={heading}
          subHeading={subHeading}
          description={description}
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <EthicsCard
              key={index}
              {...card}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiEthics;