import React, { useState, useEffect } from 'react';
import { FaBell, FaSearch, FaAngleUp, FaAngleDown } from 'react-icons/fa';

const Navbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  // Toggle the visibility of the navbar
  const toggleNavbar = () => {
    setIsNavbarVisible((prev) => !prev);
  };

  // Detect scrolling
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsScrolled(true); // User has scrolled down
      setIsNavbarVisible(false); // Hide navbar on scroll down
    } else {
      setIsScrolled(false); // User is at the top of the page
      setIsNavbarVisible(true); // Show navbar when at the top
    }
  };

  // Set up the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Navbar */}
      <div
        className={`transition-all duration-300 fixed top-0 left-0 right-0 z-50 bg-white shadow-md ${
          isNavbarVisible ? 'py-3' : 'py-0 opacity-0 pointer-events-none'
        } ml-56 ${isScrolled ? 'shadow-lg' : ''}`}
      >
        <div className="flex items-center justify-between px-6">
          {/* Search Bar with Search Button inside */}
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 w-56 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
            />
            {/* Search Button inside the input field */}
            <button
              className="absolute right-2 text-gray-500 hover:text-blue-500 focus:outline-none"
              aria-label="Search"
            >
              <FaSearch className="text-xl" />
            </button>
          </div>

          {/* Notification Bell */}
          <div className="flex items-center space-x-4">
            <FaBell className="text-gray-600 text-xl cursor-pointer hover:text-blue-500" />

            {/* Enhanced User Profile */}
            <div className="flex items-center space-x-3 cursor-pointer">
              {/* Placeholder Avatar */}
              <img
                src="https://via.placeholder.com/40"
                alt="User Avatar"
                className="w-10 h-10 rounded-full border border-gray-300"
              />
              <div className="flex flex-col text-left">
                <p className="text-sm font-semibold text-gray-800">John Doe</p>
                <p className="text-xs text-gray-500">Admin</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toggle Button (Arrow) Positioned Further to the Top */}
      <div
        className={`fixed transition-all duration-300 ${
          isNavbarVisible ? 'top-16' : 'top-0'
        } right-6 transform cursor-pointer ${isScrolled ? 'opacity-100' : 'opacity-0'}`}
        onClick={toggleNavbar}
      >
        {isNavbarVisible ? (
          <FaAngleUp className="text-gray-600 text-2xl hover:text-blue-500" />
        ) : (
          <FaAngleDown className="text-gray-600 text-2xl hover:text-blue-500" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
