import React from 'react';
import { CrossIndustryHeroData } from '../data/cross-industry/cross-industry-hero';
import GenericIndustryTemplate from './GenericIndustryTemplate';

interface CrossIndustryTemplateProps {
  crossIndustry: CrossIndustryHeroData;
  options?: {
    showTestimonials?: boolean;
    showFeatures?: boolean;
  };
}

export const CrossIndustryTemplate: React.FC<CrossIndustryTemplateProps> = ({
  crossIndustry,
  options
}) => {
  return (
    <GenericIndustryTemplate
      type="cross-industry"
      data={crossIndustry}
      options={options}
    />
  );
};

export default CrossIndustryTemplate; 