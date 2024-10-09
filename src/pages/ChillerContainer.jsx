import React, { useState, useEffect } from 'react';
import './Chiller.css';
import { Card, CardBody, CardTitle } from 'reactstrap';

const Chiller = () => {
  const [coolingEfficiency, setCoolingEfficiency] = useState(75); // Initial efficiency at 75%

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate dynamic cooling efficiency (random value)
      setCoolingEfficiency(Math.random() * 100);
    }, 3000); // Update every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mt-5">
      <Card className="p-4">
        <CardTitle className="text-center mb-4">
          <h4>Chiller System Monitoring</h4>
        </CardTitle>
        <CardBody>
          <div className="chiller-system">
            {/* Pipe Layout */}
            <div className="pipe pipe-hot-in">Hot Water In</div>
            <div className="pipe pipe-hot-out">Hot Water Out</div>
            <div className="pipe pipe-cold-in">Cold Water In</div>
            <div className="pipe pipe-cold-out">Cold Water Out</div>
            
            {/* Chiller Container */}
            <div className="chiller">
              {/* Liquid Flow */}
              <div
                className="liquid-flow"
                style={{
                  width: `${coolingEfficiency}%`,
                  backgroundColor: '#007bff', // Blue liquid color
                  height: '100%',
                  transition: 'width 2s ease' // Smooth animation for flow
                }}
              >
                {/* Cooling Efficiency Display */}
                <div className="efficiency-text">
                  {coolingEfficiency.toFixed(1)}% Efficiency
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Chiller;
