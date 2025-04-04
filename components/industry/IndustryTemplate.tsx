import React from 'react';
import { IndustryData } from './types';
import HeroSection from './HeroSection';

interface IndustryTemplateProps {
  industry: IndustryData;
  // We can add props for additional sections as needed
  // For example:
  // showTestimonials?: boolean;
  // showFeatures?: boolean;
  // etc.
}

export const IndustryTemplate: React.FC<IndustryTemplateProps> = ({
  industry,
}) => {
  if (!industry) {
    return <div>Industry not found</div>;
  }

  return (
    <div className="industry-template">
      {/* Hero Section */}
      <HeroSection data={industry.hero} />
      
      {/* Additional sections can be added here conditionally */}
      {/* For example:
      {showTestimonials && <TestimonialsSection data={industry.testimonials} />}
      {showFeatures && <FeaturesSection data={industry.features} />}
      {industry.benefits && <BenefitsSection data={industry.benefits} />}
      */}
    </div>
  );
};

export default IndustryTemplate; 