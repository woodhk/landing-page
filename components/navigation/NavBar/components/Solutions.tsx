"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuList, 
  NavigationMenuTrigger, 
  NavigationMenuLink
} from '@/components/shared/navigation-menu';
import { solutionsMenu } from '../data/solutions';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/shared/hover-card';

// Define a wider range of color schemes for cards
const cardColorSchemes = [
  { bg: "bg-blue-50", icon: "text-blue-500" },
  { bg: "bg-emerald-50", icon: "text-emerald-500" },
  { bg: "bg-amber-50", icon: "text-amber-500" },
  { bg: "bg-rose-50", icon: "text-rose-500" },
  { bg: "bg-purple-50", icon: "text-purple-500" },
  { bg: "bg-cyan-50", icon: "text-cyan-500" },
  { bg: "bg-indigo-50", icon: "text-indigo-500" },
  { bg: "bg-orange-50", icon: "text-orange-500" },
  { bg: "bg-teal-50", icon: "text-teal-500" }
];

export const Solutions = () => {
  const [activeTab, setActiveTab] = useState<string>("Industry");

  // Handle which array of items to display based on activeTab
  const items = activeTab === "Industry" ? solutionsMenu.industry : solutionsMenu.crossIndustry;
  
  // Group items into rows of 3
  const groupedItems = items.reduce((resultArray, item, index) => { 
    const chunkIndex = Math.floor(index / 3);
    
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }
    
    resultArray[chunkIndex].push(item);
    return resultArray;
  }, [] as typeof items[]);

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-sm font-medium">
            {solutionsMenu.title}
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-white rounded-lg shadow-md border border-gray-100 w-auto left-0 origin-top-left">
            <div className="flex h-[500px] max-h-[calc(100vh-100px)]">
              {/* Left sidebar with Industry/Cross-Industry tabs */}
              <div className="w-[180px] p-4 pr-4 border-r border-gray-100">
                {solutionsMenu.tabs.map((tab, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTab(tab.title)}
                    className={cn(
                      "flex items-center gap-2 p-2 rounded-md w-full text-left mb-2 last:mb-0",
                      activeTab === tab.title 
                        ? "bg-blue-50" 
                        : "hover:bg-gray-50"
                    )}
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-md bg-blue-50">
                      {React.createElement(tab.icon, { 
                        className: "h-5 w-5 text-[#234BFF]" 
                      })}
                    </div>
                    <span className="font-medium">{tab.title}</span>
                    <ChevronRight className="h-4 w-4 ml-auto text-gray-400" />
                  </button>
                ))}
              </div>

              {/* Main content area with cards */}
              <div className="flex-1 p-4 overflow-y-auto">
                {/* Cards grid */}
                <div className="flex flex-col space-y-6 w-[850px]">
                  {groupedItems.map((row, rowIndex) => (
                    <div key={rowIndex} className="flex space-x-6">
                      {row.map((item, i) => {
                        // Calculate unique index for this item across all rows
                        const itemIndex = rowIndex * 3 + i;
                        // Select a unique color scheme based on the item's position in the overall array
                        const colorScheme = cardColorSchemes[itemIndex % cardColorSchemes.length];
                        
                        return (
                          <NavigationMenuLink asChild key={i}>
                            <Link 
                              href={item.href} 
                              className="block w-[260px]"
                            >
                              <div className="rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-shadow hover:shadow-md h-full">
                                {/* Colored header with icon */}
                                <div className={`${colorScheme.bg} p-4 rounded-t-lg relative h-12`}>
                                  <div className="absolute -bottom-5 left-4 bg-white p-2 rounded-lg shadow-sm border border-gray-100">
                                    {React.createElement(item.icon, { 
                                      className: `h-6 w-6 ${colorScheme.icon}` 
                                    })}
                                  </div>
                                </div>
                                
                                {/* Content area */}
                                <div className="p-4 pt-8 bg-white">
                                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                                  <p className="text-sm text-gray-600">{item.description}</p>
                                </div>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        );
                      })}
                      
                      {/* Add empty placeholders if row is not complete */}
                      {Array(3 - row.length).fill(0).map((_, i) => (
                        <div key={i} className="w-[260px]"></div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-5 border-t border-gray-100 flex justify-between items-center bg-white z-10">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <button className="flex items-center text-sm text-gray-600 hover:text-gray-900">
                    <solutionsMenu.requestIndustry.icon className="h-4 w-4 mr-2" />
                    {solutionsMenu.requestIndustry.title}
                  </button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 bg-white p-4 shadow-lg rounded-lg border border-gray-100">
                  <p className="text-sm text-gray-600">
                    {solutionsMenu.requestIndustry.description}
                  </p>
                </HoverCardContent>
              </HoverCard>

              <NavigationMenuLink asChild>
                <Link 
                  href={solutionsMenu.cta.href}
                  target="_blank"
                  className="flex items-center text-sm text-blue-600 font-medium hover:text-blue-800 transition-colors"
                >
                  {solutionsMenu.cta.title} <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Solutions;
