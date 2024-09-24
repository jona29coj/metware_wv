import React from 'react';
import NavBar from './NavBar';
import TopBar from './TopBar';
import './Home.css';
import HomePage from './HomePage'; // Import the new HomePage component

const Home = () => {
  return (
    <div className="app-container">
      <TopBar />
      <NavBar />
      <div className="main-content">
        <div className="content-area">
          {/* Updated heading */}
          <h2 className="dashboard-heading">Welcome to Elements Energy Dashboard</h2>
          {/* Integrate the HomePage component here */}
          <HomePage />
        </div>
      </div>
    </div>
  );
};

export default Home;
