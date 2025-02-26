import React from 'react';

interface CheckItemProps {
  text: string;
}

const CheckItem: React.FC<CheckItemProps> = ({ text }) => {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#E6F9F0] flex items-center justify-center">
        <svg 
          className="h-4 w-4 text-[#28C76F]" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path 
            fillRule="evenodd" 
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
            clipRule="evenodd" 
          />
        </svg>
      </div>
      <p className="ml-3 text-base font-medium text-[#1C2530]">{text}</p>
    </div>
  );
};

export default CheckItem;