// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = (
    <>
      <Link 
        to="/" 
        className="block py-2 text-white hover:text-emerald-400 transition md:inline-block md:py-0 md:text-white text-center"
        onClick={toggleMenu} 
      >
        Home
      </Link>
      <Link 
        to="/about" 
        className="block py-2 text-white hover:text-emerald-400 transition md:inline-block md:py-0 md:text-white text-center"
        onClick={toggleMenu}
      >
        About
      </Link>
      <Link 
        to="/contact-us" 
        className="block py-2 text-white hover:text-emerald-400 transition md:inline-block md:py-0 md:text-white text-center"
        onClick={toggleMenu}
      >
        Contact Us
      </Link>
      {/* Get Started Button for Mobile Menu (Issue 1) */}
      <Link 
        to="/signup" 
        className="flex justify-center bg-emerald-600 text-white font-semibold py-2 px-4 rounded-lg mt-3 mx-auto max-w-[200px] text-center hover:bg-emerald-700 transition duration-200 shadow-md"
        onClick={toggleMenu}
      >
        Get Started
      </Link>
    </>
  );

  return (
    <header className="bg-indigo-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center relative">
        <Link to="/" className="text-3xl font-extrabold text-emerald-400">ilmiya</Link>
        
        {/* Desktop Navigation (Visible on md and up) */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-emerald-400 transition">Home</Link>
          <Link to="/about" className="hover:text-emerald-400 transition">About</Link>
          <Link to="/contact-us" className="hover:text-emerald-400 transition">Contact Us</Link>
          {/* Get Started Button (Desktop Only) */}
          <Link 
            to="/signup" 
            className="bg-emerald-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-emerald-700 transition duration-200 shadow-md"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Menu Icon and Button (Issue 1: Removed Get Started from here) */}
        <div className="md:hidden flex items-center">
            <button 
                className="text-2xl p-2 rounded hover:bg-indigo-700"
                onClick={toggleMenu}
            >
                {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
        </div>

      </div>

      {/* Mobile Menu Content */}
      <div 
        className={`md:hidden bg-indigo-700 w-full absolute z-10 transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100 py-2' : 'max-h-0 opacity-0 overflow-hidden'}`}
      >
        <div className="flex flex-col space-y-2 py-2">
            {navLinks}
        </div>
      </div>
    </header>
  );
};
export default Header;