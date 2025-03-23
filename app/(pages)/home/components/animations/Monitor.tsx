'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export const Monitor = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.3,
        delay: i * 0.1
      } 
    }),
  };

  // Performance data
  const performanceData = [
    { id: 1, name: 'Emma W.', score: 95, trend: 'up' },
    { id: 2, name: 'Michael C.', score: 82, trend: 'up' },
    { id: 3, name: 'Sarah J.', score: 76, trend: 'down' },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-[90%] max-w-[400px] bg-white rounded-lg shadow-sm border border-gray-100"
      >
        {/* Compact Header */}
        <div className="flex justify-between items-center px-3 py-2 border-b border-gray-100">
          <h2 className="text-sm font-semibold text-gray-900">Team Performance</h2>
          <div className="text-xs text-gray-500">Last updated: Today</div>
        </div>
        
        {/* Compact Stats Row */}
        <div className="flex justify-between px-3 py-2 text-xs">
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
            <span className="text-gray-600">Avg: </span>
            <span className="font-medium ml-1">84%</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-blue-500 mr-1"></div>
            <span className="text-gray-600">Active: </span>
            <span className="font-medium ml-1">24</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-purple-500 mr-1"></div>
            <span className="text-gray-600">Completion: </span>
            <span className="font-medium ml-1">81%</span>
          </div>
        </div>
        
        {/* Team Performance List - Very Compact */}
        <div className="px-3 py-2">
          {performanceData.map((user, index) => (
            <motion.div 
              key={user.id}
              custom={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="flex items-center justify-between py-1.5 border-b border-gray-50 last:border-0"
            >
              <div className="flex items-center">
                <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-medium text-gray-700 mr-2">
                  {user.id}
                </div>
                <span className="text-xs font-medium text-gray-800">{user.name}</span>
              </div>
              <div className="flex items-center">
                <div className="w-16 h-1.5 bg-gray-100 rounded-full mr-1.5 overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${
                      user.score >= 90 ? 'bg-green-500' : 
                      user.score >= 80 ? 'bg-blue-500' : 
                      'bg-yellow-500'
                    }`}
                    style={{ width: `${user.score}%` }}
                  ></div>
                </div>
                <span className={`text-xs font-medium ${
                  user.score >= 90 ? 'text-green-600' : 
                  user.score >= 80 ? 'text-blue-600' : 
                  'text-yellow-600'
                }`}>
                  {user.score}%
                </span>
                <span className="text-xs ml-0.5">
                  {user.trend === 'up' ? (
                    <span className="text-green-500">↑</span>
                  ) : (
                    <span className="text-red-500">↓</span>
                  )}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};