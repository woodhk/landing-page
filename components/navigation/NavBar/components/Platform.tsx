"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger 
} from '@/components/shared/navigation-menu';
import { platformMenu } from '../data/platform';
import { cn } from '@/lib/utils';
import { ChevronRight, BookOpen, Globe, Users, GanttChart, Brain, Lock } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/shared/hover-card';

export const Platform = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavigationMenu onMouseLeave={() => setIsOpen(false)}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger 
            className="text-sm font-medium"
            onClick={() => setIsOpen(true)}
            onMouseEnter={() => setIsOpen(true)}
          >
            {platformMenu.title}
          </NavigationMenuTrigger>
          {isOpen && (
            <NavigationMenuContent 
              className="bg-white rounded-lg shadow-md border border-gray-100 w-auto left-0 origin-top-left"
              onMouseEnter={() => setIsOpen(true)}
            >
              <div className="flex py-6 px-6">
                {/* All Features sidebar */}
                <div className="w-[160px] pr-4 border-r border-gray-100 mr-6">
                  <NavigationMenuLink asChild>
                    <Link 
                      href={platformMenu.allFeatures.href}
                      className="flex items-center gap-2 mb-2 p-2 rounded-md bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center justify-center w-8 h-8 rounded-md bg-blue-50">
                        <BookOpen className="h-5 w-5 text-[#234BFF]" />
                      </div>
                      <span className="font-medium flex-1">Features</span>
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    </Link>
                  </NavigationMenuLink>
                </div>

                {/* Main section - 2 columns */}
                <div className="flex flex-col">
                  <div className="flex space-x-10 mb-10">
                    {/* Left Column - Interactive Learning and HR/L&D Solutions */}
                    <div className="w-[280px]">
                      {/* Interactive Learning */}
                      <div className="mb-8">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex items-center justify-center w-8 h-8 rounded-md bg-blue-50">
                            <BookOpen className="h-5 w-5 text-[#234BFF]" />
                          </div>
                          <h3 className="font-medium">Interactive Learning</h3>
                        </div>
                        <ul className="space-y-2">
                          {platformMenu.categories[0].items.map((item, i) => (
                            <li key={i}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={item.href}
                                  className="text-sm text-gray-600 hover:text-gray-900"
                                >
                                  {item.title}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* HR/L&D Solutions */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex items-center justify-center w-8 h-8 rounded-md bg-blue-50">
                            <GanttChart className="h-5 w-5 text-[#234BFF]" />
                          </div>
                          <h3 className="font-medium">HR/L&D Solutions</h3>
                        </div>
                        <ul className="space-y-2">
                          {platformMenu.categories[2].items.map((item, i) => (
                            <li key={i}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={item.href}
                                  className="text-sm text-gray-600 hover:text-gray-900"
                                >
                                  {item.title}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right Column - Localization, AI-Powered Assessments, Staff Engagement */}
                    <div className="w-[280px]">
                      {/* Localization */}
                      <div className="mb-8">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex items-center justify-center w-8 h-8 rounded-md bg-blue-50">
                            <Globe className="h-5 w-5 text-[#234BFF]" />
                          </div>
                          <h3 className="font-medium">Localization</h3>
                        </div>
                        <ul className="space-y-2">
                          {platformMenu.categories[1].items.map((item, i) => (
                            <li key={i}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={item.href}
                                  className="text-sm text-gray-600 hover:text-gray-900"
                                >
                                  {item.title}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* AI-Powered Assessments */}
                      <div className="mb-8">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex items-center justify-center w-8 h-8 rounded-md bg-blue-50">
                            <Brain className="h-5 w-5 text-[#234BFF]" />
                          </div>
                          <h3 className="font-medium">AI-Powered Assessments</h3>
                        </div>
                        <ul className="space-y-2">
                          {platformMenu.categories[4].items.map((item, i) => (
                            <li key={i}>
                              {item.title === "Business English Recruitment Test" || item.title === "Benchmark/Recruitment Test" ? (
                                <HoverCard>
                                  <HoverCardTrigger asChild>
                                    <div className="flex items-center text-sm text-gray-400 cursor-not-allowed">
                                      {item.title}
                                      <Lock className="h-3.5 w-3.5 ml-1.5 text-gray-400" />
                                    </div>
                                  </HoverCardTrigger>
                                  <HoverCardContent className="p-2 bg-white shadow-md rounded-md border border-gray-100">
                                    <p className="text-xs text-gray-600">Coming soon</p>
                                  </HoverCardContent>
                                </HoverCard>
                              ) : (
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={item.href}
                                    className="text-sm text-gray-600 hover:text-gray-900"
                                  >
                                    {item.title}
                                  </Link>
                                </NavigationMenuLink>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Staff Engagement */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex items-center justify-center w-8 h-8 rounded-md bg-blue-50">
                            <Users className="h-5 w-5 text-[#234BFF]" />
                          </div>
                          <h3 className="font-medium">Staff Engagement</h3>
                        </div>
                        <ul className="space-y-2">
                          {platformMenu.categories[3].items.map((item, i) => (
                            <li key={i}>
                              <HoverCard>
                                <HoverCardTrigger asChild>
                                  <div className="flex items-center text-sm text-gray-400 cursor-not-allowed">
                                    {item.title}
                                    <Lock className="h-3.5 w-3.5 ml-1.5 text-gray-400" />
                                  </div>
                                </HoverCardTrigger>
                                <HoverCardContent className="p-2 bg-white shadow-md rounded-md border border-gray-100">
                                  <p className="text-xs text-gray-600">Coming soon</p>
                                </HoverCardContent>
                              </HoverCard>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Feature cards on the right */}
                <div className="pl-6 ml-6 border-l border-gray-100">
                  <div className="space-y-18">
                    {platformMenu.featureCards.map((card, index) => (
                      <NavigationMenuLink asChild key={index}>
                        <Link href={card.href}>
                          <div className="w-[240px] bg-gray-50 rounded-lg p-4 relative">
                            <div className="mb-2">
                              <h3 className="font-medium flex items-center">
                                {card.title} 
                                <ChevronRight className="h-4 w-4 ml-1" />
                              </h3>
                              <p className="text-sm text-gray-600">{card.description}</p>
                            </div>
                            <div className="w-full h-[160px] flex items-center justify-center">
                              <Image
                                src={card.image}
                                alt={card.title}
                                width={180}
                                height={135}
                                className="object-contain"
                              />
                            </div>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA button at the bottom */}
              <div className="px-6 py-4 border-t border-gray-100 flex justify-end">
                <NavigationMenuLink asChild>
                  <Link 
                    href={platformMenu.cta.href}
                    target="_blank"
                    className="flex items-center text-sm text-blue-600 font-medium hover:text-blue-800 transition-colors"
                  >
                    {platformMenu.cta.title} <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          )}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Platform;
