import { CoursesSection } from '../types';
import { CrossIndustrySlug } from '../types';

interface CrossIndustryCoursesData {
  slug: CrossIndustrySlug;
  courses: CoursesSection;
}

export const crossIndustryCoursesData: CrossIndustryCoursesData[] = [
  {
    slug: 'administrative-support',
    courses: {
      sectionTitle: 'Administrative Support Courses for Any Industry',
      sectionDescription: 'From Receptionists to Office Managers, we offer scenario-based courses tailored to each industry. AI then personalizes each lesson to the specific language needs of staff. If staffs job title aren\'t covered, our language experts will create a custom course for free.',
      customCoursesLink: '/abstract-bg/imageBackground6.svg',
      courseCards: [
        {
          title: 'Administrative Assistants',
          description: 'Give your Administrative Assistants the Business English speaking skills to schedule meetings, manage calls, and welcome visitors with confidence and professionalism.',
          detailDescription: 'Our scenario-based courses help your administrative staff handle phone conversations clearly, coordinate tasks efficiently, and create a strong first impression for your office—minimizing misunderstandings and improving workplace communication.',
          imageUrl: '/abstract-bg/imageBackground6.svg',
          outlineLink: '/cross-industry/administrative-support/courses/administrative-assistants',
        },
        {
          title: 'Event Assistants',
          description: 'Give your Event Assistants the Business English skills to support setup, coordinate with vendors, and communicate clearly with attendees.',
          detailDescription: 'Our scenario-based courses help event assistants deliver smooth operations, build rapport with suppliers, and interact with guests confidently—before, during, and after the event.',
          imageUrl: '/abstract-bg/imageBackground6.svg',
          outlineLink: '/cross-industry/administrative-support/courses/event-assistants',
        },
        {
          title: 'Event Administrators',
          description: 'Equip your Event Administrators with the English communication skills to clarify deliverables, manage stakeholder meetings, and support training sessions.',
          detailDescription: 'Our scenario-based courses train your team to handle timelines, logistics, and event-related communication without confusion—so every detail is delivered on point.',
          imageUrl: '/abstract-bg/imageBackground6.svg',
          outlineLink: '/cross-industry/administrative-support/courses/event-administrators',
        },
        {
          title: 'Executive Assistants',
          description: 'Give your Executive Assistants the Business English fluency to coordinate travel, manage executive schedules, and communicate with senior stakeholders.',
          detailDescription: 'Our scenario-based courses help them speak clearly, professionally, and with confidence—whether handling sensitive communications or representing leadership at events.',
          imageUrl: '/abstract-bg/imageBackground6.svg',
          outlineLink: '/cross-industry/administrative-support/courses/executive-assistants',
        },
        {
          title: 'Facilities Managers',
          description: 'Enable your Facilities Managers to communicate operational updates, manage vendor relationships, and liaise with tenants in clear and professional English.',
          detailDescription: 'Our scenario-based courses reduce misunderstandings and ensure that all logistics, maintenance, and service needs are handled efficiently and diplomatically.',
          imageUrl: '/abstract-bg/imageBackground6.svg',
          outlineLink: '/cross-industry/administrative-support/courses/facilities-managers',
        },
        {
          title: 'Front Office Coordinators',
          description: 'Help your Front Office Coordinators communicate with delivery vendors, manage workplace logistics, and welcome English-speaking visitors with ease.',
          detailDescription: 'Our scenario-based courses ensure smooth day-to-day operations, build confidence when handling face-to-face interactions, and improve cross-department coordination.',
          imageUrl: '/abstract-bg/imageBackground6.svg',
          outlineLink: '/cross-industry/administrative-support/courses/front-office-coordinators',
        },
        {
          title: 'Personal Assistants',
          description: 'Give your Personal Assistants the Business English skills to manage private tasks, arrange travel, and liaise with clients with tact and professionalism.',
          detailDescription: 'Our scenario-based courses build their confidence to handle both personal and professional duties, strengthening their communication in all situations.',
          imageUrl: '/abstract-bg/imageBackground6.svg',
          outlineLink: '/cross-industry/administrative-support/courses/personal-assistants',
        },
        {
          title: 'Receptionists',
          description: 'Equip your Receptionists with the English they need to greet visitors, handle phone calls, and manage appointment schedules professionally.',
          detailDescription: 'Our scenario-based courses help your front-desk team make strong first impressions, reduce miscommunication, and represent your company with clarity and warmth.',
          imageUrl: '/abstract-bg/imageBackground6.svg',
          outlineLink: '/cross-industry/administrative-support/courses/receptionists',
        },
      ],
    },
  },
  // Additional cross-industry roles can be added here
];

export const getCoursesByCrossIndustry = (slug: CrossIndustrySlug): CoursesSection | undefined => {
  const crossIndustry = crossIndustryCoursesData.find(item => item.slug === slug);
  return crossIndustry ? crossIndustry.courses : undefined;
}; 