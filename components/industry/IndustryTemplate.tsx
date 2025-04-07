import React from 'react';
import { IndustryHeroData } from './data/industry/hero';
import { getFeaturesByIndustry } from './data/industry/features';
import { getCoursesByIndustry } from './data/industry/courses';
import { getConversationsByIndustry } from './data/industry/conversations';
import { HRSection, hrSectionData } from '@/components/features/hr';
import Hero from './sections/Hero';
import Features from './sections/Features';
import Courses from './sections/Courses';
import Conversations from './sections/Conversations';
import AiEthics from '@/components/home/AiEthics';
import FAQ from '@/components/home/FAQ';
import Cta from '@/components/home/Cta';

interface IndustryTemplateProps {
  industry: IndustryHeroData;
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

  // Get the features data for this industry
  const featuresData = getFeaturesByIndustry(industry.slug);
  
  // Get the courses data for this industry
  const coursesData = getCoursesByIndustry(industry.slug);
  
  // Get the conversations data for this industry
  const conversationsData = getConversationsByIndustry(industry.slug);

  return (
    <div className="industry-template">
      {/* Hero Section */}
      <Hero data={industry.hero} />
      
      {/* Features Section */}
      <Features data={featuresData} />
      
      {/* Courses Section */}
      <Courses data={coursesData} />
      
      {/* Conversations Section */}
      <Conversations data={conversationsData} />
      
      {/* HR Section */}
      <HRSection data={hrSectionData} />
      
      {/* AI Ethics Section */}
      <AiEthics />
      
      {/* FAQ Section */}
      <FAQ />
      
      {/* Call to Action Section */}
      <Cta />
      
      {/* Additional sections can be added here conditionally */}
      {/* For example:
      {showTestimonials && <TestimonialsSection data={industry.testimonials} />}
      {industry.benefits && <BenefitsSection data={industry.benefits} />}
      */}
    </div>
  );
};

export default IndustryTemplate; 