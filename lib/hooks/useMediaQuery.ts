import { useState, useEffect } from 'react';

/**
 * Custom hook for responsive design that detects if a media query matches
 * @param query - The media query to check
 * @returns boolean indicating if the media query matches
 */
export function useMediaQuery(query: string): boolean {
  // Initialize with the match state on client side, or false on server side
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    // Check if window is available (client-side)
    if (typeof window !== 'undefined') {
      const media = window.matchMedia(query);
      
      // Set the initial value
      setMatches(media.matches);

      // Define a callback function to handle changes
      const listener = (event: MediaQueryListEvent) => {
        setMatches(event.matches);
      };

      // Add the callback as a listener for changes to the media query
      media.addEventListener('change', listener);

      // Clean up function to remove the listener when the component unmounts
      return () => {
        media.removeEventListener('change', listener);
      };
    }
  }, [query]); // Re-run effect if query changes

  return matches;
}

// Predefined breakpoints that match Tailwind CSS defaults
export const breakpoints = {
  sm: '(min-width: 640px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 1024px)',
  xl: '(min-width: 1280px)',
  '2xl': '(min-width: 1536px)',
  // Add mobile-first breakpoints
  mobile: '(max-width: 639px)',
  tablet: '(min-width: 640px) and (max-width: 1023px)',
  desktop: '(min-width: 1024px)',
  // Add orientation breakpoints
  portrait: '(orientation: portrait)',
  landscape: '(orientation: landscape)',
  // Add reduced motion preference
  prefersReducedMotion: '(prefers-reduced-motion: reduce)',
};

export default useMediaQuery; 