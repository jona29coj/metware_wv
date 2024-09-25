import React from 'react';
import { FaChevronRight,FaBell } from 'react-icons/fa';
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
        <input type="text" className="search-bar" placeholder="Search..." />
      </div>

      {/* Right Side of the Top Bar */}
      <div className="topbar-right">
        <div className="notification-container">
          <FaBell className="notification-icon" />
          <div className="notification-count">3</div>
        </div>

        <img
          src="https://randomuser.me/api/portraits/men/75.jpg"
          alt="Profile"
          className="profile-picture"
        />
      </div>
    </div>
  );
};

export default TopBar;
