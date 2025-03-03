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
  
  return (
    <span className="text-dynamic-blue inline-block w-full sm:inline-flex sm:items-center">
      <span className="text-left break-words">{text}</span>
      <span className="animate-pulse ml-1 relative" style={{ top: '-0.05em' }}>|</span>
    </span>
  );
} 