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
  ArrowUpRight,
  Crosshair
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  'Folder': Folder,
  'MessageSquare': MessageSquare,
  'Users': Users,
  'Globe': Globe,
  'Crosshair': Crosshair,
  'Trophy': Trophy
};

// Define color classes for each icon
const iconColors: Record<string, string> = {
  'Folder': 'text-emerald-400',
  'MessageSquare': 'text-sky-400',
  'Users': 'text-amber-400',
  'Globe': 'text-violet-400',
  'Crosshair': 'text-rose-400',
  'Trophy': 'text-indigo-400'
};

const Scenario = () => {
  return (
    <div className="w-full bg-white mt-32 mb-64">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-center text-dark leading-tight max-w-5xl mx-auto">
          Practice, Learn, Improve, Repeat
        </h1>
        <h2 className="text-center text-2xl md:text-3xl lg:text-2xl mb-16 text-gray-500 leading-tight max-w-5xl mx-auto">Combining language experts and AI to advance your colleagues' workplace interactions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {serviceCardsData.map((card, index) => {
            // Get icon component from our map
            const IconComponent = iconMap[card.icon];
            // Get color for this icon
            const iconColor = iconColors[card.icon] || 'text-dark';
            
            return (
              <Link 
                key={index}
                href={card.href}
                className="block cursor-pointer group"
              >
                <Card 
                  className="flex flex-col h-full bg-light-3/5 backdrop-blur-sm border-none rounded-3xl rounded-bl-none overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1"
                >
                  <CardHeader className="pb-0">
                    <div className="flex justify-between items-start">
                      <div className="p-2 rounded-full">
                        {IconComponent && <IconComponent className={`h-6 w-6 ${iconColor}`} strokeWidth={1.5} />}
                      </div>
                      <div className="p-2 rounded-full">
                        <ArrowUpRight className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-16 flex-grow">
                    <CardTitle className="text-xl font-bold text-gray-700 mb-3">
                      {card.title}
                    </CardTitle>
                    <CardDescription className="text-base text-gray-600 leading-relaxed">
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