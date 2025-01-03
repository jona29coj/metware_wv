import React from "react";

// EnergyMeter Component
const EnergyMeter = ({ name, totalKW, maxKW, consumption, cost }) => {
  const percentage = (totalKW / maxKW) * 100;

  return (
    <div
      style={{
        border: "2px solid #333",
        borderRadius: "20px",
        padding: "16px",
        background: "linear-gradient(145deg, #e6f3ff, #cde9f8)", // Enhanced gradient
        width: "220px",
        height: "300px",
        boxShadow: "inset 0 -4px 8px rgba(0, 0, 0, 0.2), 0 8px 16px rgba(0, 0, 0, 0.2)", // Enhanced shadow
        textAlign: "center",
        position: "relative",
      }}
    >
      {/* Zone Label */}
      <div
        style={{
          fontWeight: "bold",
          fontSize: "16px",
          color: "#222",
          backgroundColor: "#fff",
          borderRadius: "12px",
          padding: "6px 12px",
          position: "absolute",
          top: "-14px",
          left: "50%",
          transform: "translateX(-50%)",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        }}
      >
        {name}
      </div>

      {/* Gauge */}
      <div
        style={{
          position: "relative",
          margin: "24px auto",
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          background: `conic-gradient(${percentage > 75 ? "orange" : "green"} ${percentage}%, #ddd ${percentage}%)`,
          border: "4px solid #fff", // Enhanced contrast for gauge
          boxShadow: "0 0 6px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90px",
            height: "90px",
            borderRadius: "50%",
            background: "#e6f3ff",
            border: "2px solid #ddd",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.2)",
          }}
        >
          <div>
            <div
              style={{
                fontWeight: "bold",
                fontSize: "18px",
                color: percentage > 75 ? "orange" : "green",
              }}
            >
              {totalKW.toFixed(2)} kW
            </div>
            <div style={{ fontSize: "12px", color: "#666" }}>Total</div>
          </div>
        </div>
      </div>

      {/* Readings Section */}
      <div
        style={{
          marginTop: "20px",
          fontSize: "12px",
          color: "#333",
          backgroundColor: "#fff",
          borderRadius: "10px",
          padding: "10px",
          boxShadow: "inset 0 0 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div style={{ marginBottom: "8px" }}>
          <strong>Consumption:</strong> {consumption.toLocaleString()} kWh
        </div>
        <div>
          <strong>Cost:</strong> ₹{cost.toLocaleString()}
        </div>
      </div>
    </div>
  );
};

// MeterInfo Component
const MeterInfo = () => {
  // Sample data
  const energyMeters = Array.from({ length: 10 }, (_, index) => ({
    name: `Zone ${index + 1}`,
    totalKW: Math.random() * 1200, // Random data for demo
    maxKW: 1200,
    consumption: Math.random() * 20000,
    cost: Math.random() * 100000,
  }));

  return (
    <div
      style={{
        padding: "24px",
        background: "white",
        borderRadius: "12px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
              <h2 className="text-xl font-semibold pb-8">Energy Meters</h2>


      {/* Responsive Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "24px",
          justifyItems: "center",
        }}
      >
        {energyMeters.map((meter, index) => (
          <EnergyMeter key={index} {...meter} />
        ))}
      </div>
    </div>
  );
};

export default MeterInfo;
