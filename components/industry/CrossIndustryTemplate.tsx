import React from 'react';
import { CrossIndustryHeroData } from './data/cross-industry-hero';
import { getFeaturesByCrossIndustry } from './data/cross-industry-features';
import { getCoursesByCrossIndustry } from './data/cross-industry-courses';
import { getConversationsByCrossIndustry } from './data/cross-industry-conversations';
import { HRSection, hrSectionData } from '@/components/features/hr';
import Hero from './sections/Hero';
import Features from './sections/Features';
import Courses from './sections/Courses';
import Conversations from './sections/Conversations';
import AiEthics from '@/components/home/AiEthics';
import FAQ from '@/components/home/FAQ';
import Cta from '@/components/home/Cta';

interface CrossIndustryTemplateProps {
  crossIndustry: CrossIndustryHeroData;
}

export const CrossIndustryTemplate: React.FC<CrossIndustryTemplateProps> = ({
  crossIndustry,
}) => {
  if (!crossIndustry) {
    return <div>Cross-industry role not found</div>;
  }

  // Get the features data for this cross-industry role
  const featuresData = getFeaturesByCrossIndustry(crossIndustry.slug);
  
  // Get the courses data for this cross-industry role
  const coursesData = getCoursesByCrossIndustry(crossIndustry.slug);
  
  // Get the conversations data for this cross-industry role
  const conversationsData = getConversationsByCrossIndustry(crossIndustry.slug);

  return (
    <div className="cross-industry-template">
      {/* Hero Section */}
      <Hero data={crossIndustry.hero} />
      
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
    </div>
  );
};

export default CrossIndustryTemplate; 