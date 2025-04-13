import React, { useState } from "react";
import Company from '../assets/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="py-4 px-6 md:px-16 bg-black shadow-lg shadow-lime-400/10 rounded-b-xl backdrop-blur-md border-b border-gray-800 relative">
      <div className="flex items-center justify-between w-full">
        {/* Logo - Left */}
        <div className="flex items-center">
          <img
            src={Company}
            alt="OneThrive Logo"
            className="h-10 w-auto"
          />
        </div>

        {/* Center Nav (Desktop only) */}
        <div className="hidden md:flex justify-center absolute left-1/2 transform -translate-x-1/2 space-x-6">
          <a href="#" className="text-white hover:text-lime-400">Home</a>
          <a href="#" className="text-white hover:text-lime-400">About</a>
          <a href="#" className="text-white hover:text-lime-400">Services</a>
          <a href="#" className="text-white hover:text-lime-400">Contact</a>
        </div>

        {/* Get Started Button - Right corner (Desktop only) */}
        <div className="hidden md:flex items-center">
          <button className="bg-lime-400 text-black px-4 py-2 rounded-md hover:bg-lime-300 font-semibold transition duration-300">
            Get Started
          </button>
        </div>

        {/* Hamburger Icon - Mobile only */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black px-6 pb-6 pt-4 flex flex-col justify-center items-center space-y-4 md:hidden z-50 shadow-sm shadow-lime-300">
          <a href="#" className="text-white hover:text-lime-400">Home</a>
          <a href="#" className="text-white hover:text-lime-400">About</a>
          <a href="#" className="text-white hover:text-lime-400">Services</a>
          <a href="#" className="text-white hover:text-lime-400">Contact</a>
          <button className="bg-lime-400 text-black px-4 py-2 rounded-md hover:bg-lime-300 mt-3 font-semibold transition duration-300 w-fit">
            Get Started
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
