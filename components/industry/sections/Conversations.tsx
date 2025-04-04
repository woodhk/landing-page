import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ConversationsSection, ConversationCard } from '../types';

interface ConversationsProps {
  data: ConversationsSection;
}

const CardComponent: React.FC<{ card: ConversationCard }> = ({ card }) => {
  // Determine the correct button text based on the link
  const getButtonText = (link: string) => {
    if (link.includes('role-plays')) return 'Learn more about role-plays';
    if (link.includes('coaches')) return 'Learn more about our four coaches';
    if (link.includes('language-drills')) return 'Learn more about our language drills';
    return 'Learn more';
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden h-full flex flex-col">
      <div className="relative h-40 w-full">
        <Image 
          src={card.imageUrl} 
          alt={card.title}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <span className="inline-block bg-gray-200 rounded-md px-3 py-1 text-sm font-medium text-gray-700 mb-3">
          {card.tag}
        </span>
        <h3 className="text-xl font-bold mb-3">{card.title}</h3>
        <p className="text-gray-700 mb-4">{card.description}</p>
        <div className="mt-auto">
          <Link 
            href={card.learnMoreLink}
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-200 px-4 text-sm font-medium transition-colors hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
          >
            {getButtonText(card.learnMoreLink)}
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {mainTitle}
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
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