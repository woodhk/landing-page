import {
  ForwardRefComponent,
  HTMLMotionProps as FramerHTMLMotionProps,
  SVGMotionProps,
  motion as FramerMotion
} from 'framer-motion';

// Extend the HTMLMotionProps to include all the attributes we need
declare module 'framer-motion' {
  // Add missing props that TypeScript is complaining about
  interface MotionProps {
    className?: string;
    onClick?: React.MouseEventHandler<any>;
    disabled?: boolean;
    'aria-label'?: string;
    children?: React.ReactNode;
    key?: React.Key;
    custom?: any;
    layoutId?: string;
    ref?: React.Ref<any> | ((instance: any) => void);
  }
  
  // Extend the existing motion object with our properties
  interface Motion {
    div: ForwardRefComponent<HTMLDivElement, FramerHTMLMotionProps<"div">>;
    button: ForwardRefComponent<HTMLButtonElement, FramerHTMLMotionProps<"button">>;
    span: ForwardRefComponent<HTMLSpanElement, FramerHTMLMotionProps<"span">>;
    ul: ForwardRefComponent<HTMLUListElement, FramerHTMLMotionProps<"ul">>;
    li: ForwardRefComponent<HTMLLIElement, FramerHTMLMotionProps<"li">>;
    p: ForwardRefComponent<HTMLParagraphElement, FramerHTMLMotionProps<"p">>;
    a: ForwardRefComponent<HTMLAnchorElement, FramerHTMLMotionProps<"a">>;
  }
} 