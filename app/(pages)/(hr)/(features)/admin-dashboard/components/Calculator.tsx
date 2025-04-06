'use client';

import React, { useState, useEffect } from 'react';
import { calculateCommunicationLoss, formatCurrency } from '../../../../../../lib/calculation';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, AlertTriangle, Info, ArrowRight, Download } from 'lucide-react';

const Calculator = () => {
  // State management
  const [employees, setEmployees] = useState<string>('100');
  const [calculatedLoss, setCalculatedLoss] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [hasInteracted, setHasInteracted] = useState<boolean>(false);
  
  // Validate input and update state
  const handleEmployeeChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setEmployees(value);
    setError('');
    setHasInteracted(true);
  };

  // Handle calculation
  const handleCalculate = (): void => {
    const value = employees.trim();
    
    // Input validation
    if (value === '') {
      setError('Please enter the number of employees.');
      return;
    }
    
    const parsedValue = parseInt(value, 10);
    if (isNaN(parsedValue)) {
      setError('Please enter a valid number.');
      return;
    }
    
    if (parsedValue < 0) {
      setError('Number of employees cannot be negative.');
      return;
    }
    
    // Start calculation with loading state
    setIsLoading(true);
    setCalculatedLoss(null);
    
    // Simulate calculation delay
    setTimeout(() => {
      const result = calculateCommunicationLoss(parsedValue);
      setCalculatedLoss(result);
      setIsLoading(false);
    }, 800);
  };

  // Format large numbers with commas
  const formatNumber = (num: number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  
  // Key press handler for input field
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCalculate();
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 sm:p-8">
      <motion.div 
        className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-8 border-b border-gray-100">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 flex items-center gap-3">
                <TrendingUp className="h-8 w-8 text-blue-600" />
                Communication Loss Calculator
              </h1>
              <p className="text-base sm:text-lg text-gray-600 mt-2 max-w-2xl">
                Based on global research, miscommunication and language barriers cost companies an average of 
                <span className="font-semibold text-blue-700"> $12,500 </span> 
                per employee per year.
              </p>
            </div>
            <a 
              href="/MiscommunicationResearch.pdf" 
              className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg text-blue-600 hover:text-blue-800 font-medium hover:bg-blue-50 transition-colors border border-blue-100 shadow-sm" 
              download
            >
              <Download className="h-4 w-4" />
              Download full report
            </a>
          </div>
        </div>
        
        <div className="px-6 py-8">
          <div className="max-w-xl mx-auto">
            <div className="mb-6">
              <label htmlFor="employees" className="block text-lg font-medium text-gray-700 mb-3 flex items-center gap-2">
                <Info className="h-5 w-5 text-blue-500" />
                How many employees does your company have?
              </label>
              
              <div className="relative">
                <input
                  type="number"
                  id="employees"
                  value={employees}
                  onChange={handleEmployeeChange}
                  onKeyPress={handleKeyPress}
                  className="w-full p-4 text-center text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition-all duration-200"
                  min="0"
                  step="1"
                  aria-label="Number of employees"
                  placeholder="Enter number of employees"
                />
                
                <AnimatePresence>
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="absolute text-red-500 text-sm mt-2 left-0 right-0 flex items-center gap-1"
                    >
                      <AlertTriangle className="h-4 w-4" />
                      {error}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            
            <motion.button
              onClick={handleCalculate}
              disabled={isLoading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 px-6 bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium rounded-lg transition duration-200 shadow-md hover:shadow-lg disabled:opacity-70 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Calculating...
                </div>
              ) : (
                <>
                  Calculate Impact
                  <ArrowRight className="h-5 w-5" />
                </>
              )}
            </motion.button>
            
            <AnimatePresence>
              {calculatedLoss !== null && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ type: 'spring', duration: 0.5 }}
                  className="mt-8 overflow-hidden"
                >
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 p-6">
                    <p className="text-xl text-gray-700 mb-1">Estimated Annual Productivity Loss:</p>
                    <div className="flex flex-col sm:flex-row sm:items-end gap-2 mb-2">
                      <motion.p 
                        className="text-5xl font-bold text-red-500"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', duration: 0.5 }}
                      >
                        {formatCurrency(calculatedLoss)}
                      </motion.p>
                      <p className="text-lg text-gray-600">per year</p>
                    </div>
                    <div className="mt-4 p-4 bg-white rounded-lg border border-gray-200">
                      <div className="flex flex-col sm:flex-row gap-4 justify-between">
                        <div className="flex flex-col">
                          <span className="text-sm text-gray-500">Employees</span>
                          <span className="text-xl font-semibold">{formatNumber(parseInt(employees))}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm text-gray-500">Cost per employee</span>
                          <span className="text-xl font-semibold">$12,500</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm text-gray-500">Monthly loss</span>
                          <span className="text-xl font-semibold">{formatCurrency(calculatedLoss / 12)}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-4 italic">*These are rough estimations, figures may vary depending on your specific company</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            {!calculatedLoss && hasInteracted && (
              <p className="text-xs text-gray-500 mt-4 text-center italic">
                *These are rough estimations, figures may vary depending on your specific company
              </p>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Calculator;