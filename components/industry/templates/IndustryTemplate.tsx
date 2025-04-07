import React from 'react';
import { IndustryHeroData } from '../data/industry/hero';
import GenericIndustryTemplate from './GenericIndustryTemplate';

interface IndustryTemplateProps {
  industry: IndustryHeroData;
  options?: {
    showTestimonials?: boolean;
    showFeatures?: boolean;
  };
}

export const IndustryTemplate: React.FC<IndustryTemplateProps> = ({
  industry,
  options
}) => {
  return (
    <GenericIndustryTemplate
      type="industry"
      data={industry}
      options={options}
    />
  );
};

export default IndustryTemplate; 