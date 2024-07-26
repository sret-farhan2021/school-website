import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-blue-500 p-4" role="navigation" aria-label="Main Navigation">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="https://via.placeholder.com/50" 
            alt="Springdale Public School logo" 
            className="mr-2" 
            aria-hidden="true" // hides the image from screen readers
          />
          <Link 
            to="/" 
            className="text-white text-lg font-bold" 
            onClick={closeMenu}
            aria-label="Home"
          >
            Springdale Public School
          </Link>
        </div>
        <div className="hidden md:flex space-x-4" aria-label="Main navigation links">
          <Link 
            to="/about-us" 
            className="text-white"
            aria-label="About Us"
          >
            About Us
          </Link>
          <Link 
            to="/academics" 
            className="text-white"
            aria-label="Academics"
          >
            Academics
          </Link>
          <Link 
            to="/admissions" 
            className="text-white"
            aria-label="Admissions"
          >
            Admissions
          </Link>
          <Link 
            to="/faculty" 
            className="text-white"
            aria-label="Faculty"
          >
            Faculty
          </Link>
          <Link 
            to="/students" 
            className="text-white"
            aria-label="Students"
          >
            Students
          </Link>
          <Link 
            to="/gallery" 
            className="text-white"
            aria-label="Gallery"
          >
            Gallery
          </Link>
          <Link 
            to="/contact-us" 
            className="text-white"
            aria-label="Contact Us"
          >
            Contact Us
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            tabIndex="0" // ensures the button is focusable
          >
            <FaBars />
          </button>
        </div>
      </div>
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden flex flex-col items-center bg-blue-500 mt-2 space-y-2"
          aria-label="Mobile navigation menu"
        >
          <Link 
            to="/about-us" 
            className="text-white" 
            onClick={closeMenu}
            aria-label="About Us"
          >
            About Us
          </Link>
          <Link 
            to="/academics" 
            className="text-white" 
            onClick={closeMenu}
            aria-label="Academics"
          >
            Academics
          </Link>
          <Link 
            to="/admissions" 
            className="text-white" 
            onClick={closeMenu}
            aria-label="Admissions"
          >
            Admissions
          </Link>
          <Link 
            to="/faculty" 
            className="text-white" 
            onClick={closeMenu}
            aria-label="Faculty"
          >
            Faculty
          </Link>
          <Link 
            to="/students" 
            className="text-white" 
            onClick={closeMenu}
            aria-label="Students"
          >
            Students
          </Link>
          <Link 
            to="/gallery" 
            className="text-white" 
            onClick={closeMenu}
            aria-label="Gallery"
          >
            Gallery
          </Link>
          <Link 
            to="/contact-us" 
            className="text-white" 
            onClick={closeMenu}
            aria-label="Contact Us"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
