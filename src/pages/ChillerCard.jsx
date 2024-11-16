import React from "react";
import "./ChillerCard.css";

const Chiller = ({ title, cop, loadingPercentage }) => {
  const liquidHeight = 120 * (loadingPercentage / 100);
  const liquidY = 190 - liquidHeight;

  return (
    <div className="chiller-card">
      <h4 className="chiller-title">{title}</h4>
      <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
        {/* Main Chiller Body */}
        <rect x="50" y="50" width="300" height="160" rx="20" ry="20" fill="#D3D3D3" stroke="black" strokeWidth="2" />
        <rect x="70" y="70" width="260" height="120" rx="10" ry="10" fill="white" stroke="black" strokeWidth="2" />
        <rect x="70" y={liquidY} width="260" height={liquidHeight} fill="#2E6A8E" />

        {/* Top Section */}
        <rect x="130" y="20" width="140" height="30" rx="5" ry="5" fill="#D3D3D3" stroke="black" strokeWidth="2" />
        <rect x="140" y="10" width="120" height="40" rx="5" ry="5" fill="#A9A9A9" stroke="black" strokeWidth="2" />

        {/* Bottom Section */}
        <rect x="80" y="210" width="20" height="40" fill="#B0B0B0" stroke="black" strokeWidth="2" />
        <rect x="300" y="210" width="20" height="40" fill="#B0B0B0" stroke="black" strokeWidth="2" />
        <ellipse cx="90" cy="265" rx="12" ry="8" fill="#D3D3D3" stroke="black" strokeWidth="2" />
        <ellipse cx="310" cy="265" rx="12" ry="8" fill="#D3D3D3" stroke="black" strokeWidth="2" />
        <rect x="90" y="255" width="220" height="10" rx="5" fill="#D3D3D3" stroke="black" strokeWidth="2" />

        {/* Bottom Pipes */}
        <rect x="110" y="260" width="40" height="5" fill="#B0B0B0" stroke="black" strokeWidth="2" />
        <rect x="250" y="260" width="40" height="5" fill="#B0B0B0" stroke="black" strokeWidth="2" />
      </svg>
      <div className="chiller-cop">
        <span>COP:</span> {cop}
      </div>
    </div>
  );
};

  

const ChillersCard = () => {
  const phase1Chillers = [
    { title: "Chiller 1", cop: 3.5, loadingPercentage: 50 },
    { title: "Chiller 2", cop: 4.0, loadingPercentage: 70 },
    { title: "Chiller 3", cop: 3.8, loadingPercentage: 60 },
    { title: "Chiller 4", cop: 3.2, loadingPercentage: 40 },
  ];

  const phase2Chillers = [
    { title: "Chiller 5", cop: 3.6, loadingPercentage: 65 },
    { title: "Chiller 6", cop: 3.9, loadingPercentage: 75 },
    { title: "Chiller 7", cop: 4.1, loadingPercentage: 80 },
    { title: "Chiller 8", cop: 3.7, loadingPercentage: 55 },
  ];

  const phaseInfo = [
    {
      phase: "Phase 1",
      hotInletTemp: "60°C",
      hotOutletTemp: "45°C",
      coldInletTemp: "10°C",
      coldOutletTemp: "7°C",
      evaporatorFlowrate: "50 m³/h",
      condenserFlowrate: "75 m³/h",
      chillers: phase1Chillers,
    },
    {
      phase: "Phase 2",
      hotInletTemp: "58°C",
      hotOutletTemp: "44°C",
      coldInletTemp: "12°C",
      coldOutletTemp: "8°C",
      evaporatorFlowrate: "55 m³/h",
      condenserFlowrate: "80 m³/h",
      chillers: phase2Chillers,
    },
  ];

  return (
    <div className="chillers-card-container">
      <div className="card-header">
        <h3 className="card-title">Chillers</h3>
        <input
          type="date"
          className="date-picker"
          defaultValue={new Date().toISOString().split("T")[0]}
        />
      </div>
      <div className="phases-container">
        {phaseInfo.map((phase, index) => (
          <div key={index} className="phase-card">
            <h4 className="phase-title">{phase.phase}</h4>
            <div className="temperature-info">
              <div className="temp-box">
                <span className="temp-label">H-In:</span>
                <span>{phase.hotInletTemp}</span>
              </div>
              <div className="temp-box">
                <span className="temp-label">H-Out:</span>
                <span>{phase.hotOutletTemp}</span>
              </div>
              <div className="temp-box">
                <span className="temp-label">C-In:</span>
                <span>{phase.coldInletTemp}</span>
              </div>
              <div className="temp-box">
                <span className="temp-label">C-Out:</span>
                <span>{phase.coldOutletTemp}</span>
              </div>
            </div>
            <div className="flowrate-info">
              <div className="flowrate-box">
                <span className="flowrate-label">Evaporator Flowrate:</span>
                <span>{phase.evaporatorFlowrate}</span>
              </div>
              <div className="flowrate-box">
                <span className="flowrate-label">Condenser Flowrate:</span>
                <span>{phase.condenserFlowrate}</span>
              </div>
            </div>
            <div className="chillers-grid">
              {phase.chillers.map((chiller, i) => (
                <Chiller
                  key={i}
                  title={chiller.title}
                  cop={chiller.cop}
                  loadingPercentage={chiller.loadingPercentage}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChillersCard;
