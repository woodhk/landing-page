import React from 'react';
import { IndustryHeroData } from '../data/industry/hero';
import { CrossIndustryHeroData } from '../data/cross-industry/cross-industry-hero';
import { getFeaturesByIndustry } from '../data/industry/features';
import { getFeaturesByCrossIndustry } from '../data/cross-industry/cross-industry-features';
import { getCoursesByIndustry } from '../data/industry/courses';
import { getCoursesByCrossIndustry } from '../data/cross-industry/cross-industry-courses';
import { getConversationsByIndustry } from '../data/industry/conversations';
import { getConversationsByCrossIndustry } from '../data/cross-industry/cross-industry-conversations';
import { HRSection, hrSectionData } from '@/components/features/hr';
import Hero from '../sections/Hero';
import Features from '../sections/Features';
import Courses from '../sections/Courses';
import Conversations from '../sections/Conversations';
import AiEthics from '@/components/home/AiEthics';
import FAQ from '@/components/home/FAQ';
import Cta from '@/components/home/Cta';
import { IndustrySlug, CrossIndustrySlug } from '../types';

type BaseTemplateProps = {
  options?: {
    showTestimonials?: boolean;
    showFeatures?: boolean;
  };
};

type IndustryTemplateProps = BaseTemplateProps & {
  type: 'industry';
  data: IndustryHeroData;
};

type CrossIndustryTemplateProps = BaseTemplateProps & {
  type: 'cross-industry';
  data: CrossIndustryHeroData;
};

type GenericIndustryTemplateProps = IndustryTemplateProps | CrossIndustryTemplateProps;

export const GenericIndustryTemplate: React.FC<GenericIndustryTemplateProps> = ({
  type,
  data,
  options = {}
}) => {
  if (!data) {
    return <div>{type === 'industry' ? 'Industry' : 'Cross-industry role'} not found</div>;
  }

  // Get the appropriate data based on the type
  const featuresData = type === 'industry' 
    ? getFeaturesByIndustry(data.slug as IndustrySlug)
    : getFeaturesByCrossIndustry(data.slug as CrossIndustrySlug);
  
  const coursesData = type === 'industry'
    ? getCoursesByIndustry(data.slug as IndustrySlug)
    : getCoursesByCrossIndustry(data.slug as CrossIndustrySlug);
  
  const conversationsData = type === 'industry'
    ? getConversationsByIndustry(data.slug as IndustrySlug)
    : getConversationsByCrossIndustry(data.slug as CrossIndustrySlug);

  return (
    <div className={`${type}-template`}>
      {/* Hero Section */}
      <Hero data={data.hero} />
      
      {/* Features Section */}
      {featuresData && <Features data={featuresData} />}
      
      {/* Courses Section */}
      {coursesData && <Courses data={coursesData} />}
      
      {/* Conversations Section */}
      {conversationsData && <Conversations data={conversationsData} />}
      
      {/* HR Section */}
      <HRSection data={hrSectionData} />
      
      {/* AI Ethics Section */}
      <AiEthics />
      
      {/* FAQ Section - Now using the industry-specific FAQ data */}
      <FAQ pageKey="industry" />
      
      {/* Call to Action Section */}
      <Cta />
    </div>
  );
};

export default GenericIndustryTemplate; 