import { 
  ForwardRefComponent,
  HTMLMotionProps 
} from 'framer-motion';

// Augment the framer-motion module with our custom interfaces
declare module 'framer-motion' {
  /**
   * Add missing properties to MotionProps interface
   */
  export interface MotionProps {
    className?: string;
    onClick?: React.MouseEventHandler<Element>;
    disabled?: boolean;
    'aria-label'?: string;
    ref?: React.Ref<Element> | ((instance: Element | null) => void);
    key?: React.Key;
    custom?: any;
    layoutId?: string;
    id?: string;
    style?: React.CSSProperties;
    tabIndex?: number;
    role?: string;
    onHoverStart?: () => void;
    onHoverEnd?: () => void;
    onTap?: () => void;
    onTapStart?: () => void;
    onTapCancel?: () => void;
    onPan?: () => void;
    onPanStart?: () => void;
    onPanEnd?: () => void;
    onPanSessionStart?: () => void;
    onDrag?: () => void;
    onDragStart?: () => void;
    onDragEnd?: () => void;
    onDragTransitionEnd?: () => void;
    onUpdate?: () => void;
    onAnimationStart?: () => void;
    onAnimationComplete?: () => void;
  }
} 