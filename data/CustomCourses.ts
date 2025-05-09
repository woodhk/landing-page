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
    image: "/ui-elements/bankingFinance.png",
    href: "/industry/banking-finance",
  },
  {
    title: "Shipping & Logistics",
    description: "Smoothly communicate with clients, suppliers, and partners, avoiding misunderstandings.",
    image: "/ui-elements/shippingLogistics.png",
    href: "/industry/shipping-logistics",
  },
  {
    title: "Real Estate",
    description: "Improve tenant interactions, close deals faster, and enhance team professionalism.",
    image: "/ui-elements/realEstate.png",
    href: "/industry/real-estate",
  },
  {
    title: "Hotels & Hospitality",
    description: "Resolve issues smoothly, make guests feel valued, and turn great service into lasting loyalty.",
    image: "/ui-elements/hotelHospitality.png",
    href: "/industry/hotel-hospitality",
  },
  
];
