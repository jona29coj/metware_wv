import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import 'tailwindcss/tailwind.css';

const ZoneUsage = () => {
  // Data for zone consumption (in percentage and kWh)
  const zoneData = [
    { name: 'Zone 1', y: 8, color: 'rgba(76, 175, 80, 0.7)', kWh: 150 },
    { name: 'Zone 2', y: 4, color: 'rgba(76, 175, 80, 0.7)', kWh: 80 },
    { name: 'Zone 3', y: 6, color: 'rgba(244, 67, 54, 0.7)', kWh: 100 },
    { name: 'Zone 4', y: 8, color: 'rgba(244, 67, 54, 0.7)', kWh: 120 },
    { name: 'Zone 5', y: 10, color: 'rgba(255, 152, 0, 0.7)', kWh: 180 },
    { name: 'Zone 6', y: 5, color: 'rgba(255, 152, 0, 0.7)', kWh: 90 },
    { name: 'Zone 7', y: 3, color: 'rgba(76, 175, 80, 0.7)', kWh: 60 },
    { name: 'Zone 8', y: 7, color: 'rgba(244, 67, 54, 0.7)', kWh: 130 },
    { name: 'Zone 9', y: 9, color: 'rgba(255, 152, 0, 0.7)', kWh: 170 },
    { name: 'Zone 10', y: 10, color: 'rgba(76, 175, 80, 0.7)', kWh: 180 },
  ];

  // Chart options for Zone Consumption
  const zoneChartOptions = {
    chart: {
      type: 'pie',
      height: '400px',
    },
    title: {
      text: null,
    },
    plotOptions: {
      pie: {
        innerSize: '40%', // Makes the chart a donut
        dataLabels: {
          enabled: true,
          format: '{point.percentage:.0f}%', // Remove decimals from percentage
          style: {
            fontSize: '14px',
            fontWeight: 'bold',
            color: 'black', // Set label color to black
            textOutline: 'none', // Remove outline
          },
          distance: -60, // Move labels to the center of the donut
        },
        colors: zoneData.map((item) => item.color),
      },
    },
    series: [
      {
        name: 'Consumption',
        data: zoneData.map((item) => ({
          name: item.name,
          y: item.y,
          color: item.color,
          kWh: item.kWh, // Include kWh for tooltip
        })),
      },
    ],
    tooltip: {
      pointFormatter: function () {
        // Only show zone name once and consumption value
        return `Consumption: <b>${this.kWh} kWh</b>`;
      },
      backgroundColor: 'rgba(255, 255, 255, 0.8)', // Light background for tooltip
      borderColor: '#ccc', // Border color for the tooltip
      borderWidth: 1, // Border width for the tooltip
      style: {
        fontSize: '14px', // Font size for the tooltip
        color: '#333', // Text color for the tooltip
      },
    },
    credits: {
      enabled: false,
    },
    legend: {
      enabled: true,
    },
  };
  
  
  

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full">
        <h2 className="text-xl font-semibold pb-4">Zone Usage</h2>
      
      {/* Zone Consumption Donut Chart */}
      <div className="pb-2">
        <HighchartsReact highcharts={Highcharts} options={zoneChartOptions} />
      </div>
    </div>
  );
};

export default ZoneUsage;
