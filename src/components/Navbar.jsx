import React, { useState, useEffect } from 'react';
import { FaBell, FaSearch, FaBolt, FaWater, FaCloud } from 'react-icons/fa';
import userprofile from "../components/userprofile.png";
import DateSelector from './DateSelector';
import { useLocation } from 'react-router-dom'; // Import useLocation

const Navbar = ({ activeBlock, setActiveBlock }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); // Get current route

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const blockClasses = (block) =>
    `cursor-pointer flex items-center justify-center w-1/3 py-3 rounded-lg text-sm transition-all duration-300 ${
      activeBlock === block
        ? 'bg-gradient-to-r text-white shadow-2xl font-bold'
        : 'bg-white text-gray-600 hover:shadow-md'
    }`;

  const blockStyles = {
    Energy: 'from-yellow-400 to-yellow-600',
    Water: 'from-blue-400 to-blue-600',
    Air: 'from-gray-300 to-gray-500',
  };

  // Conditionally render block selector only on /dashboard route
  const showBlocks = location.pathname === '/dashboard';

  return (
    <div>
      {/* Navbar */}
      <div
        className={`transition-all fixed top-0 left-0 right-0 z-50 bg-white ml-56 py-2 px-3 shadow-md ${
          isScrolled ? 'shadow-lg' : ''
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Search and Info */}
          <div className="relative flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-1 w-60 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 pr-10"
            />
            <FaSearch className="absolute right-3 text-gray-500 text-sm" />
          </div>
    
          {/* Info & Controls */}
          <div className="flex items-center space-x-4">
            <DateSelector />
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

      {/* Block Selector - Only on /dashboard route */}
      {showBlocks && (
        <div className="bg-gray-100 flex justify-between items-center px-3 space-x-4">
          {['Energy', 'Water', 'Air'].map((block) => (
            <div
              key={block}
              className={`${blockClasses(block)} ${activeBlock === block ? blockStyles[block] : ''}`}
              onClick={() => setActiveBlock(block)} // Update the active block
            >
              {block === 'Energy' && <FaBolt className="text-2xl pr-2" />}
              {block === 'Water' && <FaWater className="text-2xl pr-2" />}
              {block === 'Air' && <FaCloud className="text-2xl pr-2" />}
              {block}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
