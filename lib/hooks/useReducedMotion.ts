import { useEffect, useState } from 'react';

/**
 * Custom hook to detect if the user prefers reduced motion
 * @returns boolean indicating if reduced motion is preferred
 */
export function useReducedMotion(): boolean {
  // Default to false to ensure animations play by default
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check if window is available (client-side)
    if (typeof window !== 'undefined') {
      // Check if the browser supports the matchMedia API
      if (window.matchMedia) {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        
        // Set the initial value
        setPrefersReducedMotion(mediaQuery.matches);

        // Define a callback function to handle changes
        const listener = (event: MediaQueryListEvent) => {
          setPrefersReducedMotion(event.matches);
        };

        // Add the callback as a listener for changes to the media query
        mediaQuery.addEventListener('change', listener);

        // Clean up function to remove the listener when the component unmounts
        return () => {
          mediaQuery.removeEventListener('change', listener);
        };
      }
    }
  }, []);

  return prefersReducedMotion;
}

/**
 * Returns appropriate animation settings based on reduced motion preference
 * @param fullMotion - Animation settings for full motion
 * @param reducedMotion - Animation settings for reduced motion
 * @returns The appropriate animation settings based on user preference
 */
export function getMotionProps<T>(fullMotion: T, reducedMotion: T): T {
  const prefersReducedMotion = useReducedMotion();
  return prefersReducedMotion ? reducedMotion : fullMotion;
}

export default useReducedMotion; 