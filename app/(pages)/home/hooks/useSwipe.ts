import { useState } from 'react';
import { PanInfo } from 'framer-motion';

interface SwipeHandlers {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
}

interface SwipeProps {
  handleDragEnd: (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => void;
  handleDragStart: () => void;
  dragProps: {
    drag: 'x';
    dragConstraints: { left: 0; right: 0 };
    dragElastic: number;
  };
}

/**
 * Custom hook for handling swipe gestures
 * @param handlers - Object containing onSwipeLeft and onSwipeRight callbacks
 * @param threshold - Minimum distance required for a swipe to be detected (in pixels)
 * @returns Object containing drag handlers and props for Framer Motion
 */
export function useSwipe(
  handlers: SwipeHandlers,
  threshold: number = 50
): SwipeProps {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    setIsDragging(false);
    
    // Detect horizontal swipe based on drag distance
    if (Math.abs(info.offset.x) > threshold) {
      if (info.offset.x > 0 && handlers.onSwipeRight) {
        handlers.onSwipeRight();
      } else if (info.offset.x < 0 && handlers.onSwipeLeft) {
        handlers.onSwipeLeft();
      }
    }
  };

  return {
    handleDragEnd,
    handleDragStart,
    dragProps: {
      drag: 'x',
      dragConstraints: { left: 0, right: 0 },
      dragElastic: 0.2,
    },
  };
}

export default useSwipe; 