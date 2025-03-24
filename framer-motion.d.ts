import 'framer-motion';
import { HTMLMotionProps } from 'framer-motion';

declare module 'framer-motion' {
  // Extend the MotionProps interface to include HTML attributes
  export interface MotionProps {
    className?: string;
    onClick?: React.MouseEventHandler;
    disabled?: boolean;
    'aria-label'?: string;
    layoutId?: string;
    key?: React.Key;
    style?: React.CSSProperties;
    ref?: React.Ref<any>;
  }

  // Define properly typed motion components
  type HTMLAttrs<T> = React.DetailedHTMLProps<React.HTMLAttributes<T>, T>;
  
  // Make sure motion interface properly extends HTML elements
  export interface Motion {
    div: ForwardRefComponent<HTMLDivElement, HTMLMotionProps<"div">>;
    button: ForwardRefComponent<HTMLButtonElement, HTMLMotionProps<"button">>;
    span: ForwardRefComponent<HTMLSpanElement, HTMLMotionProps<"span">>;
    p: ForwardRefComponent<HTMLParagraphElement, HTMLMotionProps<"p">>;
    a: ForwardRefComponent<HTMLAnchorElement, HTMLMotionProps<"a">>;
    ul: ForwardRefComponent<HTMLUListElement, HTMLMotionProps<"ul">>;
    li: ForwardRefComponent<HTMLLIElement, HTMLMotionProps<"li">>;
    // Add other HTML elements as needed
  }
} 