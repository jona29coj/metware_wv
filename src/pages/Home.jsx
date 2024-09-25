import React, { useState } from 'react';
import NavBar from './NavBar';
import TopBar from './TopBar';
import './Home.css';
import HomePage from './HomePage'; // Import the new HomePage component

const Home = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  // Toggle function to collapse or expand the navbar
  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="app-container">
      <TopBar toggleNavbar={toggleNavbar} isExpanded={isExpanded} />
      <NavBar isExpanded={isExpanded} />
      <div className="main-content">
        <div className="content-area">
          {/* Updated heading */}
          {/* Integrate the HomePage component here */}
          <HomePage />
        </div>
      </div>
    </div>
  );
};

export default Home;
