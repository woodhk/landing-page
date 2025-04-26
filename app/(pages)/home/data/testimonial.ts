import { glob } from 'glob';
import { basename } from 'path';

export interface TestimonialLogo {
  src: string;
  alt: string;
}

// Function to get all testimonial logos from the public directory
export function getTestimonialLogos(): TestimonialLogo[] {
  // In Next.js, we can't use fs directly in the client component
  // Instead, we hardcode the paths based on the directory listing
  
  const testimonialFiles = [
    "adidas.png", "arup.png", "bank-east-asia.png", "bank-of-china.png",
    "bdo.png", "blue-cross.png", "bq.png", "cbre.png", "csx.png",
    "db-schenker.png", "deloitte.png", "dhl.png", "dksh.png",
    "hang-seng-bank.png", "hk-international-airport.png", "hk-jockey-club.png",
    "hsbc.png", "hutchison.png", "icbc.png", "imagine-group.png", "ing.png",
    "jpmorgan.png", "land-registry.png", "lane-crawford.png", "li-fung.png",
    "lvmh.png", "manulife.png", "mothercare.png", "mtr.png", "parsons.png",
    "pccw.png", "phillips.png", "poly.png", "pwc.png", "sfc.png", "sino.png",
    "smartone.png", "sony.png", "sun-hung.png", "sun-life.png", "towngas.png",
    "west-kowloon.png", "wing-hang.png", "zurich.png"
  ];

  // Map filenames to logo objects
  return testimonialFiles.map(filename => ({
    src: `/testimonials/${filename}`,
    alt: formatAltText(filename)
  }));
}

// Helper function to format alt text from filename
function formatAltText(filename: string): string {
  // Remove file extension and convert to title case
  const name = basename(filename, '.png')
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
  
  // Handle special cases
  switch (name.toUpperCase()) {
    case 'ICBC': 
    case 'MTR':
    case 'BEA':
    case 'BDO':
    case 'HSBC':
    case 'LVMH':
    case 'PCCW':
    case 'PWC':
    case 'SFC':
    case 'DKSH':
    case 'DHL':
    case 'CBRE':
    case 'BQ':
    case 'CSX':
      return name.toUpperCase();
    default:
      return name;
  }
}

// Export the testimonial logos
export const testimonialLogos = getTestimonialLogos();
