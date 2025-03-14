import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import 'tailwindcss/tailwind.css';

const LiveConsumption = () => {
  // Data for energy consumption (in kWh) for each hour of the day
  const energyData = {
    "1": 5,   // kWh
    "2": 6,   // kWh
    "3": 7,   // kWh
    "4": 8,   // kWh
    "5": 9,   // kWh
    "6": 10,  // kWh
    "7": 11,  // kWh
    "8": 12,  // kWh
    "9": 13,  // kWh
    "10": 14, // kWh
    "11": 15, // kWh
    "12": 16, // kWh
    "13": 17, // kWh
    "14": 18, // kWh
    "15": 19, // kWh
    "16": 20, // kWh
    "17": 21, // kWh
    "18": 22, // kWh
    "19": 23, // kWh
    "20": 24, // kWh
    "21": 25, // kWh
    "22": 26, // kWh
    "23": 27, // kWh
    "24": 28, // kWh
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
        data: Object.values(energyData).map((value, index) => ({
          y: value,
          color: index < 6 || index >= 18 ? "rgba(76, 175, 80, 0.7)" : "rgba(255, 152, 0, 0.7)",  // Green for 1-6 and 18-24, Orange for 7-17
        })),
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