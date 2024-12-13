import React, { useState, useEffect } from 'react';
import { FaBell, FaSearch, FaAngleUp, FaAngleDown } from 'react-icons/fa';
import userprofile from "../components/userprofile.png";

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
    } else {
      setIsScrolled(false); // User is at the top of the page
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
          isNavbarVisible ? 'py-2' : 'py-0 opacity-0 pointer-events-none'
        } ml-56 ${isScrolled ? 'shadow-lg' : ''}`}
      >
        <div className="flex items-center justify-between px-6">
          {/* Search Bar with Search Button inside */}
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-1 w-60 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
            />
            <button
              className="absolute right-2 text-gray-500 hover:text-blue-500 focus:outline-none"
              aria-label="Search"
            >
              <FaSearch className="text-sm" />
            </button>
          </div>

          {/* Notification Bell */}
          <div className="flex items-center space-x-4">
            <FaBell className="text-gray-600 text-xl cursor-pointer hover:text-blue-500" />
            <div className="flex items-center space-x-3 cursor-pointer">
              <img
                src={userprofile}
                alt="User Avatar"
                className="w-9 h-9 rounded-full"
              />
              <div className="flex flex-col text-left">
                <p className="text-xs text-gray-500">Admin</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toggle Button (Arrow) - Visible on Scroll */}
      {isScrolled && (
        <div
          className={`fixed transition-all duration-300 top-12 right-6 transform cursor-pointer opacity-100`}
          onClick={toggleNavbar}
        >
          {isNavbarVisible ? (
            <FaAngleUp className="text-gray-600 text-2xl hover:text-blue-500" />
          ) : (
            <FaAngleDown className="text-gray-600 text-2xl hover:text-blue-500" />
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
