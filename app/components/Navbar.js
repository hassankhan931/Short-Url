"use client";
import React, { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-20 bg-gradient-to-r from-gray-900/80 via-gray-800/70 to-gray-900/80 backdrop-blur-md border-b border-amber-400/30">
      <div className="max-w-7xl mx-auto px-4 my-2 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-amber-400">
          Short<span className="text-white">URL</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-white font-medium">
          <Link href="/" className="hover:text-amber-400 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-amber-400 transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-amber-400 transition">
            Contact
          </Link>
          <Link href="/shorten" className="hover:text-amber-400 transition">
            Shorten
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col space-y-1 focus:outline-none cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gradient-to-r from-gray-900/95 via-gray-800/90 to-gray-900/95 backdrop-blur-md border-t border-amber-400/20 px-6 py-2 space-y-4 text-white font-medium text-center transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-50 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Link
          href="/"
          className="block hover:text-amber-400 transition"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link
          href="/about"
          className="block hover:text-amber-400 transition"
          onClick={() => setIsOpen(false)}
        >
          About
        </Link>
        <Link
          href="/contact"
          className="block hover:text-amber-400 transition"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </Link>
        <Link
          href="/shorten"
          className="block hover:text-amber-400 transition"
          onClick={() => setIsOpen(false)}
        >
          Shorten
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
