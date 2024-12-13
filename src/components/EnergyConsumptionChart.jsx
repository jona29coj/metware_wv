import React from "react";
import Plot from "react-plotly.js";

const EnergyConsumptionChart = () => {
  const xLabels = Array.from({ length: 31 }, (_, i) => `Day ${i + 1}`);
  const yLabels = Array.from({ length: 24 }, (_, i) => `${i}:00`);
  const zValues = Array.from({ length: 24 }, () =>
    Array.from({ length: 31 }, () => Math.random() * 5) // Random data for heatmap
  );

  return (
    <div className="w-full h-full">
      <Plot
        data={[
          {
            z: zValues,
            x: xLabels,
            y: yLabels,
            type: "heatmap",
            colorscale: "YlOrRd",
            colorbar: { title: "kWh", titleside: "right" },
          },
        ]}
        layout={{
          title: null,
          xaxis: {
            title: "Day of Month",
            titlefont: { size: 14 },
            tickangle: 45, // Rotate the x-axis labels for better spacing
            tickmode: "array",
            tickvals: xLabels,
            ticktext: xLabels,
            tickangle: 45,
            automargin: true,
            pad: { t: 30 }, // Padding at the top of the x-axis
          },
          yaxis: {
            title: "Hour of Day",
            titlefont: { size: 14 },
            tickangle: 0,
            automargin: true,
            pad: { r: 30 }, // Padding at the right of the y-axis
          },
          autosize: true,
          margin: { t: 50, l: 80, r: 50, b: 50 },
        }}
        config={{
          responsive: true,
          displaylogo: false, // This disables the Plotly logo
        }}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default EnergyConsumptionChart;
