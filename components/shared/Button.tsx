"use client";

import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  text: string;
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  url?: string;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  text, 
  primary = true, 
  size = 'medium',
  onClick,
  url = "https://forms.gle/tLkLiSziGZZDjLpJA",
  icon
}) => {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-md focus:outline-none transition-colors";
  
  // Size classes
  const sizeClasses = {
    small: "px-3 py-1.5 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg"
  };

  // Variant classes
  const variantClasses = primary 
    ? "bg-[#234BFF] hover:bg-[#4D77FF] active:bg-[#1A3ACC] text-white" 
    : "bg-none hover:bg-[#DEE4F1] text-[#1C2530]";
  
  const handleClick = (e: React.MouseEvent) => {
    // Call the original onClick handler if provided
    if (onClick) {
      onClick();
    }
    
    // Navigate to the URL
    window.location.href = url;
  };
  
  return (
    <button
      onClick={handleClick}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses}`}
    >
      {text}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;