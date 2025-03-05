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