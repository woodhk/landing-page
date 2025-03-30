import { useState, useEffect, useRef } from 'react';

interface UseNavbarReturn {
  isScrolled: boolean;
  isHovered: boolean;
  mobileMenuOpen: boolean;
  navbarRef: React.RefObject<HTMLDivElement>;
  mobileMenuRef: React.RefObject<HTMLDivElement>;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
  setMobileMenuOpen: (value: boolean) => void;
  handleEarlyAccessClick: () => void;
}

export const useNavbar = (): UseNavbarReturn => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleEarlyAccessClick = () => {
    window.open("https://forms.gle/tLkLiSziGZZDjLpJA", "_blank");
  };

  return {
    isScrolled,
    isHovered,
    mobileMenuOpen,
    navbarRef,
    mobileMenuRef,
    handleMouseEnter,
    handleMouseLeave,
    setMobileMenuOpen,
    handleEarlyAccessClick,
  };
}; 