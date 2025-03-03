'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export const CreateAccount = () => {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  
  const [focusedField, setFocusedField] = useState<string | null>(null);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.4,
        staggerChildren: 0.1 
      } 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.3 } 
    },
  };
  
  const buttonVariants = {
    idle: { scale: 1 },
    hover: { scale: 1.02 },
    tap: { scale: 0.98 }
  };

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };
  
  return (
    <div className="w-full h-full flex items-center justify-center py-6">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-[80%] max-w-[360px] bg-white rounded-lg shadow-sm overflow-hidden"
      >
        {/* Form Header */}
        <div className="border-b border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-2.5">
          <motion.h2 
            variants={itemVariants}
            className="text-base font-semibold text-gray-800 text-center"
          >
            Create Your Account
          </motion.h2>
        </div>
        
        {/* Form Fields */}
        <div className="px-4 py-2.5">
          <form className="space-y-2">
            {/* Name Fields in one row */}
            <motion.div variants={itemVariants} className="flex space-x-2">
              <div className="flex-1">
                <label 
                  htmlFor="firstName" 
                  className="block text-[10px] font-medium text-gray-700 mb-0.5 text-left"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formState.firstName}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('firstName')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-2 py-1 border border-gray-300 rounded text-xs focus:outline-none ${focusedField === 'firstName' ? 'ring-1 ring-blue-200' : ''}`}
                  placeholder="John"
                />
              </div>
              
              <div className="flex-1">
                <label 
                  htmlFor="lastName" 
                  className="block text-[10px] font-medium text-gray-700 mb-0.5 text-left"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formState.lastName}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('lastName')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-2 py-1 border border-gray-300 rounded text-xs focus:outline-none ${focusedField === 'lastName' ? 'ring-1 ring-blue-200' : ''}`}
                  placeholder="Smith"
                />
              </div>
            </motion.div>
            
            {/* Email */}
            <motion.div variants={itemVariants}>
              <label 
                htmlFor="email" 
                className="block text-[10px] font-medium text-gray-700 mb-0.5 text-left"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleInputChange}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                className={`w-full px-2 py-1 border border-gray-300 rounded text-xs focus:outline-none ${focusedField === 'email' ? 'ring-1 ring-blue-200' : ''}`}
                placeholder="john.smith@company.com"
              />
            </motion.div>
            
            {/* Password */}
            <motion.div variants={itemVariants}>
              <div className="flex justify-between items-center mb-0.5">
                <label 
                  htmlFor="password" 
                  className="text-[10px] font-medium text-gray-700 text-left"
                >
                  Password
                </label>
                <span className="text-[9px] text-gray-500">Min. 8 characters</span>
              </div>
              <input
                type="password"
                id="password"
                name="password"
                value={formState.password}
                onChange={handleInputChange}
                onFocus={() => setFocusedField('password')}
                onBlur={() => setFocusedField(null)}
                className={`w-full px-2 py-1 border border-gray-300 rounded text-xs focus:outline-none ${focusedField === 'password' ? 'ring-1 ring-blue-200' : ''}`}
                placeholder="••••••••"
              />
            </motion.div>
            
            {/* Submit Button */}
            <motion.div variants={itemVariants} className="pt-0.5">
              <motion.button
                type="button"
                variants={buttonVariants}
                initial="idle"
                whileHover="hover"
                whileTap="tap"
                className="w-full py-1 px-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded text-xs transition-colors"
              >
                Create Account
              </motion.button>
            </motion.div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}; 