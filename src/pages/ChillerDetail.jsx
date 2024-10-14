import React, { useState } from 'react';
import '../pages/ChillerDetail.css'; // Ensure you link the CSS file properly

const ChillerDetail = () => {
  const [error, setError] = useState(false);

  // Mock function to toggle error
  const toggleError = () => {
    setError(!error);
  };

  return (
    <div className="chiller-detail-container">
      <h1>Chiller 1 Detailed View</h1>

      {/* Chiller Diagram Section */}
      <div className="chiller-diagram">
        <div className="chiller-system">
          
          {/* Compressor */}
          <div className="compressor">
            <h3>Compressor</h3>
            <div className="compressor-body"></div>
            <div className="compressor-blades"></div>
          </div>

          {/* Cooling Coil */}
          <div className="cooling-coil-section">
            <h3>Cooling Coil</h3>
            <div className="cooling-coil"></div>
          </div>

          {/* Condenser */}
          <div className="condenser-section">
            <h3>Condenser</h3>
            <div className="condenser"></div>
          </div>

        </div>

        {/* Pipes and Flow */}
        <div className="piping-system">
          <h3>Pipes and Liquid Flow</h3>
          <div className="pipe">
            <div className="flow"></div>
          </div>
        </div>

        {/* Gauge */}
        <div className="gauge">
          <h3>Pressure Gauge</h3>
          <div className="gauge-display">120 psi</div>
        </div>
      </div>

      {/* Mini-Cards */}
      <div className="mini-cards">
        <div className="mini-card">
          <h4>Temperature</h4>
          <p>34°C</p>
        </div>
        <div className="mini-card">
          <h4>Flow Rate</h4>
          <p>25 L/min</p>
        </div>
        <div className="mini-card">
          <h4>Power Usage</h4>
          <p>150 kWh</p>
        </div>
      </div>

      {/* Error Section */}
      {error && (
        <div className="error-section">
          <h3>Error Detected</h3>
          <p>There is an issue with the compressor. Please check the system for faults.</p>
        </div>
      )}

      {/* Toggle Error Button */}
      <div className="toggle-error">
        <button onClick={toggleError}>
          {error ? 'Clear Error' : 'Simulate Error'}
        </button>
      </div>
    </div>
  );
};

export default ChillerDetail;
