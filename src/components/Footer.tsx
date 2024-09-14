import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-6 text-[14px]">
      <div className="container mx-auto px-4">
        <ul className="flex flex-col md:flex-row items-center">
          <li className="border-gray-700 text-[12px]">
            <p>Copyright © 2024 Bangkok University. All rights reserved</p>
          </li>
          
          <li className="border-b border-gray-700 md:border-none">
            <Link
              href="/speaker"
              className="block text-white p-4 hover:text-gray-400"
            >
              Speaker
            </Link>
          </li>
          <li className="border-b border-gray-700 md:border-none">
            <Link
              href="/schedule"
              className="block text-white p-4 hover:text-gray-400"
            >
              Schedule
            </Link>
          </li>
          <li className="border-b border-gray-700 md:border-none">
            <Link
              href="/sponsor"
              className="block text-white p-4 hover:text-gray-400"
            >
              Sponsor
            </Link>
          </li>
          <li className="border-b border-gray-700 md:border-none">
            <Link
              href="/contact"
              className="block text-white p-4 hover:text-gray-400"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
