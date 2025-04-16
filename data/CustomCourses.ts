export type CustomCourse = {
  title: string;
  description: string;
  image: string;
  href: string;
};

export const customCourses: CustomCourse[] = [
  {
    title: "Banking & Finance",
    description: "Articulate complex financial insights persuasively and gain client trust.",
    image: "/images/banking-finance.svg",
    href: "/industry/banking-finance",
  },
  {
    title: "Shipping & Logistics",
    description: "Smoothly communicate with clients, suppliers, and partners, avoiding misunderstandings.",
    image: "/images/shipping-logistics.svg",
    href: "/industry/shipping-logistics",
  },
  {
    title: "Real Estate",
    description: "Improve tenant interactions, close deals faster, and enhance team professionalism.",
    image: "/images/real-estate.svg",
    href: "/industry/real-estate",
  },
  {
    title: "Hotels & Hospitality",
    description: "Resolve issues smoothly, make guests feel valued, and turn great service into lasting loyalty.",
    image: "/images/hotel-hospitality.svg",
    href: "/industry/hotel-hospitality",
  },
  
];
