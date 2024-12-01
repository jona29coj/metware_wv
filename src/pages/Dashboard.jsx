import React, { useState, useEffect } from "react";
import '../App.css';
import 'react-datepicker/dist/react-datepicker.css';
import Batteries from './Batteries';
import WaterStorage from './WaterStorage';
import '../pages/enerndbuist.css';
import EVChargerOverview from './evchargers';
import FacilityInformation from './FacilityInformation';
import ChillerCard from './ChillerCard';
import EnergySourcesBarChart from '../components/EnergySourcesBar';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts"; 
import facimg from './facimg.png';
import DateSelector from "../components/DateSelector";

const Dashboard = () => {
  const pieChartOptions = {
    chart: {
      type: "pie",
      backgroundColor: "transparent", // Match the card background
      height: "280px", // Reduced the height of the pie chart
    },
    title: {
      text: null, // Removed specific chart heading
    },
    tooltip: {
      pointFormat: "{point.y} kWh", // Show only the value (not the series name or percentage)
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: false, // Disabling the labels
        },
        showInLegend: false,
      },
    },
    series: [
      {
        name: "Usage",
        colorByPoint: true,
        data: [
          { name: "Clients", y: 40, color: "#4CAF50" },
          { name: "Chillers", y: 30, color: "#3F51B5" },
          { name: "Common Areas", y: 20, color: "#FFC107" },
          { name: "Others", y: 10, color: "#FF5722" },
        ],
      },
    ],
    credits: {
      enabled: false,
    },
  };
  /*355F2E 0A3981 E85C0D 8D493A FFDE4D*/
  return (
<div className="min-h-screen flex flex-col bg-gray-100">
  {/* Container with Common Background */}
{/* Container for Mini Cards */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
  {/* First Mini Card: Facility Information with Image */}
  <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col md:flex-row">
    <div className="w-full md:w-1/2">
      <h4 className="text-base font-semibold text-gray-700 mb-2">
        <i className="text-gray-500"></i> Facility Information
      </h4>
      <div className="text-sm text-gray-600 space-y-1">
        <p className="font-medium">IIT Madras Research Park</p>
        <p>BUA: <span className="font-semibold">12 lakhs sq.ft.</span></p>
        <p>Location: <span className="font-semibold">Chennai, India</span></p>
        <p>Climate: <span className="font-semibold">Hot & Humid</span></p>
      </div>
    </div>
    <div className="w-full md:w-1/2 flex items-center justify-center p-4 relative" style={{ marginTop: '-20px' }}>
  <img
    src={facimg}
    alt="Facility"
    className="w-full h-auto rounded-lg"
    style={{ marginBottom: '-20px' }} // Adjusted margin-bottom
  />
</div>
  </div>
  {/* Second Mini Card: Combined Building Score and Savings */}
  <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col space-y-4">
    <div className="flex flex-col md:flex-row">
      {/* Building Score */}
      <div className="w-full md:w-1/2 pr-4">
        <h4 className="text-base font-semibold text-gray-700 mb-2">
          Elements Score
        </h4>
        <h5 className="text-lg font-medium text-gray-900 mb-1">
          Your Building Score: <span className="font-bold">760</span>
        </h5>
        <p className="text-sm text-gray-500 mb-4">Suggestions for improvement</p>
        <div className="flex items-center justify-between mt-2">
          <div className="relative flex-grow mr-4">
          <div className="w-full h-3 bg-gradient-to-r from-green-200 to-green-500 rounded-full">
  <div className="absolute left-[76%] -top-5 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow-md text-xs font-semibold text-gray-800">
    760
  </div>
  <div className="absolute left-[76%] top-0 transform -translate-x-1/2 w-0.5 h-5 bg-gray-800"></div>
</div>

            <div className="flex justify-between w-full mt-1 text-xs text-gray-600">
              <span className="font-medium text-red-500">POOR</span>
              <span className="font-medium text-green-500">GOOD</span>
            </div>
          </div>
          {/* Connect Button */}
          <button className="bg-[#003F3F] text-white rounded-md px-6 py-2 text-sm font-semibold hover:bg-gray-900 transition-colors duration-200 transform -translate-y-2">
            CONNECT
          </button>
        </div>
      </div>

      {/* Divider line */}
      <div className="w-full md:w-px bg-gray-300 mx-4 hidden md:block" style={{ marginTop: '20px' }}></div>

      {/* Savings */}
      <div className="w-full md:w-1/2 pl-4">
        <h4 className="text-base font-semibold text-gray-700 mb-2">Savings</h4>
        <div className="grid grid-cols-2 gap-4 mt-2">
          <div>
            <p className="text-sm text-gray-500">Energy</p>
            <h5 className="text-2xl font-semibold text-gray-900">
              1.4K <span className="text-sm font-normal">kWh (Avg)</span>
            </h5>
            <p className="text-xs text-gray-500 flex items-center whitespace-nowrap">
        During Peak Shaving <span className="ml-1 text-gray-400">ⓘ</span>
      </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Cost</p>
            <h5 className="text-2xl font-semibold text-gray-900">₹ 2K</h5>
            <p className="text-xs text-gray-500 flex items-center whitespace-nowrap">
        During peak hours <span className="ml-1 text-gray-400">ⓘ</span>
      </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Move the Energy Sources and Building Consumption Cards Up */}
<div className="bg-gray-100 p-5 space-y-6 mt-[-30px]"> {/* Reduce margin-top to pull cards up */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{/* Energy Sources Card */}
<div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col space-y-6">
  {/* Header Section */}
  <div className="flex justify-between items-start">
    <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
      Energy Sources
    </h3>

    {/* Compact Date Range Buttons and Inputs */}
    <DateSelector />  </div>

  {/* Content Section */}
  {/* Top Row Section: Two Boxes Side by Side */}
  <div className="flex flex-row mb-4 space-x-4" style={{ marginTop: "9px" }}>
  {/* Power Factor Info */}
  <div className="flex-1 bg-white rounded-lg shadow-sm p-4 border border-gray-300">
    <div className="flex justify-between items-center text-sm mb-2">
      <span className="text-gray-500">Min Power Factor:</span>
      <span className="font-semibold text-gray-800">0.992</span>
    </div>
    <div className="flex justify-between items-center text-sm">
      <span className="text-gray-500">Avg Power Factor:</span>
      <span className="font-semibold text-gray-800">0.992</span>
    </div>
  </div>

  {/* Energy Overview */}
  <div className="flex-1 bg-white rounded-lg shadow-sm p-4 border border-gray-300">
    <div className="flex justify-between items-center text-sm mb-2">
      <span className="text-gray-500">Total Energy Produced:</span>
      <span className="font-semibold text-gray-800">500 kWh</span>
    </div>
    <div className="flex justify-between items-center text-sm">
      <span className="text-gray-500">Emission Reduction:</span>
      <span className="font-semibold text-gray-800">200 kg CO₂</span>
    </div>
  </div>
</div>

  {/* Bottom Section */}
  <div className="flex flex-row mt-4">
    {/* Glowing Renewable Share */}
    <div className="flex flex-col items-center ml-8 w-48">
  <div
    className="bg-white rounded-lg shadow-sm p-4 border border-gray-300 w-full flex flex-col items-center mt-4" // Reduced margin top from 7 to 4
    style={{ marginLeft: "30px", marginTop: "20px" }} // Optional: further adjust the top margin here
  >
    {/* Circle with Intense Glow Effect */}
    <div className="relative mb-4 mt-2 w-20 h-20">
      <div
        className="absolute inset-0 rounded-full"
        style={{
          boxShadow: "0 0 10px 5px rgba(0, 255, 0, 0.6)",
          border: "2px solid rgba(0, 255, 0, 0.3)",
          filter: "blur(3px)",
        }}
      ></div>
      <div
        className="w-full h-full rounded-full shadow-lg flex items-center justify-center relative"
        style={{
          background: "white",
          boxShadow: "0 0 15px 6px rgba(0, 255, 0, 0.6)",
        }}
      >
        <span className="text-green-600 font-bold text-2xl">60%</span>
      </div>
    </div>

    {/* Text Information */}
    <div className="text-center">
      <div className="text-gray-500 text-sm mb-1">Renewable Share</div>
      <div className="text-gray-800 font-bold text-base">↓ 2% Today’s Change</div>
    </div>
  </div>
</div>


  {/* Chart Section */}
<div className="flex-1 -mt-20">
  <EnergySourcesBarChart />
</div>

  </div>

{/* Custom Legend Section */}
<div className="mt-4">
  <div
    className="flex justify-center space-x-6"
    style={{ marginTop: '-45px', marginBottom: '0px' }} // Adjusted bottom margin
  >
    <div className="flex items-center space-x-2">
      <div
        className="w-5 h-5"
        style={{
          backgroundColor: '#355F2E', // Deep green for Grid
        }}
      ></div>
      <span className="text-sm text-gray-700">Grid</span>
    </div>
    <div className="flex items-center space-x-2">
      <div
        className="w-5 h-5"
        style={{
          backgroundColor: '#0A3981', // Blue for Wind
        }}
      ></div>
      <span className="text-sm text-gray-700">Wind</span>
    </div>
    <div className="flex items-center space-x-2">
      <div
        className="w-5 h-5"
        style={{
          backgroundColor: '#E85C0D', // Orange for Wheeled in Solar
        }}
      ></div>
      <span className="text-sm text-gray-700">Wheeled in Solar</span>
    </div>
    <div className="flex items-center space-x-2">
      <div
        className="w-5 h-5"
        style={{
          backgroundColor: '#8D493A', // Brown for Rooftop
        }}
      ></div>
      <span className="text-sm text-gray-700">Rooftop</span>
    </div>
    <div className="flex items-center space-x-2">
      <div
        className="w-5 h-5"
        style={{
          backgroundColor: '#FFDE4D', // Yellow for Diesel
        }}
      ></div>
      <span className="text-sm text-gray-700">Diesel</span>
    </div>
  </div>
</div>



</div>

{/* Facility Usage Card */}
<div className="bg-white rounded-2xl shadow-lg p-6 w-full space-y-1">
  <div className='flex justify-between'>
    <h3 className="text-lg font-bold text-gray-800">Facility Usage</h3>
    <DateSelector />  </div>

  {/* Mini Cards Section */}
  <div className="flex flex-row mb-4 space-x-4" style={{ marginTop: "9px" }}>
    <div className="flex-1 bg-white rounded-lg shadow-sm p-4 border border-gray-300">
      <div className="flex justify-between items-center text-sm mb-2">
        <span className="text-gray-500">Clients:</span>
        <span className="font-semibold text-gray-800">40 kWh</span>
      </div>
      <div className="flex justify-between items-center text-sm">
        <span className="text-gray-500">Chillers:</span>
        <span className="font-semibold text-gray-800">30 kWh</span>
      </div>
    </div>

    <div className="flex-1 bg-white rounded-lg shadow-sm p-4 border border-gray-300">
      <div className="flex justify-between items-center text-sm mb-2">
        <span className="text-gray-500">Common Areas:</span>
        <span className="font-semibold text-gray-800">20 kWh</span>
      </div>
      <div className="flex justify-between items-center text-sm">
        <span className="text-gray-500">Others:</span>
        <span className="font-semibold text-gray-800">10 kWh</span>
      </div>
    </div>
  </div>

  {/* Chart Section */}
  <div className="flex justify-center items-center">
    <HighchartsReact highcharts={Highcharts} options={pieChartOptions} />
  </div>

  {/* Legends Section */}
  <div className="mt-4 flex justify-center space-x-8">
    <div className="flex items-center space-x-2">
      <div className="w-5 h-5" style={{ backgroundColor: "#4CAF50" }}></div>
      <span className="text-sm text-gray-800">Clients</span>
    </div>
    <div className="flex items-center space-x-2">
      <div className="w-5 h-5" style={{ backgroundColor: "#3F51B5" }}></div>
      <span className="text-sm text-gray-800">Chillers</span>
    </div>
    <div className="flex items-center space-x-2">
      <div className="w-5 h-5" style={{ backgroundColor: "#FFC107" }}></div>
      <span className="text-sm text-gray-800">Common Areas</span>
    </div>
    <div className="flex items-center space-x-2">
      <div className="w-5 h-5" style={{ backgroundColor: "#FF5722" }}></div>
      <span className="text-sm text-gray-800">Others</span>
    </div>
  </div>
</div>
</div>

<ChillerCard />
<FacilityInformation/>
<WaterStorage />
<Batteries />
<EVChargerOverview/>

</div>

    </div>
  );
};

export default Dashboard;


