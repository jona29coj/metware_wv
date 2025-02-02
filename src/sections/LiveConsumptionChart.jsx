import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const LiveConsumption = () => {
  const timeCategories = [
    "00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", 
    "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", 
    "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "23:59"
  ];

  const data = [
    10, 12, 14, 15, 16, 18, 20, 22, 24, 25, 27, 30, 32, 35, 37, 40, 42, 43, 45, 
    46, 48, 50, 53, 55
  ];

  // Function to calculate the total consumption for each block
  const getBlockConsumption = (startIndex, endIndex) => {
    return data.slice(startIndex, endIndex).reduce((total, current) => total + current, 0);
  };

  // Function to generate data segments for each color block
  const getColoredData = () => {
    const greenData = data.slice(0, 7);   // First 6 hours with Green
    const greenData2 = data.slice(5, 12); // Second 6 hours with Green
    const redData = data.slice(11, 18);   // Third 6 hours with Red
    const orangeData = data.slice(17);    // Fourth 6 hours with Orange

    return { greenData, greenData2, redData, orangeData };
  };

 const chartOptions = {
  chart: {
    type: "area",
    backgroundColor: "transparent",
    spacingTop: 20,
    spacingBottom: 0,
  },
  title: {
    text: null,
    style: { fontSize: "18px", color: "#333" },
  },
  xAxis: {
    categories: timeCategories,
    title: { text: "Time", style: { fontSize: "14px", color: "#666" } },
    tickInterval: 6,
    gridLineWidth: 0,
    labels: {
      rotation: 0,
      formatter: function () {
        return this.value ; // Ensure correct mapping
      }
    }
  },
  yAxis: {
    title: { text: "Energy (kWh)", style: { fontSize: "14px", color: "#666" } },
    gridLineWidth: 0,
  },
  plotOptions: {
    area: {
      fillOpacity: 0.5,
      marker: {
        enabled: false,
      },
    },
  },
  series: [
    {
      name: "Normal (00:00 - 06:00)",
      data: getColoredData().greenData,
      color: "#28a745",
      fillColor: "rgba(40, 167, 69, 0.5)",
      pointStart: 0,
    },
    {
      name: "Normal (06:00 - 12:00)",
      data: getColoredData().greenData2,
      color: "#28a745",
      fillColor: "rgba(40, 167, 69, 0.5)",
      pointStart: 6,
    },
    {
      name: "Peak (12:00 - 18:00)",
      data: getColoredData().redData,
      color: "#dc3545",
      fillColor: "rgba(220, 53, 69, 0.5)",
      pointStart: 12,
    },
    {
      name: "Off-Peak (18:00 - 23:59)",
      data: getColoredData().orangeData,
      color: "#fd7e14",
      fillColor: "rgba(253, 126, 20, 0.5)",
      pointStart: 18,
    },
  ],
  tooltip: {
    shared: true,
    valueSuffix: " kWh",
    xDateFormat: "%H:%M",
    crosshairs: false,
    formatter: function () {
      let totalConsumption = 0;
      if (this.series.name === "Green Block (00:00 - 06:00)") {
        totalConsumption = getBlockConsumption(0, 7);
      } else if (this.series.name === "Green Block (06:00 - 12:00)") {
        totalConsumption = getBlockConsumption(5, 12);
      } else if (this.series.name === "Red Block (12:00 - 18:00)") {
        totalConsumption = getBlockConsumption(11, 18);
      } else if (this.series.name === "Orange Block (18:00 - 24:00)") {
        totalConsumption = getBlockConsumption(17, 24);
      }

      return `Total Consumption for ${this.series.name}: <b>${totalConsumption} kWh</b>`;
    },
  },
  legend: {
    enabled: true,
    layout: "horizontal", // Set to horizontal to place legends below
    align: "center", // Center legends horizontally
    verticalAlign: "bottom", // Place legends at the bottom
  },
  credits: {
    enabled: false,
  },
  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 768,
        },
        chartOptions: {
          chart: {
            height: 300,
          },
        },
      },
    ],
  },
};

  

  return (
    <div className="w-full flex flex-col p-6 bg-white shadow-lg rounded-lg">
      {/* Header Section */}
      <div className="flex justify-between items-center pb-6">
        <h2 className="text-xl font-semibold">Live Consumption</h2>
      </div>

      {/* Chart Section */}
      <div style={{ width: "100%", height: "400px" }}>
        <HighchartsReact
          highcharts={Highcharts}
          options={chartOptions}
        />
      </div>
    </div>
  );
};

export default LiveConsumption;
