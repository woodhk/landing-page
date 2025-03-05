import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import useReducedMotion from '../hooks/useReducedMotion';

interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
  initiallyOpen?: boolean;
  className?: string;
}

const Collapsible: React.FC<CollapsibleProps> = ({
  title,
  children,
  initiallyOpen = false,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(initiallyOpen);
  const prefersReducedMotion = useReducedMotion();

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const contentVariants = {
    hidden: { 
      height: 0,
      opacity: 0,
      transition: { 
        duration: prefersReducedMotion ? 0 : 0.2,
        ease: 'easeInOut'
      }
    },
    visible: { 
      height: 'auto',
      opacity: 1,
      transition: { 
        duration: prefersReducedMotion ? 0 : 0.3,
        ease: 'easeInOut'
      }
    }
  };

  return (
    <div className={`border border-gray-200 rounded-lg overflow-hidden bg-white ${className}`}>
      <button
        onClick={toggleOpen}
        className="w-full p-4 flex justify-between items-center bg-blue-50 bg-opacity-30 hover:bg-blue-50 transition-colors"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <div className="text-gray-500">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="overflow-hidden"
          >
            <div className="p-4">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Collapsible; 