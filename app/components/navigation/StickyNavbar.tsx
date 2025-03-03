// app/components/navigation/StickyNavbar.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const StickyNavbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [exploreMenuOpen, setExploreMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 w-full pt-6 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex justify-between items-center h-16 bg-white rounded-full shadow-lg px-6 border border-[#F4F7FB]">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/home" className="flex items-center">
              <Image 
                src="/logo.svg" 
                alt="FluentPro Logo" 
                width={32} 
                height={32} 
                className="h-7 w-auto"
              />
              <span className="ml-2 text-xl font-bold">FluentPro</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Explore Dropdown */}
            <div className="relative explore-menu">
              <button 
                onClick={() => {
                  setExploreMenuOpen(!exploreMenuOpen);
                  setLanguageMenuOpen(false);
                }}
                className="flex items-center px-6 py-3 rounded-full text-[#4A5768] hover:bg-[#F4F7FB] hover:text-[#234BFF] font-semibold transition-colors"
              >
                Explore
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`ml-1 h-4 w-4 transition-transform ${exploreMenuOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Explore Dropdown Menu */}
              {exploreMenuOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-lg shadow-lg bg-white border border-[#DEE4F1] focus:outline-none z-10">
                  <div className="py-1">
                    <Link 
                      href="/about" 
                      className="block px-4 py-2 text-sm text-[#4A5768] hover:bg-[#F4F7FB] hover:text-[#234BFF]"
                      onClick={() => setExploreMenuOpen(false)}
                    >
                      About Us
                    </Link>
                    {/* Additional menu items can be added here in the future */}
                  </div>
                </div>
              )}
            </div>
            
            {/* Language Dropdown */}
            <div className="relative language-menu">
              <button 
                onClick={() => {
                  setLanguageMenuOpen(!languageMenuOpen);
                  setExploreMenuOpen(false);
                }}
                className="flex items-center px-6 py-3 rounded-full bg-[#F4F7FB] text-[#4A5768] hover:bg-[#DEE4F1] font-semibold transition-colors border border-[#E5E7EB]"
              >
                English
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`ml-1 h-4 w-4 transition-transform ${languageMenuOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Language Dropdown Menu */}
              {languageMenuOpen && (
                <div className="absolute right-0 mt-2 w-64 rounded-lg shadow-lg bg-white border border-[#DEE4F1] focus:outline-none z-10">
                  <div className="py-1">
                    <Link 
                      href="/zh-hk" 
                      className="block px-4 py-2 text-sm text-[#4A5768] hover:bg-[#F4F7FB] hover:text-[#234BFF]"
                      onClick={() => setLanguageMenuOpen(false)}
                    >
                      繁體中文 (Traditional Chinese)
                    </Link>
                    <Link 
                      href="/zh-cn" 
                      className="block px-4 py-2 text-sm text-[#4A5768] hover:bg-[#F4F7FB] hover:text-[#234BFF]"
                      onClick={() => setLanguageMenuOpen(false)}
                    >
                      简体中文 (Simplified Chinese)
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            {/* Call to Action Button */}
            <button 
              className="bg-[#234BFF] hover:bg-[#1A38BF] text-white px-4 py-3 rounded-full font-medium flex items-center transition-colors text-sm md:text-base"
              onClick={() => {/* Implement demo request logic */}}
            >
              Request a Demo
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 ml-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center w-10 h-10 text-[#273046] mr-3"
            >
              <span className="sr-only">Toggle menu</span>
              <svg 
                className={`w-7 h-7 transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45' : ''}`}
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v12M6 12h12" />
              </svg>
            </button>

            <button 
              className="bg-[#234BFF] hover:bg-[#1A38BF] text-white px-4 py-3 rounded-full font-medium flex items-center transition-colors text-sm md:text-base"
              onClick={() => {/* Implement demo request logic */}}
            >
              Request a Demo
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 ml-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} fixed top-32 left-0 right-0 z-40 bg-white shadow-lg`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="bg-[#F8F9FA] rounded-2xl overflow-hidden">
            {/* Explore Section */}
            <div className="p-6">
              <h2 className="text-[#4A5768] font-semibold mb-6">Explore</h2>
              <div className="space-y-4">
                <Link 
                  href="/about" 
                  className="flex items-center justify-between group p-4 rounded-xl hover:bg-white transition-all duration-200"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5 text-[#234BFF]" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-[#273046] font-medium block">About Us</span>
                      <span className="text-sm text-[#4A5768]">Learn more about FluentPro</span>
                    </div>
                  </div>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-[#4A5768] group-hover:text-[#234BFF] transition-colors" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          
            {/* Language Section */}
            <div className="p-6 bg-white">
              <h2 className="text-[#4A5768] font-semibold mb-6">Select Language</h2>
              <div className="space-y-2">
                <Link 
                  href="/en" 
                  className="flex items-center justify-between p-4 rounded-xl bg-blue-50 text-[#234BFF]"
                >
                  <div className="flex items-center space-x-3">
                    <span className="font-medium">English</span>
                    <span className="text-sm px-2 py-1 bg-[#234BFF] text-white rounded-full">Active</span>
                  </div>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </Link>
                <Link 
                  href="/zh-hk" 
                  className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <span className="font-medium text-[#273046]">繁體中文</span>
                    <span className="text-sm text-[#4A5768]">Traditional Chinese</span>
                  </div>
                </Link>
                <Link 
                  href="/zh-cn" 
                  className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <span className="font-medium text-[#273046]">简体中文</span>
                    <span className="text-sm text-[#4A5768]">Simplified Chinese</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default StickyNavbar;