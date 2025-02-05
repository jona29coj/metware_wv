import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import 'tailwindcss/tailwind.css';

const ZoneUsage = () => {
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

  const zoneChartOptions = {
    chart: {
      type: 'pie',
      height: '409px',
    },
    title: { text: null },
    plotOptions: {
      pie: {
        innerSize: '40%',
        dataLabels: {
          enabled: true,
          format: '{point.percentage:.0f}%',
          style: { fontSize: '14px', fontWeight: 'bold', color: 'black', textOutline: 'none' },
          distance: -60,
        },
        colors: zoneData.map(item => item.color),
      },
    },
    series: [
      {
        name: 'Consumption',
        data: zoneData.map(item => ({
          name: item.name,
          y: item.y,
          color: item.color,
          kWh: item.kWh,
        })),
      },
    ],
    tooltip: {
      pointFormatter: function () {
        return `Consumption: <b>${this.kWh} kWh</b>`;
      },
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      borderColor: '#ccc',
      borderWidth: 1,
      style: { fontSize: '14px', color: '#333' },
    },
    credits: { enabled: false },
    legend: { enabled: true },
  };

  // Updated styles for cleaner mini cards
  const cardStyles = "bg-white border border-gray-500 p-5 rounded-lg mb-5 flex flex-col justify-center items-center"; // Added flex and centered
  const cardTitleStyles = "font-semibold text-md text-gray-700 whitespace-nowrap text-center"; // Centered title
  const cardValueStyles = "text-2xl font-bold text-gray-900 whitespace-nowrap text-center"; // Centered value

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full">
      <h2 className="text-xl font-semibold pb-4">Zone Usage</h2>

      <div className="flex items-center justify-between space-x-2"> {/* Reduced space-x to move the cards closer */}
        <div className="w-2/3">
          <HighchartsReact highcharts={Highcharts} options={zoneChartOptions} />
        </div>
        <div className="w-1/3"> {/* Optionally adjust width to fit better */}
          {/* Clean and modern mini cards with hover effect */}
          <div className={cardStyles}>
            <h3 className={cardTitleStyles}>Grid Consumption</h3>
            <p className={cardValueStyles}>1500 kWh</p>
          </div>
          <div className={cardStyles}>
            <h3 className={cardTitleStyles}>Diesel Consumption</h3>
            <p className={cardValueStyles}>800 kWh</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZoneUsage;
