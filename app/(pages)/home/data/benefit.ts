export interface BenefitCard {
  id: number;
  title: string;
  description: string;
  tag: string;
  imageSrc: string;
  imageAlt: string;
}

export const benefitCards: BenefitCard[] = [
  {
    id: 1,
    title: 'Scenario-Based Training for Real-World Application',
    description: 'Our AI recreates staff\'s actual workplace challenges. Practice handling angry customers in retail simulations, technical support ticket role-plays, or high stake client negotiations.',
    tag: 'Tailored for Any Role',
    imageSrc: '/api/placeholder/400/300',
    imageAlt: 'Placeholder Image',
  },
  {
    id: 2,
    title: 'Practice With Confidence, Improve Every Response',
    description: 'Staff get instant, personalized feedback on their speaking skills as they practice. The AI guides them through each conversation, helping them learn from every interaction.',
    tag: 'Real-time Coaching',
    imageSrc: '/api/placeholder/400/300',
    imageAlt: 'Placeholder Image',
  },
  {
    id: 3,
    title: 'Soft Skills & Cultural Sensitivity',
    description: 'Lessons cover not only functional language but also industry processes, cultural awareness, and professional soft skills.',
    tag: 'Beyond Language',
    imageSrc: '/api/placeholder/400/300',
    imageAlt: 'Placeholder Image',
  },
];