"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-[#121212]">
      <div className="logo">
        <Image src="/images/logo.png" alt="Logo" width={100} height={100} />
      </div>

      {/* Navigation Links */}
      <ul className={`flex space-x-6 items-center text-white ${isOpen ? 'block' : 'hidden'} md:flex`}>
        <li>
          <Link href="/" className="hover:text-gray-400 text-sm md:text-base ">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-gray-400 text-sm md:text-base">
            About
          </Link>
        </li>
        <li>
          <Link href="/skills" className="hover:text-gray-400 text-sm md:text-base">
            Skills
          </Link>
        </li>
        <li>
          <Link href="/project" className="hover:text-gray-400 text-sm md:text-base">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-gray-400 text-sm md:text-base mr-7">
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden text-[10px]" onClick={() => setIsOpen(!isOpen)}>
        <div className="space-y-2">
          <div className="w-8 h-1 bg-white"></div>
          <div className="w-8 h-1 bg-white"></div>
          <div className="w-8 h-1 bg-white"></div>
        </div>
      </div>
    </nav>
  );
}





























