import React, { useState, useEffect } from 'react';
import { FaBell, FaSearch } from 'react-icons/fa';
import userprofile from "../components/userprofile.png";
import { useLocation } from 'react-router-dom';

const Navbar = ({ activeBlock, setActiveBlock, isCollapsed }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <div
        className={`transition-all fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-2 px-3 ${
          isScrolled ? 'shadow-lg' : ''
        } ${isCollapsed ? 'ml-16' : 'ml-56'} transition-all duration-300`}
      >
        <div className="flex items-center justify-between flex-wrap">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-1 w-60 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 pr-10"
            />
            <FaSearch className="absolute right-3 text-gray-500 text-sm cursor-pointer" />
          </div>

          <div className="flex items-center space-x-4">
            <FaBell className="text-gray-600 text-xl cursor-pointer hover:text-blue-500" />
            <div className="flex items-center space-x-2">
              <img
                src={userprofile}
                alt="User"
                className="w-9 h-9 rounded-full"
              />
              <p className="text-xs text-gray-500">Admin</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16"></div>
    </div>
  );
};

export default Navbar;
