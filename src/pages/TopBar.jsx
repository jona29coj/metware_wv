import React from 'react';
import { FaChevronRight, FaBell, FaMicrophone, FaSearch } from 'react-icons/fa';
import './TopBar.css';

const TopBar = ({ toggleNavbar, isExpanded }) => {
  return (
    <div className="topbar">
      {/* Navbar Toggle Button */}
      <button 
        className={`flip-toggle ${!isExpanded ? 'collapsed' : ''}`} 
        onClick={toggleNavbar}
      >
        <div className={`arrow ${isExpanded ? 'arrow-right' : 'arrow-left'}`}>
          <FaChevronRight />
        </div>
      </button>

      {/* Search Bar */}
      <div className="search-container">
        <FaSearch className="search-icon" />
        <input type="text" className="search-bar" placeholder="Search..." />
        <FaMicrophone className="microphone-icon" />
      </div>

      {/* Right Side of the Top Bar */}
      <div className="topbar-right">
        <div className="notification-container">
          <FaBell className="notification-icon" />
          <div className="notification-count">3</div>
        </div>

        {/* Profile Section with Picture and Name */}
        <div className="profile-container">
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="Profile"
            className="profile-picture"
          />
          <span className="user-name">Mr. Tom Loui</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
