import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1C2530] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="flex flex-col">
            <div className="flex items-center mb-4 sm:mb-6">
              <Image src="/logo/logo.svg" alt="FluentPro Logo" width={40} height={40} />
              <span className="ml-2 text-xl font-bold">FluentPro</span>
            </div>
            <p className="text-[#C9D2E5] text-sm sm:text-base">
              AI-Powered English Training Tailored to Staff's Industry & Role
            </p>
            <div className="mt-6">
              <Link href="https://www.linkedin.com" aria-label="LinkedIn">
                <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="black">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                </div>
              </Link>
            </div>
          </div>

          {/* Company Links */}
          <div className="flex flex-col items-start">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="https://language-key.vercel.app/home" className="text-[#C9D2E5] hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col items-start">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/terms" className="text-[#C9D2E5] hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="text-[#C9D2E5] hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/cookies" className="text-[#C9D2E5] hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-start">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span className="ml-3 text-sm sm:text-base break-words">+852 8191 4858</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span className="ml-3 text-sm sm:text-base break-words">fluentpro@languagekey.com</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-1">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span className="ml-3 text-sm sm:text-base break-words">10a, Eton Building, 288 Des Voeux Road Central, Hong Kong</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright section */}
        <div className="mt-8 pt-6 border-t border-gray-700 text-center sm:text-left text-sm text-[#C9D2E5]">
          <p>© {new Date().getFullYear()} FluentPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;