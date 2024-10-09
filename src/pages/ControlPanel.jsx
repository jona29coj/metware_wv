import React from 'react';
import './Chiller.css';

const ControlPanel = () => {
  return (
    <div className="control-panel">
      <div className="control-buttons">
        <button className="control-btn">On/Off</button>
        <button className="control-btn">Standby</button>
      </div>
    </div>
  );
};

export default ControlPanel;
