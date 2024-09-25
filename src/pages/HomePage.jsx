import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import './HomePage.css';
import car from "../pages/carmov.png"

// Register the necessary components
ChartJS.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const HomePage = () => {
  // Sample data for the pie chart
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

  // Sample data for the bar chart
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

  // State for the feedback slider
  const [feedback, setFeedback] = useState(50); // Initial slider value

  // Handler for slider change
  const handleSliderChange = (event) => {
    setFeedback(event.target.value);
  };

  // Feedback message based on slider value
  const feedbackMessage = feedback < 30 ? 'Poor' : feedback < 70 ? 'Average' : 'Excellent';

  return (
    <div className="homepage">
      <div className="card-container">
        {/* Top Row: Three New Cards */}
        <div className="top-row">
          {/* Animated Car Card */}
          <div className="card animated-car-card">
            <h2>Car Animation</h2>
            <div className="techpark-container">
              <div className="car">
                <img src={car} alt="Car" className="car-image" />
              </div>
            </div>
          </div>

          {/* Feedback Card */}
          <div className="card feedback-card">
            <h2>Feedback: {feedbackMessage}</h2>
            <div className="feedback-chart">
              {/* Range slider for feedback */}
              <input
                type="range"
                min="0"
                max="100"
                value={feedback}
                onChange={handleSliderChange}
                className="slider"
              />

              {/* Feedback representation */}
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

        {/* Second Row: Energy Sources and Building Consumption */}
        <div className="middle-row">
          {/* Card 1: Energy Sources */}
          <div className="card">
            <h2>Energy Sources</h2>
            <div className="chart-container">
              <Bar data={barData} options={{ responsive: true, maintainAspectRatio: false }} />
            </div>
            <p>Description of the energy sources goes here.</p>
          </div>

          {/* Card 2: Building Consumption */}
          <div className="card">
            <h2>Building Consumption</h2>
            <div className="chart-container">
              <Pie data={pieData} className='pie-chart' />
            </div>
            <p>Overview of building energy consumption.</p>
          </div>
        </div>

        {/* Third Row: Chillers Information */}
        <div className="card">
          <h2>Chillers Information</h2>
          <img 
            src="https://via.placeholder.com/300x200.png?text=Chillers" 
            alt="Chillers" 
            className="chiller-image" 
          />
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
