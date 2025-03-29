// app/components/navigation/StickyNavbar.tsx
"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const StickyNavbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [exploreMenuOpen, setExploreMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  
  // Handle scroll effect with throttling for performance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    // Throttle scroll event for better performance
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    const throttledScroll = () => {
      if (!timeoutId) {
        timeoutId = setTimeout(() => {
          handleScroll();
          timeoutId = null;
        }, 100);
      }
    };
    
    window.addEventListener('scroll', throttledScroll);
    
    return () => {
      window.removeEventListener('scroll', throttledScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  // Handle mouse enter/leave for hover effect
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        exploreMenuOpen && 
        navbarRef.current && 
        !navbarRef.current.contains(event.target as Node)
      ) {
        setExploreMenuOpen(false);
      }
      
      if (
        languageMenuOpen && 
        navbarRef.current && 
        !navbarRef.current.contains(event.target as Node)
      ) {
        setLanguageMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [exploreMenuOpen, languageMenuOpen]);

  // Close mobile menu on resize if screen becomes larger
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileMenuOpen]);

  // Function to handle early access button click
  const handleEarlyAccessClick = () => {
    window.open("https://forms.gle/tLkLiSziGZZDjLpJA", "_blank");
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out
        ${(!isScrolled || (isScrolled && isHovered)) 
          ? 'pt-4 sm:pt-5 md:pt-6' 
          : 'pt-2 sm:pt-3 md:pt-4'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8" ref={navbarRef}>
        <div 
          className={`flex justify-between items-center rounded-full border border-[#F4F7FB] transition-all duration-300 ease-in-out
            ${(!isScrolled || (isScrolled && isHovered)) 
              ? 'h-16 sm:h-18 md:h-16 px-5 sm:px-6 md:px-6 bg-white shadow-lg' 
              : 'h-14 sm:h-16 md:h-16 px-4 sm:px-5 md:px-6 bg-white/95 backdrop-blur-md shadow-md'}`}
        >
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/home" className="flex items-center">
              <Image 
                src="/logo/logo.svg" 
                alt="FluentPro Logo" 
                width={32} 
                height={32} 
                className={`transition-all duration-300 ease-in-out ${(!isScrolled || (isScrolled && isHovered)) ? 'h-7 w-auto' : 'h-6 w-auto'}`}
              />
              <span className={`ml-2 font-bold transition-all duration-300 ease-in-out ${(!isScrolled || (isScrolled && isHovered)) ? 'text-xl' : 'text-lg'}`}>FluentPro</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
            {/* Explore Dropdown */}
            <div className="relative explore-menu">
              <button 
                onClick={() => {
                  setExploreMenuOpen(!exploreMenuOpen);
                  setLanguageMenuOpen(false);
                }}
                className={`flex items-center rounded-full text-[#4A5768] hover:bg-[#F4F7FB] hover:text-[#234BFF] font-semibold transition-all duration-300 ease-in-out
                  ${(!isScrolled || (isScrolled && isHovered)) ? 'px-6 py-3' : 'px-4 py-2 text-sm'}`}
                aria-expanded={exploreMenuOpen}
                aria-haspopup="true"
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
                <div 
                  className="absolute left-0 mt-2 w-48 rounded-lg shadow-lg bg-white border border-[#DEE4F1] focus:outline-none z-10 animate-fadeIn"
                  role="menu"
                  aria-orientation="vertical"
                >
                  <div className="py-1">
                    <Link 
                      href="https://language-key.vercel.app/home" 
                      className="block px-4 py-2 text-sm text-[#4A5768] hover:bg-[#F4F7FB] hover:text-[#234BFF] focus:bg-[#F4F7FB] focus:text-[#234BFF] focus:outline-none transition-colors"
                      onClick={() => setExploreMenuOpen(false)}
                      role="menuitem"
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
                className={`flex items-center rounded-full bg-[#F4F7FB] text-[#4A5768] hover:bg-[#DEE4F1] font-semibold transition-all duration-300 ease-in-out border border-[#E5E7EB]
                  ${(!isScrolled || (isScrolled && isHovered)) ? 'px-6 py-3' : 'px-4 py-2 text-sm'}`}
                aria-expanded={languageMenuOpen}
                aria-haspopup="true"
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
                <div 
                  className="absolute right-0 mt-2 w-64 rounded-lg shadow-lg bg-white border border-[#DEE4F1] focus:outline-none z-10 animate-fadeIn"
                  role="menu"
                  aria-orientation="vertical"
                >
                  <div className="py-1">
                    <div 
                      className="relative group block px-4 py-2 text-sm text-gray-400 cursor-not-allowed"
                      role="menuitem"
                    >
                      繁體中文 (Traditional Chinese)
                      <span className="absolute right-3 top-2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-xs rounded px-2 py-1">
                        Coming Soon
                      </span>
                    </div>
                    <div 
                      className="relative group block px-4 py-2 text-sm text-gray-400 cursor-not-allowed"
                      role="menuitem"
                    >
                      简体中文 (Simplified Chinese)
                      <span className="absolute right-3 top-2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-xs rounded px-2 py-1">
                        Coming Soon
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Call to Action Button */}
            <button 
              className={`bg-[#234BFF] hover:bg-[#1A38BF] text-white rounded-full font-medium flex items-center transition-all duration-300 ease-in-out
                ${(!isScrolled || (isScrolled && isHovered)) ? 'px-4 py-3 text-base' : 'px-3 py-2 text-sm'}`}
              onClick={handleEarlyAccessClick}
            >
              Secure Early Access
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
          <div className="md:hidden flex items-center space-x-2">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center w-10 h-10 text-[#273046]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle menu"
            >
              <span className="sr-only">Toggle menu</span>
              <svg 
                className={`w-6 h-6 transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45' : ''}`}
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v12M6 12h12" />
              </svg>
            </button>

            <button 
              className={`bg-[#234BFF] hover:bg-[#1A38BF] text-white rounded-full font-medium flex items-center transition-all duration-300 ease-in-out
                ${(!isScrolled || (isScrolled && isHovered)) ? 'px-3 py-2 text-sm' : 'px-3 py-2 text-xs'}`}
              onClick={handleEarlyAccessClick}
            >
              Secure Early Access
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-3 w-3 ml-1" 
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
        ref={mobileMenuRef}
        className={`md:hidden fixed left-0 right-0 z-40 bg-white/95 backdrop-blur-md shadow-lg border-t border-[#DEE4F1] transition-all duration-300 ease-in-out overflow-hidden
          ${mobileMenuOpen 
            ? 'max-h-[calc(100vh-5rem)] opacity-100' 
            : 'max-h-0 opacity-0'}
          ${(!isScrolled || (isScrolled && isHovered)) ? 'top-[5rem]' : 'top-[4rem]'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="bg-[#F8F9FA] rounded-2xl overflow-hidden">
            {/* Explore Section */}
            <div className="p-4 sm:p-6">
              <h2 className="text-[#4A5768] font-semibold mb-4 sm:mb-6">Explore</h2>
              <div className="space-y-2 sm:space-y-4">
                <Link 
                  href="https://language-key.vercel.app/home" 
                  className="flex items-center justify-between group p-3 sm:p-4 rounded-xl hover:bg-white transition-all duration-200"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-50 flex items-center justify-center">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4 sm:h-5 sm:w-5 text-[#234BFF]" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-[#273046] font-medium block text-sm sm:text-base">About Us</span>
                      <span className="text-xs sm:text-sm text-[#4A5768]">Learn more about FluentPro</span>
                    </div>
                  </div>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 sm:h-5 sm:w-5 text-[#4A5768] group-hover:text-[#234BFF] transition-colors" 
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
            <div className="p-4 sm:p-6 bg-white">
              <h2 className="text-[#4A5768] font-semibold mb-4 sm:mb-6">Select Language</h2>
              <div className="space-y-2">
                <Link 
                  href="/en" 
                  className="flex items-center justify-between p-3 sm:p-4 rounded-xl bg-blue-50 text-[#234BFF]"
                >
                  <div className="flex items-center space-x-3">
                    <span className="font-medium text-sm sm:text-base">English</span>
                    <span className="text-xs sm:text-sm px-2 py-1 bg-[#234BFF] text-white rounded-full">Active</span>
                  </div>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 sm:h-5 sm:w-5" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </Link>
                <div 
                  className="relative group flex items-center justify-between p-3 sm:p-4 rounded-xl text-gray-400 cursor-not-allowed"
                >
                  <div className="flex items-center space-x-3">
                    <span className="font-medium text-sm sm:text-base">繁體中文</span>
                    <span className="text-xs sm:text-sm">Traditional Chinese</span>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-500">Coming Soon</span>
                </div>
                <div 
                  className="relative group flex items-center justify-between p-3 sm:p-4 rounded-xl text-gray-400 cursor-not-allowed"
                >
                  <div className="flex items-center space-x-3">
                    <span className="font-medium text-sm sm:text-base">简体中文</span>
                    <span className="text-xs sm:text-sm">Simplified Chinese</span>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-500">Coming Soon</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default StickyNavbar;