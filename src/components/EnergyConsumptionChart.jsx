import React from "react";
import Plot from "react-plotly.js";

const EnergyConsumptionChart = () => {
  // Days of the month (1–31)
  const dayNumbers = Array.from({ length: 31 }, (_, i) => i + 1);

  // Hours of the day (0:00–23:00)
  const hoursOfDay = Array.from({ length: 24 }, (_, i) => `${i}:00`);

  // Generate random whole numbers for energy consumption (kWh) between 10 and 50
  const generateRandomData = (rows, cols) =>
    Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => Math.floor(Math.random() * (50 - 10 + 1) + 10))
    );

  const energyConsumptionData = generateRandomData(24, 31); // 24 hours for 31 days

  return (
    <div className="w-full h-full">
      <Plot
        data={[
          {
            z: energyConsumptionData,
            x: dayNumbers, // Day numbers as labels
            y: hoursOfDay,
            type: "heatmap",
            colorscale: [
              [0, "lightgreen"], // Light green for the lowest value
              [0.5, "yellowgreen"], // Mid-level green shade
              [1, "darkgreen"], // Dark green for the highest value
            ],
            colorbar: { title: "Energy (kWh)", titleside: "right" },
            hovertemplate:
              "Day: %{x}<br>Hour: %{y}<br>Energy Consumption: %{z} kWh<extra></extra>", // Custom tooltip
          },
        ]}
        layout={{
          title: null,
          xaxis: {
            title: "Day",
            titlefont: { size: 14 },
            tickangle: 0,
            automargin: true,
            tickmode: "array", // Explicitly show all ticks
            tickvals: dayNumbers, // All day numbers (1–31)
            ticktext: dayNumbers.map(String), // Ensure labels are strings
          },
          yaxis: {
            title: "Hour",
            titlefont: { size: 14 },
            automargin: true,
          },
          autosize: true,
          margin: { t: 50, l: 80, r: 50, b: 50 },
        }}
        config={{
          responsive: true,
          displaylogo: false, // Disable the Plotly logo
        }}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default EnergyConsumptionChart;
