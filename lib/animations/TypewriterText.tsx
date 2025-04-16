'use client';

import { useState, useEffect } from 'react';

// Custom hook for media queries that works with SSR
function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);
  
  useEffect(() => {
    // Only run on client side
    if (typeof window !== 'undefined') {
      const media = window.matchMedia(query);
      // Set initial value
      setMatches(media.matches);
      
      // Set up listener for changes
      const listener = () => setMatches(media.matches);
      media.addEventListener('change', listener);
      
      // Clean up
      return () => media.removeEventListener('change', listener);
    }
  }, [query]);
  
  return matches;
}

const phrases = [
  'Banking & Finance',
  'Shipping & Logistics',
  'Sales & Marketing',
  'Hospitality & Retail',
  'Telecommunications',
  'Insurance',
  'Real Estate',
  'Government',
  'Consulting',
];

export default function TypewriterText() {
  // Check if screen is at least medium size (md breakpoint in Tailwind)
  const isLargeScreen = useMediaQuery('(min-width: 768px)');
  
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    // Only run the animation on larger screens
    if (!isLargeScreen) return;
    
    const currentPhrase = phrases[phraseIndex];
    
    // Typing speed (in milliseconds)
    const typingSpeed = 100; // Speed for typing
    const deletingSpeed = 50; // Speed for deleting
    const pauseTime = 2000; // Time to pause when phrase is complete
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (text.length < currentPhrase.length) {
          setText(currentPhrase.slice(0, text.length + 1));
        } else {
          // Pause before starting to delete
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting
        if (text.length > 0) {
          setText(text.slice(0, text.length - 1));
        } else {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);
    
    return () => clearTimeout(timer);
  }, [text, phraseIndex, isDeleting, isLargeScreen]);
  
  // Find the longest phrase to use for the container width
  const longestPhrase = phrases.reduce((longest, current) => 
    current.length > longest.length ? current : longest, '');
  
  
  // For larger screens, show the typewriter animation
  return (
    <span className="text-dynamic-blue inline-block relative">
      {/* Invisible text with the longest phrase to maintain consistent width */}
      <span 
        className="invisible absolute" 
        aria-hidden="true"
      >
        {longestPhrase}
      </span>
      
      {/* Visible text that changes */}
      <span className="inline-block">
        {text}
      </span>
      
      {/* Cursor */}
      <span className="animate-pulse inline-block ml-1">|</span>
    </span>
  );
}