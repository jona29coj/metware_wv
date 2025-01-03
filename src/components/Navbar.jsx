import React, { useState, useEffect } from 'react';
import { FaBell, FaSearch } from 'react-icons/fa';
import userprofile from "../components/userprofile.png";
import DateSelector from './DateSelector';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isSingleDay, setIsSingleDay] = useState(false); // Toggle between single day and date range

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

  // Handle date changes from DateSelector
  const handleDateChange = (newStartDate, newEndDate) => {
    setStartDate(newStartDate);
    setEndDate(newEndDate);
  };

  return (
    <div>
      {/* Navbar */}
      <div
        className={`transition-all duration-300 fixed top-0 left-0 right-0 z-50 bg-white shadow-md ${
          isScrolled ? 'shadow-lg' : ''
        } ml-56 py-2`}
      >
        <div className="flex items-center justify-between px-3">
          {/* Search Bar with Details */}
          <div className="flex items-center">
            {/* Search Bar */}
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

            {/* Details */}
            <div className="flex pl-3 text-sm text-gray-600 space-x-4">
              <p>
                Normal Rs./Unit: <span className="text-blue-600">₹6.10</span>
              </p>
              <p>
                Peak Rs./Unit: <span className="text-red-600">₹9.15</span>
              </p>
              <p>
                OFF-Peak Rs./Unit: <span className="text-orange-600">₹4.58</span>
              </p>
            </div>
          </div>

          {/* Notification Bell & Date Selector */}
          <div className="flex items-center space-x-4 ml-auto">
            {/* Date Selector */}
            <DateSelector
              isSingleDay={isSingleDay}
              setIsSingleDay={setIsSingleDay}
              onDateChange={handleDateChange}
            />

            {/* Notification Bell */}
            <FaBell className="text-gray-600 text-xl cursor-pointer hover:text-blue-500" />

            {/* User Profile */}
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
    </div>
  );
};

export default Navbar;
