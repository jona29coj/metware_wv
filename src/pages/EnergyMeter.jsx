import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from "recharts";

// Dummy Data for Meters
const energyMeters = [
  { id: 1, activePower: 0.0, apparentPower: 10.5, powerFactor: 0.98, maxDemand: 9.0, reactivePower: 0.5, frequency: 50 },
  { id: 2, activePower: 2.3, apparentPower: 12.4, powerFactor: 0.97, maxDemand: 11.2, reactivePower: 1.1, frequency: 50 },
];

// Dummy Data for Charts
const energyConsumptionData = [
  { time: "00:00", consumption: 50 },
  { time: "03:00", consumption: 80 },
  { time: "06:00", consumption: 120 },
  { time: "09:00", consumption: 400 },
  { time: "12:00", consumption: 800 },
  { time: "15:00", consumption: 1000 },
  { time: "18:00", consumption: 700 },
  { time: "21:00", consumption: 300 },
];

const powerFactorTrendData = [
  { time: "00:00", powerFactor: 0.95 },
  { time: "06:00", powerFactor: 0.92 },
  { time: "12:00", powerFactor: 0.97 },
  { time: "18:00", powerFactor: 0.99 },
  { time: "21:00", powerFactor: 0.96 },
];

const voltageData = [
  { time: "00:00", R: 240, B: 238, Y: 245 },
  { time: "06:00", R: 242, B: 239, Y: 247 },
  { time: "12:00", R: 244, B: 240, Y: 246 },
  { time: "18:00", R: 241, B: 239, Y: 243 },
  { time: "21:00", R: 243, B: 238, Y: 245 },
];

const EnergyMeterSection = () => {
  const [selectedMeterId, setSelectedMeterId] = useState(1);
  const currentMeter = energyMeters.find((meter) => meter.id === selectedMeterId);

  return (
    <div style={{ padding: "20px", fontFamily: "'Arial', sans-serif", color: "#333" }}>
      <h2 style={{ marginBottom: "20px", fontSize: "20px", fontWeight: "600" }}>Energy Meter Overview</h2>

      {/* Flex Layout for Details and Energy Utilization */}
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {/* Meter Details Section */}
        <div
          style={{
            flex: "1 1 300px",
            background: "#fff",
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "15px",
          }}
        >
          <h3 style={{ fontSize: "16px", marginBottom: "10px", fontWeight: "600" }}>Meter Details</h3>
          <p><strong>Active Power:</strong> {currentMeter.activePower} kW</p>
          <p><strong>Apparent Power:</strong> {currentMeter.apparentPower} kVA</p>
          <p><strong>Power Factor:</strong> {currentMeter.powerFactor}</p>
          <p><strong>Maximum Demand:</strong> {currentMeter.maxDemand} kVA</p>
          <p><strong>Reactive Power:</strong> {currentMeter.reactivePower} kVAr</p>
          <p><strong>Frequency:</strong> {currentMeter.frequency} Hz</p>
        </div>

        {/* Energy Utilization Section */}
        <div
          style={{
            flex: "1 1 300px",
            background: "#fff",
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "15px",
          }}
        >
          <h3 style={{ fontSize: "16px", marginBottom: "10px", fontWeight: "600" }}>Energy Utilization</h3>
          <p><strong>Grid:</strong> 90%</p>
          <p><strong>Diesel:</strong> 10% (60 L)</p>
        </div>
      </div>

      {/* Consumption Summary Section */}
      <div style={{ margin: "20px 0", display: "flex", gap: "20px" }}>
        <div style={{ flex: "1", background: "#f1f9f9", padding: "10px", borderRadius: "8px", textAlign: "center" }}>
          <h4>Today's Consumption</h4>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>800 kWh</p>
        </div>
        <div style={{ flex: "1", background: "#f1f9f9", padding: "10px", borderRadius: "8px", textAlign: "center" }}>
          <h4>Weekly Consumption</h4>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>2500 kWh</p>
        </div>
        <div style={{ flex: "1", background: "#f1f9f9", padding: "10px", borderRadius: "8px", textAlign: "center" }}>
          <h4>Yearly Consumption</h4>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>15,000 kWh</p>
        </div>
      </div>

      {/* Energy Consumption Chart */}
      <div style={{ margin: "20px 0", background: "#fff", border: "1px solid #ddd", borderRadius: "8px", padding: "20px" }}>
        <h3 style={{ fontSize: "16px", marginBottom: "10px", fontWeight: "600" }}>Energy Consumption</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={energyConsumptionData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
            <XAxis dataKey="time" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Bar dataKey="consumption" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Power Factor Trend Chart */}
      <div style={{ margin: "20px 0", background: "#fff", border: "1px solid #ddd", borderRadius: "8px", padding: "20px" }}>
        <h3 style={{ fontSize: "16px", marginBottom: "10px", fontWeight: "600" }}>Power Factor Trend</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={powerFactorTrendData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
            <XAxis dataKey="time" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Line type="monotone" dataKey="powerFactor" stroke="#82ca9d" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Voltage Chart */}
      <div style={{ margin: "20px 0", background: "#fff", border: "1px solid #ddd", borderRadius: "8px", padding: "20px" }}>
        <h3 style={{ fontSize: "16px", marginBottom: "10px", fontWeight: "600" }}>Voltage</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={voltageData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
            <XAxis dataKey="time" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="R" stroke="#ff0000" strokeWidth={2} />
            <Line type="monotone" dataKey="B" stroke="#0000ff" strokeWidth={2} />
            <Line type="monotone" dataKey="Y" stroke="#ffaa00" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EnergyMeterSection;
