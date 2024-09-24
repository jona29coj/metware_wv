import React from 'react';
import { FaSearch, FaBell } from 'react-icons/fa';
import './TopBar.css';

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="logo">
        {/* Optionally add a logo image here */}
      </div>
      <div className="topbar-right">
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
          />
        </div>
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
