import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1C2530] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">FluentPro</h3>
            <p className="text-[#C9D2E5]">
              AI-Powered English Training Tailored to Staff's Industry & Role
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Platform</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-[#C9D2E5] hover:text-white">Features</Link></li>
              <li><Link href="#" className="text-[#C9D2E5] hover:text-white">Industries</Link></li>
              <li><Link href="#" className="text-[#C9D2E5] hover:text-white">Use Cases</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-[#C9D2E5] hover:text-white">About Us</Link></li>
              <li><Link href="#" className="text-[#C9D2E5] hover:text-white">Careers</Link></li>
              <li><Link href="#" className="text-[#C9D2E5] hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-[#C9D2E5] hover:text-white">Privacy Policy</Link></li>
              <li><Link href="#" className="text-[#C9D2E5] hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-[#333E54] text-center text-[#C9D2E5]">
          <p>&copy; {new Date().getFullYear()} FluentPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;