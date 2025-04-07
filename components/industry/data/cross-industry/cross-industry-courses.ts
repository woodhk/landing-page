import { CoursesSection } from '../../types';
import { CrossIndustrySlug } from '../../types';

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
  {
    slug: 'customer-support-staff',
    courses: {
      sectionTitle: 'Customer Support Courses for Any Industry',
      sectionDescription: 'From call center agents to technical support specialists, we offer scenario-based courses tailored to each support role. AI then personalizes each lesson to the specific language needs of your staff. If your job titles aren\'t covered, our language experts will create a custom course for free.',
      customCoursesLink: '/cross-industry/customer-support-staff/custom-courses',
      courseCards: [
        {
          title: 'Customer Service Representative (B2B Focus)',
          description: 'Give your B2B Customer Service Representatives the Business English speaking skills to confidently handle client inquiries, resolve complex issues, and maintain professional relationships with business clients.',
          detailDescription: 'Our scenario-based courses help your representatives navigate technical explanations, process improvement requests, and handle escalations—ensuring your business clients receive clear, efficient, and professional support every time.',
          imageUrl: '/courses/customer-support-staff/customer-service-representative.svg',
          outlineLink: '/cross-industry/customer-support-staff/courses/customer-service-representative',
        },
        {
          title: 'Customer Service Specialist (B2B Focus)',
          description: 'Equip your B2B Customer Service Specialists with the Business English fluency needed to manage complex accounts, develop solutions for business clients, and communicate effectively across departments.',
          detailDescription: 'Our scenario-based courses help specialists articulate technical concepts, negotiate service adjustments, and build lasting business relationships—positioning them as trusted advisors rather than just support contacts.',
          imageUrl: '/courses/customer-support-staff/customer-service-specialist.svg',
          outlineLink: '/cross-industry/customer-support-staff/courses/customer-service-specialist',
        },
        {
          title: 'Call Center Agents',
          description: 'Provide your Call Center Agents with the Business English skills to handle diverse customer requests, troubleshoot issues, and deliver solutions with clarity and confidence.',
          detailDescription: 'Our scenario-based courses help agents manage both simple and complex calls, express empathy appropriately, and follow structured support protocols—reducing call times while improving customer satisfaction.',
          imageUrl: '/courses/customer-support-staff/call-center-agents.svg',
          outlineLink: '/cross-industry/customer-support-staff/courses/call-center-agents',
        },
        {
          title: 'Customer Support Managers',
          description: 'Empower your Support Managers with the Business English communication skills to lead teams, report on key metrics, and implement service improvements across your organization.',
          detailDescription: 'Our scenario-based courses help managers conduct effective feedback sessions, analyze performance data, and present strategic recommendations—strengthening both team management and cross-departmental collaboration.',
          imageUrl: '/courses/customer-support-staff/customer-support-managers.svg',
          outlineLink: '/cross-industry/customer-support-staff/courses/customer-support-managers',
        },
        {
          title: 'Technical Support Specialists',
          description: 'Give your Technical Support Specialists the Business English fluency to explain complex solutions, guide customers through troubleshooting, and document issues accurately.',
          detailDescription: 'Our scenario-based courses help specialists communicate technical concepts in accessible language, ask diagnostic questions effectively, and maintain professional composure during challenging interactions.',
          imageUrl: '/courses/customer-support-staff/technical-support-specialists.svg',
          outlineLink: '/cross-industry/customer-support-staff/courses/technical-support-specialists',
        },
        {
          title: 'Live Chat Support Agents',
          description: 'Equip your Live Chat Support Agents with the Business English writing skills to provide quick, clear, and friendly responses in real-time text-based customer interactions.',
          detailDescription: 'Our scenario-based courses help agents balance efficiency with personalization, manage multiple concurrent conversations, and adapt their communication style to different customer types.',
          imageUrl: '/courses/customer-support-staff/live-chat-support-agents.svg',
          outlineLink: '/cross-industry/customer-support-staff/courses/live-chat-support-agents',
        },
        {
          title: 'Customer Success Specialists',
          description: 'Help your Customer Success Specialists develop the Business English communication skills to onboard clients, conduct training sessions, and proactively ensure customer satisfaction.',
          detailDescription: 'Our scenario-based courses build confidence in explaining product features, gathering feedback, and maintaining engagement throughout the customer lifecycle.',
          imageUrl: '/courses/customer-support-staff/customer-success-specialists.svg',
          outlineLink: '/cross-industry/customer-support-staff/courses/customer-success-specialists',
        },
        {
          title: 'Helpdesk Coordinators',
          description: 'Provide your Helpdesk Coordinators with the Business English skills to prioritize tickets, assign resources, and communicate status updates to both internal teams and external customers.',
          detailDescription: 'Our scenario-based courses help coordinators manage expectations, escalate appropriately, and ensure smooth handoffs between support levels and departments.',
          imageUrl: '/courses/customer-support-staff/helpdesk-coordinators.svg',
          outlineLink: '/cross-industry/customer-support-staff/courses/helpdesk-coordinators',
        },
      ],
    },
  },
  {
    slug: 'operations-project-management',
    courses: {
      sectionTitle: 'Operations and Project Management Courses for Any Industry',
      sectionDescription: 'From Project Managers to Supply Chain Specialists, we offer scenario-based courses tailored to each role. AI then personalizes each lesson to the specific language needs of your team. If your job titles aren\'t covered, our language experts will create a custom course for free.',
      customCoursesLink: '/cross-industry/operations-project-management/custom-courses',
      courseCards: [
        {
          title: 'Agile Coach',
          description: 'Give your Agile Coaches the Business English fluency to facilitate ceremonies, coach teams through challenges, and communicate agile principles across your organization.',
          detailDescription: 'Our scenario-based courses help coaches explain complex methodologies, guide retrospectives effectively, and build a culture of continuous improvement—ensuring clarity and alignment across distributed teams.',
          imageUrl: '/courses/operations-project-management/agile-coach.svg',
          outlineLink: '/cross-industry/operations-project-management/courses/agile-coach',
        },
        {
          title: 'Fleet Manager',
          description: 'Equip your Fleet Managers with the Business English skills to coordinate vehicle logistics, communicate with drivers, and report on operational metrics.',
          detailDescription: 'Our scenario-based courses help managers optimize dispatch communications, handle maintenance reporting, and implement regulatory compliance—improving efficiency while reducing miscommunication.',
          imageUrl: '/courses/operations-project-management/fleet-manager.svg',
          outlineLink: '/cross-industry/operations-project-management/courses/fleet-manager',
        },
        {
          title: 'Fulfillment Specialist',
          description: 'Help your Fulfillment Specialists develop the Business English needed to process orders, resolve inventory discrepancies, and coordinate with delivery partners.',
          detailDescription: 'Our scenario-based courses strengthen communication around order tracking, exception handling, and quality assurance—enabling smoother operations and higher customer satisfaction.',
          imageUrl: '/courses/operations-project-management/fulfillment-specialist.svg',
          outlineLink: '/cross-industry/operations-project-management/courses/fulfillment-specialist',
        },
        {
          title: 'Import and Export Coordinator',
          description: 'Provide your Import and Export Coordinators with the Business English skills to manage customs documentation, communicate with international partners, and ensure compliance.',
          detailDescription: 'Our scenario-based courses cover international shipping terminology, regulatory discussions, and cross-border negotiations—reducing delays and improving supply chain reliability.',
          imageUrl: '/courses/operations-project-management/import-export-coordinator.svg',
          outlineLink: '/cross-industry/operations-project-management/courses/import-export-coordinator',
        },
        {
          title: 'Logistics Coordinator',
          description: 'Equip your Logistics Coordinators with the Business English fluency to optimize transportation routes, communicate with carriers, and report on delivery performance.',
          detailDescription: 'Our scenario-based courses help coordinators handle scheduling changes, negotiate with service providers, and respond to supply chain disruptions—ensuring operations remain efficient and resilient.',
          imageUrl: '/courses/operations-project-management/logistics-coordinator.svg',
          outlineLink: '/cross-industry/operations-project-management/courses/logistics-coordinator',
        },
        {
          title: 'Operations Manager',
          description: 'Give your Operations Managers the Business English communication skills to lead teams, implement process improvements, and align operational activities with business goals.',
          detailDescription: 'Our scenario-based courses develop managers\' ability to present performance data, facilitate cross-departmental collaboration, and drive organizational change—boosting productivity and strategic alignment.',
          imageUrl: '/courses/operations-project-management/operations-manager.svg',
          outlineLink: '/cross-industry/operations-project-management/courses/operations-manager',
        },
        {
          title: 'Procurement Officer',
          description: 'Empower your Procurement Officers with the Business English skills to negotiate with suppliers, evaluate contract terms, and communicate cost-saving opportunities.',
          detailDescription: 'Our scenario-based courses enhance officers\' ability to conduct vendor reviews, lead sourcing discussions, and explain procurement decisions—strengthening your supply chain and bottom line.',
          imageUrl: '/courses/operations-project-management/procurement-officer.svg',
          outlineLink: '/cross-industry/operations-project-management/courses/procurement-officer',
        },
        {
          title: 'Program Manager',
          description: 'Equip your Program Managers with the Business English fluency to coordinate multiple projects, communicate strategic objectives, and report on portfolio progress.',
          detailDescription: 'Our scenario-based courses develop the language skills needed for stakeholder management, executive reporting, and cross-functional leadership—ensuring complex initiatives deliver expected business value.',
          imageUrl: '/courses/operations-project-management/program-manager.svg',
          outlineLink: '/cross-industry/operations-project-management/courses/program-manager',
        },
        {
          title: 'Project Coordinator',
          description: 'Give your Project Coordinators the Business English skills to track deliverables, facilitate team communications, and document project status clearly and efficiently.',
          detailDescription: 'Our scenario-based courses help coordinators manage meeting logistics, update project plans, and escalate issues appropriately—keeping projects running smoothly and stakeholders well-informed.',
          imageUrl: '/courses/operations-project-management/project-coordinator.svg',
          outlineLink: '/cross-industry/operations-project-management/courses/project-coordinator',
        },
        {
          title: 'Project Manager',
          description: 'Empower your Project Managers with the Business English communication skills to lead diverse teams, manage stakeholder expectations, and drive projects to successful completion.',
          detailDescription: 'Our scenario-based courses strengthen managers\' ability to run effective meetings, negotiate for resources, and present progress reports—ensuring clear communication throughout the project lifecycle.',
          imageUrl: '/courses/operations-project-management/project-manager.svg',
          outlineLink: '/cross-industry/operations-project-management/courses/project-manager',
        },
        {
          title: 'Scrum Master',
          description: 'Help your Scrum Masters develop the Business English fluency to facilitate agile ceremonies, remove impediments, and coach teams on scrum principles and practices.',
          detailDescription: 'Our scenario-based courses strengthen their ability to lead sprint planning, moderate retrospectives, and communicate with product owners—fostering agile team performance and delivery excellence.',
          imageUrl: '/courses/operations-project-management/scrum-master.svg',
          outlineLink: '/cross-industry/operations-project-management/courses/scrum-master',
        },
        {
          title: 'Supply Chain Specialist',
          description: 'Provide your Supply Chain Specialists with the Business English skills to analyze distribution networks, optimize inventory levels, and coordinate with global suppliers.',
          detailDescription: 'Our scenario-based courses help specialists discuss forecasting models, explain supply chain constraints, and recommend process improvements—enhancing overall supply chain resilience and efficiency.',
          imageUrl: '/courses/operations-project-management/supply-chain-specialist.svg',
          outlineLink: '/cross-industry/operations-project-management/courses/supply-chain-specialist',
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