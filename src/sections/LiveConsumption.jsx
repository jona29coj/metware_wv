import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import 'tailwindcss/tailwind.css';

const LiveConsumption = () => {
  // Data for energy consumption (in kWh)
  const energyData = {
    "00:00 - 05:59": 120,  // kWh
    "06:00 - 11:59": 150,  // kWh
    "12:00 - 17:59": 80,   // kWh
    "18:00 - 23:59": 100,  // kWh
  };

  const chartOptions = {
    chart: {
      type: "column", // Vertical bar chart
    },
    title: {
      text: null,
      style: { fontSize: "18px", color: "#333" },
    },
    xAxis: {
      categories: Object.keys(energyData),
      title: {
        text: null,
        style: { fontSize: "14px", color: "#666" },
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: null,
        style: { fontSize: "14px", color: "#666" },
      },
      gridLineWidth: 0, // Removes grid lines on the y-axis
      labels: {
        style: {
          fontSize: "12px", // Font size for the numbers on y-axis
        },
      },
    },
    plotOptions: {
      column: {
        dataLabels: {
          enabled: true,
          style: {
            fontWeight: "bold",
            color: "black",
          },
        },
      },
    },
    series: [
      {
        name: "Energy Consumption",
        data: [
          {
            y: energyData["00:00 - 05:59"],
            color: "rgba(76, 175, 80, 0.7)",  // Green with opacity
          },
          {
            y: energyData["06:00 - 11:59"],
            color: "rgba(76, 175, 80, 0.7)",  // Green with opacity
          },
          {
            y: energyData["12:00 - 17:59"],
            color: "rgba(244, 67, 54, 0.7)",  // Red with opacity
          },
          {
            y: energyData["18:00 - 23:59"],
            color: "rgba(255, 152, 0, 0.7)",  // Orange with opacity
          },
        ],
      },
    ],
    tooltip: {
      shared: true,
      valueSuffix: " kWh",
    },
    legend: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
  };

  return (
    <div className="w-full flex flex-col p-6 bg-white shadow-lg rounded-lg">
      <div className="flex justify-between items-center pb-6">
        <h2 className="text-xl font-semibold">Live Consumption</h2>
      </div>
      <div style={{ width: "100%", height: "400px" }}>
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      </div>
    </div>
  );
};

export default LiveConsumption;
