import React from 'react';

interface ButtonProps {
  text: string;
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  text, 
  primary = true, 
  size = 'medium',
  onClick = () => {}
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
    ? "bg-[#234BFF] hover:bg-[#1A38BF] text-white" 
    : "bg-[#F4F7FB] hover:bg-[#DEE4F1] text-[#1C2530]";
  
  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses}`}
    >
      {text}
    </button>
  );
};

export default Button;