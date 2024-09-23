// 1640705727 Itsara Klongklaew
"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import logoSrc from "../Images/logo.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black p-4 fixed w-full">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Image className="" src={logoSrc} alt="logo" width={120} />

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Menu Links - Hidden on small screens */}
        <ul
          className={`md:flex md:space-x-[60px] md:items-center absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li className="border-b border-gray-700 md:border-none">
            <Link href="/" className="block text-white p-4 hover:text-gray-400">
              Home
            </Link>
          </li>
          <li className="border-b border-gray-700 md:border-none">
            <Link
              href="/about"
              className="block text-white p-4 hover:text-gray-400"
            >
              About
            </Link>
          </li>
          <li className="border-b border-gray-700 md:border-none">
            <Link
              href="/faq"
              className="block text-white p-4 hover:text-gray-400"
            >
              FAQ
            </Link>
          </li>
          <li className="border-b border-gray-700 md:border-none">
            <Link
              href="/workshop"
              className="block text-white p-4 hover:text-gray-400"
            >
              Workshop
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
          <li className="border-b border-gray-700 p-4 md:border-none">
            <Link
              href="/registration"
              className="bg-gradient-to-r from-[#666699] to-white hover:from-[#BEBEBE] hover:to-[#666699] h-[35px] w-[100px] rounded-[20px] flex items-center justify-center"
            >
              <h1 className="text-black hover:text-white font-medium">Register</h1>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
