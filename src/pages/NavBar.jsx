import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaTachometerAlt, FaBolt, FaCogs, FaChartLine, FaBell, FaFileAlt, FaBars, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './NavBar.css';
import logo from '../pages/logo.png';

const NavBar = () => {
  // State to track if the navbar is open or closed
  const [isExpanded, setIsExpanded] = useState(true); // Expanded state

  // Function to toggle the expansion of the navbar
  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <nav className={`navbar ${isExpanded ? '' : 'collapsed'}`}>
      <div className="navbar-header">
        <img src={logo} alt="Logo" className={`navbar-logo ${isExpanded ? '' : 'collapsed-logo'}`} />

        {/* Toggle Button */}
        <button className="navbar-toggle" onClick={toggleNavbar}>
          {isExpanded ? <FaChevronLeft /> : <FaChevronRight />}
        </button>
      </div>

      {/* Navbar Links */}
      <ul className="navbar-list">
        <li style={{ '--i': 1 }}>
          <NavLink to="/dashboard" className="navbar-item" activeClassName="active">
            <FaTachometerAlt className="navbar-icon" />
            {isExpanded && <span>Dashboard</span>}
          </NavLink>
        </li>
        <li style={{ '--i': 2 }}>
          <NavLink to="/monitor" className="navbar-item" activeClassName="active">
            <FaBolt className="navbar-icon" />
            {isExpanded && <span>Monitor</span>}
          </NavLink>
        </li>
        <li style={{ '--i': 3 }}>
          <NavLink to="/control" className="navbar-item" activeClassName="active">
            <FaCogs className="navbar-icon" />
            {isExpanded && <span>Control</span>}
          </NavLink>
        </li>
        <li style={{ '--i': 4 }}>
          <NavLink to="/optimize" className="navbar-item" activeClassName="active">
            <FaChartLine className="navbar-icon" />
            {isExpanded && <span>Optimize</span>}
          </NavLink>
        </li>
        <li style={{ '--i': 5 }}>
          <NavLink to="/alerts" className="navbar-item" activeClassName="active">
            <FaBell className="navbar-icon" />
            {isExpanded && <span>Alerts</span>}
          </NavLink>
        </li>
        <li style={{ '--i': 6 }}>
          <NavLink to="/reports" className="navbar-item" activeClassName="active">
            <FaFileAlt className="navbar-icon" />
            {isExpanded && <span>Reports</span>}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
