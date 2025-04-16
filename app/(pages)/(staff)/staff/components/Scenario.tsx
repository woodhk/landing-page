import React from 'react';
import { serviceCardsData } from '../data/scenario';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../../../../components/shared/card';
import { 
  Folder, 
  MessageSquare, 
  Users, 
  Globe, 
  Target, 
  Trophy,
  LucideIcon,
  ArrowUpRight
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  'Folder': Folder,
  'MessageSquare': MessageSquare,
  'Users': Users,
  'Globe': Globe,
  'Target': Target,
  'Trophy': Trophy
};

const Scenario = () => {
  return (
    <div className="w-full mt-16 py-16 md:py-24 bg-blue-950">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl lg:text-5xl font-semibold mb-16 text-center text-gray-100 leading-tight max-w-3xl mx-auto">
          Scenario Based Training Simulating Real Business Conversations
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {serviceCardsData.map((card, index) => {
            // Get icon component from our map
            const IconComponent = iconMap[card.icon];
            
            return (
              <Link 
                key={index}
                href={card.href}
                className="block cursor-pointer group"
              >
                <Card 
                  className="flex flex-col h-full bg-white/5 backdrop-blur-sm border-none rounded-3xl rounded-bl-none overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1"
                >
                  <CardHeader className="pb-0">
                    <div className="flex justify-between items-start">
                      <div className="p-2 rounded-full">
                        {IconComponent && <IconComponent className="h-6 w-6 text-white" strokeWidth={1.5} />}
                      </div>
                      <div className="p-2 rounded-full">
                        <ArrowUpRight className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-16 flex-grow">
                    <CardTitle className="text-xl font-bold text-white mb-3">
                      {card.title}
                    </CardTitle>
                    <CardDescription className="text-base text-blue-100 leading-relaxed">
                      {card.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Scenario;