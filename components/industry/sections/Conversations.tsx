import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { ConversationsSection, ConversationCard } from '../types';

interface ConversationsProps {
  data: ConversationsSection;
}

const CardComponent: React.FC<{ card: ConversationCard }> = ({ card }) => {
  // Determine the correct button text based on the link
  const getButtonText = (link: string) => {
    if (link.includes('role-plays')) return 'Learn more';
    if (link.includes('coaches')) return 'Learn more';
    if (link.includes('language-drills')) return 'Learn more';
    return 'Learn more';
  };

  return (
    <div className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden h-full flex flex-col hover:shadow-xl">
      <div className="relative h-60 w-full">
        <Image 
          src={card.imageUrl} 
          alt={card.title}
          fill
          style={{ objectFit: 'cover' }}
        />
        {/* Tag positioned absolutely over the image in the top left corner */}
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-block bg-gray-700 rounded-md px-3 py-1 text-sm font-medium text-light-3">
            {card.tag}
          </span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-3">{card.title}</h3>
        <p className="text-gray-700 mb-4">{card.description}</p>
        <div className="mt-auto">
          <Link 
            href={card.learnMoreLink}
            className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
          >
            {getButtonText(card.learnMoreLink)}
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export const Conversations: React.FC<ConversationsProps> = ({ data }) => {
  const { mainTitle, subtitle, rolePlaysCard, coachingCard, exercisesCard } = data;

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-6xl font-bold mb-6">
            {mainTitle}
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Role Plays Card */}
          <div>
            <CardComponent card={rolePlaysCard} />
          </div>
          
          {/* Coaching Card */}
          <div>
            <CardComponent card={coachingCard} />
          </div>
          
          {/* Exercises Card */}
          <div>
            <CardComponent card={exercisesCard} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conversations;