import React, { useState } from "react";
import Chart from "react-apexcharts";

const LiveConsumption = () => {
  const [activeRange, setActiveRange] = useState("All");
  const [activeToggle, setActiveToggle] = useState("Energy");

  const timeCategories = {
    All: ["6:00", "9:00", "12:00", "15:00", "18:00", "21:00", "0:00", "3:00"],
    Normal: ["6:00", "9:00", "12:00", "15:00", "18:00"],
    Peak: ["18:00", "19:00", "20:00", "21:00", "22:00"],
    "Off-Peak": ["22:00", "0:00", "1:00", "2:00", "3:00"],
  };

  const data = {
    All: {
      Energy: [10, 20, 30, 40, 50, 60, 70, 80],
      Cost: [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000],
    },
    Normal: {
      Energy: [10, 20, 30, 40, 50],
      Cost: [1000, 2000, 3000, 4000, 5000],
    },
    Peak: {
      Energy: [50, 60, 70, 80, 90],
      Cost: [5000, 6000, 7000, 8000, 9000],
    },
    "Off-Peak": {
      Energy: [5, 10, 15, 20, 25],
      Cost: [500, 1000, 1500, 2000, 2500],
    },
  };

  const chartOptions = {
    chart: {
      id: "live-consumption-chart",
      background: "transparent",
      toolbar: { show: false },
    },
    xaxis: {
      categories: timeCategories[activeRange],
      title: { text: "Time", style: { fontSize: "14px", color: "#666" } },
    },
    yaxis: {
      title: {
        text: activeToggle === "Energy" ? "Energy (kWh)" : "Cost (₹)",
        style: { fontSize: "14px", color: "#666" },
      },
    },
    colors:
      activeToggle === "Energy"
        ? activeRange === "Normal"
          ? ["#1E90FF"]
          : activeRange === "Peak"
          ? ["#FF6347"]
          : ["#FFA500"]
        : ["#1E90FF"],
    stroke: { curve: "smooth", width: 3 },
    markers: { size: 4 },
    grid: { borderColor: "#e7e7e7" },
    tooltip: {
      shared: true,
      intersect: false,
      x: { format: "hh:mm" },
      marker: { show: true },
    },
    legend: { position: "top", horizontalAlign: "right" },
  };

  const series =
    activeToggle === "Energy"
      ? [
          {
            name: "Energy",
            data: data[activeRange].Energy,
          },
        ]
      : [
          {
            name: "Cost",
            data: data[activeRange].Cost,
          },
        ];

  return (
    <div className="w-full p-6 bg-white shadow-lg rounded-lg">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Live Consumption</h2>
        <div className="flex space-x-4">
          {/* Toggle Between Energy/Cost */}
          <div className="flex border rounded overflow-hidden">
            {["Energy", "Cost"].map((label) => (
              <button
                key={label}
                className={`px-4 py-2 text-white font-medium transition-all ${
                  activeToggle === label
                    ? "bg-green-500 shadow"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                }`}
                onClick={() => setActiveToggle(label)}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Time Range Tabs */}
          <div className="flex border rounded overflow-hidden">
            {["All", "Normal", "Peak", "Off-Peak"].map((label) => (
              <button
                key={label}
                className={`px-4 py-2 text-white font-medium transition-all ${
                  activeRange === label
                    ? `bg-${label === "Normal" ? "blue" : label === "Peak" ? "red" : "orange"}-500 shadow`
                    : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                }`}
                onClick={() => setActiveRange(label)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div style={{ width: "100%", height: "400px" }}>
        <Chart
          options={chartOptions}
          series={series}
          type={activeToggle === "Energy" ? "area" : "line"}
          height="400"
          width="100%"
        />
      </div>
    </div>
  );
};

export default LiveConsumption;
