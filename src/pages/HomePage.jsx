import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import './HomePage.css';
import car from "../pages/carmov.png";

// Register the necessary components
ChartJS.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const HomePage = () => {
  const pieData = {
    labels: ['Energy A', 'Energy B', 'Energy C'],
    datasets: [
      {
        label: 'Building Consumption',
        data: [300, 200, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const barData = {
    labels: ['Block 1', 'Block 2'],
    datasets: [
      {
        label: 'Total Electrical Energy (kWh)',
        data: [120, 80],
        backgroundColor: 'rgba(56, 189, 148, 0.6)',
      },
      {
        label: 'Total Cooling Energy (kWh)',
        data: [100, 60],
        backgroundColor: 'rgba(37, 99, 235, 0.6)',
      },
    ],
  };

  const [feedback, setFeedback] = useState(50);
  const handleSliderChange = (event) => {
    setFeedback(event.target.value);
  };
  const feedbackMessage = feedback < 30 ? 'Poor' : feedback < 70 ? 'Average' : 'Excellent';

  const [footprints, setFootprints] = useState([]);

  useEffect(() => {
    const techParkContainer = document.querySelector('.techpark-container');
    const carElement = document.querySelector('.car');

    const leaveFootprint = () => {
      const footprint = document.createElement('div');
      footprint.className = 'footprint';
      footprint.style.left = `${carElement.offsetLeft + carElement.offsetWidth / 2 - 10}px`; // Center the footprint
      footprint.style.bottom = '50px';

      techParkContainer.appendChild(footprint);

      setTimeout(() => {
        footprint.remove();
      }, 2000); // Footprint remains for 2 seconds
    };

    const footprintInterval = setInterval(leaveFootprint, 600); // Adjust timing as needed

    return () => clearInterval(footprintInterval);
  }, []);

  return (
    <div className="homepage">
      <div className="card-container">
        <div className="top-row">
          <div className="card animated-car-card">
            <div className="techpark-container">
              <div className="car">
                <img src={car} alt="Car" className="car-image" />
              </div>
            </div>
          </div>
          <div className="card feedback-card">
            <h2>Feedback: {feedbackMessage}</h2>
            <div className="feedback-chart">
              <input
                type="range"
                min="0"
                max="100"
                value={feedback}
                onChange={handleSliderChange}
                className="slider"
              />
              <div className="feedback-bar" style={{ width: `${feedback}%`, backgroundColor: feedback < 30 ? '#e74c3c' : feedback < 70 ? '#f1c40f' : '#2ecc71' }}>
                {feedback}%
              </div>
            </div>
            <p>Slide to adjust feedback: {feedbackMessage}</p>
          </div>
          <div className="card">
            <h2>New Card 3</h2>
            <p>Content for the third new card goes here.</p>
          </div>
        </div>
        <div className="middle-row">
          <div className="card">
            <h2>Energy Sources</h2>
            <div className="chart-container">
              <Bar data={barData} options={{ responsive: true, maintainAspectRatio: false }} />
            </div>
            <p>Description of the energy sources goes here.</p>
          </div>
          <div className="card">
            <h2>Building Consumption</h2>
            <div className="chart-container">
              <Pie data={pieData} className='pie-chart' />
            </div>
            <p>Overview of building energy consumption.</p>
          </div>
        </div>
        <div className="card">
          <h2>Chillers Information</h2>
          <img src="https://via.placeholder.com/300x200.png?text=Chillers" alt="Chillers" className="chiller-image" />
          <div className="chiller-block">
            <h3>Block 1</h3>
            <p>Total Electrical Energy: 120 kWh</p>
            <p>Total Cooling Energy: 100 kWh</p>
          </div>
          <div className="chiller-block">
            <h3>Block 2</h3>
            <p>Total Electrical Energy: 80 kWh</p>
            <p>Total Cooling Energy: 60 kWh</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
