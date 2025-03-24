"use client";

import { useState } from 'react';
import { VectorStoreSetup } from './VectorStoreSetup';

export function FluentProSetupPage() {
  const fluentProInfo = `FluentPro is an AI-powered Business English training web application designed to help non-native English-speaking professionals improve the English speaking skills needed for their specific job. It does this through real-world simulated role-plays and personalized feedback. Users receive a pre-made custom course(s) with lessons for their specific role. Each lesson has 3 scenarios in which they need to complete of a good standard for them to pass that scenario. If not, they have to repeat it where the AI will generate a new scenario. Inside each scenario is 3 exercises; Scenario Understanding, Key Languages and Role-play.

Scenario Understanding and Key languages just prepares the user for the role-plays scenario and key languages through mini exercises like listen and repeat.

The role-play section is split into 4 parts, each part building/training the user up for part 4 which is the only section graded and this grade determines if they pass a scenario or not. The first is Guided help where the user gets 3 options of ideal responses shown to them in which they can use verbatim in their response. The idea of this part is to get the user familiar with how the conversation should flow. The second part is similar to the first, however, it doesn't provide the ideal responses. Instead it lets the user respond and the AI will give feedback on their response. The third section doesn't give users ideal responses or feedback on their answers. Instead it just lets the user respond like a normal conversation would with ticks for good responses and exclamation marks for not of standard. In addition, there is a certain amount of time required per response (depending on their level -> higher level meaning less time vice versa). At the end of part 3, the user will receive overall feedback on their conversation. Up until this point text has been shown on the screen to show the user what they and what the conversation partner (AI) has said. However, in the final part this is not the case. Part 4 is is similar to part 3 except this time, the user participates in a role-play with speech to speech communication, without any text shown on the screen.
The users performance is then graded and in the report card, the following is shown:
Their overall performance
Mark breakdown
Conversation history w/ correction responses
Overall feedback from AI

The app also features advanced analytics for HR Managers to track staff progress and measure the impact of improved English proficiency on workplace productivity. It includes a dashboard with detailed user performance statistics (cohort and individual).. The app emphasizes personalization, enabling HR to set tailored objectives and monitor progress and upload company specific information for certain roles (e.g. a restaurant will upload their menu and assign it to all waiting staffs). 

Target Audience:
There are two target audiences, one being actual staff/user and the other being HR.
Staff:
Staff are normally encouraged to complete training as a result of their department head reviewing some report and identifying they need English training. The user will more than likely partake in this training ot show their commitment to the company. Once the users in, they will want to just complete it fast as possible. Our streamlined approach is to help staff improve so that they perform their specific job better in English. Although staff may feel obliged to do this course, we want their experience to still feel somewhat enjoyable and even motivating and we can reflect this with good UX design.

HR:
HR will identify some staff lack English skills from reports and therefore seek for an English training solution. In the process they are met with the following challenges and pain points:
They deem English training the least important task in their "to do list"
They have a set budget they can spend on training and tend to allocate a smaller percentage to language training
Since they have such a negative connotation already to English training, they are in need of a hands free, effortless training program that offers statistics on staff improvement so they can ensure positive ROI and meet KPI's. However, traditional English training methods go against this motive. Traditional training tends to be a hassle as they have to organise and schedule trainers to come in and find a time when both staff and the trainers are available
FluentPro addresses this problem by offering a very hands free yet statistic driven approach where HR just have to send one email out to all their staff, staff login through a special link that connects them to the HR dashboard and Fluentpro does the rest.

Fluentpro is a product of the company called the LanguageKey.
Languagekey's history:
Lkey monthly business English magazine (1994-2005) 15000 monthly copies,
65,000 readership in HK
⁃ WETE (2005-present) Global business English online training platform 
⁃ Corporate Business English and communication skills Training (1994-present)
Hong Kong and China establishing the largest company of its type in China, with 5 regional
offices and employing 100+ staff.
⁃ Company is wholly bought out by Mount Knowledge Holdings Ltd, a US
stock market listed company, in 2010 and goes public, creating The Language Key Asia Ltd 
⁃ The Language Key Asia Ltd enters administration in 2012 l
⁃ Company&#39;s original founders buy back business in 2012 and retain 100%
private ownership through to the present day.

Outreach approach:
For whenever i reference "WETE", it stands for "Workplace English Training E-platform"
For existing clients (although not many) it's as simple as reaching out via email letting them know about fluentpro and offering to free (so that we can test it although we won't explicitly tell them its for testing).
We can also reach out to previous clients letting them know about this

For new prospects our current funnel is through the following:
Reach out to staff within a company and offer WETE for free
Ask those staff for their HR Manager and request permission to tell them they referred us
Reach out to HR Managers and state that some of their staff are already use WETE and thought we'd just reach out if you'd like to have it for free for all staff.
Once they agree to employ WETE for all staff in need of English training, we will then proceed to upsell them Fluentpro.

It's essential to highlight FluentPro as a comprehensive professional communication and skill-building app rather than just a "language app." While language improvement is a key part of its value, the unique proposition lies in its ability to integrate business communication, soft skills, and logical processes into its lessons. This approach positions FluentPro as a solution-driven tool for professional development that goes beyond typical language learning apps.
How FluentPro Stands Out
Beyond Language: A Professional Toolkit
FluentPro doesn't just teach Business English; it prepares users for real-world business scenarios by developing skills such as handling customer objections, managing negotiations, building trust, and resolving conflicts.
It focuses on logical processes in communication, teaching users to navigate situations step-by-step with confidence and professionalism.
Soft Skills Development
FluentPro teaches essential soft skills such as active listening, empathy, persuasion, and building rapport, which are critical in roles like customer success, account management, and client relationships.
These skills are seamlessly embedded in the lessons, making learners better communicators and collaborators.
Industry-Relevant Scenarios
The app provides scenario-based learning tailored to real-world professional contexts. This ensures that the lessons are directly applicable to the users' roles, making them job-ready.
Interactive and Practical
With AI-driven role-play and real-time feedback, FluentPro offers an immersive learning experience, helping users practice and refine their speaking skills in a low-pressure environment.
Learners not only gain fluency but also confidence in their ability to handle complex business conversations.`;

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">FluentPro AI Knowledge Base Setup</h1>
      
      <div className="mb-6">
        <p className="text-gray-700 mb-4">
          This page allows you to set up the AI knowledge base with information about FluentPro.
          Once set up, the chatbot will be able to answer questions about FluentPro using this information.
        </p>
      </div>
      
      <VectorStoreSetup fluentProInfo={fluentProInfo} />
      
      <div className="bg-blue-50 border border-blue-200 p-4 rounded-md">
        <h3 className="text-lg font-medium text-blue-800 mb-2">Using the Chatbot</h3>
        <p className="text-blue-700 mb-2">
          After setting up the knowledge base, you can use the chatbot to get information about FluentPro:
        </p>
        <ol className="list-decimal list-inside text-blue-700 space-y-1">
          <li>The AI will automatically use FluentPro knowledge to answer your questions</li>
          <li>No need to toggle any settings - just ask your questions about FluentPro, its features, target audience, etc.</li>
          <li>If the AI doesn't have information on a specific question, it will direct you to email support@languagekey.com</li>
        </ol>
      </div>
    </div>
  );
} 