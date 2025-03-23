"use client";

import React from 'react';
import { BankingAnimation } from '../animations/Banking';
import { RealEstateAnimation } from '../animations/RealEstate';
import { ShippingLogisticsAnimation } from '../animations/ShippingLogic';
import { InsuranceAnimation } from '../animations/Insurance';
import { YourIndustryAnimation } from '../animations/YourIndustry';
import { IndustryAnimationProps } from './types';

/**
 * Renders industry-specific animation component
 */
const IndustryAnimation: React.FC<IndustryAnimationProps> = ({ industryId }) => {
  switch(industryId) {
    case "banking-finance": 
      return <BankingAnimation />;
    case "real-estate": 
      return <RealEstateAnimation />;
    case "shipping-logistics": 
      return <ShippingLogisticsAnimation />;
    case "insurance": 
      return <InsuranceAnimation />;
    case "your Industry?": 
      return <YourIndustryAnimation />;
    default: 
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 sm:h-12 sm:w-12 text-blue-600/40 dark:text-blue-400/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      );
  }
};

export default IndustryAnimation; 