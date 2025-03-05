'use client';

import { useState, useEffect } from 'react';

const phrases = [
  'Human Resources',
  'Learning & Development',
  'Department Heads',
  'Training Managers'
];

export default function TypewriterText() {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
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
  }, [text, phraseIndex, isDeleting]);
  
  // Find the longest phrase to use for the container width
  const longestPhrase = phrases.reduce((longest, current) => 
    current.length > longest.length ? current : longest, '');
  
  return (
    <div 
      className="text-dynamic-blue inline-block relative" 
      style={{ 
        // Set a fixed height that can accommodate multiple lines on mobile
        minHeight: '4.5em', // Increased height for mobile
        // Ensure the container has proper width
        minWidth: '4em',
        // Ensure consistent display
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'flex-start'
      }}
    >
      {/* Container for all text content with fixed dimensions */}
      <div className="relative w-full h-full flex items-center">
        {/* Invisible text with the longest phrase to maintain consistent width */}
        <div 
          className="invisible absolute opacity-0 whitespace-pre-wrap" 
          aria-hidden="true"
        >
          {longestPhrase}
        </div>
        
        {/* Visible text that changes - positioned absolutely to prevent layout shifts */}
        <div className="flex items-center">
          <span className="whitespace-pre-wrap">
            {text}
          </span>
          
          {/* Cursor */}
          <span className="animate-pulse ml-1">|</span>
        </div>
      </div>
    </div>
  );
}