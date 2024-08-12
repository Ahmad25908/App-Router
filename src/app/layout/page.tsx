
import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="font-bold">
          My App
        </Link>
        <div className="flex space-x-4">
          <Link href="/about" className="text-white hover:text-blue-200 transition">
            About
          </Link>
          <Link href="/contact" className="text-white hover:text-blue-200 transition">
            Contact
          </Link>
          <footer className="bg-gray-800 text-white p-4 mt-4">
      <div className="container mx-auto text-center">
        &copy; {new Date().getFullYear()} My App
      </div>
    </footer> </div>
      </nav>
    </header>
  );
};

export default Header