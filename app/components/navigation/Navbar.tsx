// app/components/navigation/Navbar.tsx
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../../components/ui/Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="bg-[#F4F7FB] border-b border-[#DEE4F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/home" className="flex items-center cursor-pointer">
                <Image 
                  src="/logo.png" 
                  alt="FluentPro Logo" 
                  width={1000} 
                  height={1000} 
                  className="h-16 w-auto"
                />
              </Link>
            </div>
          </div>
          
          <div className="hidden sm:flex sm:items-center">
            <div className="flex items-center">
              <div className="mr-8">
                <Link href="/about" className="text-[#4A5768] font-medium hover:text-[#1C2530]">
                  About Us
                </Link>
              </div>
              <Button primary={true} text="Request a Demo" />
            </div>
          </div>
          
          <div className="-mr-2 flex items-center sm:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#4A5768]"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg 
                  className="h-6 w-6" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg 
                  className="h-6 w-6" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="pt-2 pb-3 space-y-1">
          <Link href="/about" className="block pl-3 pr-4 py-2 border-l-4 border-transparent hover:border-[#DEE4F1] text-[#4A5768]">About Us</Link>
          <a href="#" className="block pl-3 pr-4 py-2 border-l-4 border-transparent hover:border-[#DEE4F1] text-[#4A5768]">Request a Demo</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;