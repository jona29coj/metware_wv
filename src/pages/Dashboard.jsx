import React from 'react';
import { useState } from 'react';
import '../App.css';
import 'react-datepicker/dist/react-datepicker.css';
import Batteries from './Batteries';
import WaterStorage from './WaterStorage';
import Chiller from './Chiller';
import '../pages/enerndbuist.css';
import bgpic from '../pages/Picture1.png';
import EnergySourcesBarChart from '../components/EnergySourcesBar';
import ConsumptionPieChart from '../components/ConsumptionPie';
import EVChargerOverview from './evchargers';
import TypingEffect from './TypingEffect';

const Dashboard = () => {

  return (
<div className="min-h-screen flex flex-col bg-gray-100">
  {/* Container with Common Background */}
  <div className="bg-white shadow-lg rounded-lg p-8 mx-5 mt-5 space-y-10">
    
    {/* Enhanced Header with Typing Slogan Effect */}
    <div className="flex flex-col items-center justify-center p-6 rounded-lg shadow-md border border-gray-300 bg-green-500">
      <h1 className="text-3xl font-extrabold text-white">
        <TypingEffect />
      </h1>
    </div>

    {/* Mini Cards Section with Enhanced Styling */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      
      {/* Card 1: Facility Information */}
      <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-6 shadow-md border border-green-200 flex flex-col">
        <h4 className="text-lg font-bold text-green-700 mb-2">
          <i className="fas fa-building mr-2 text-blue-500"></i> Facility Information
        </h4>
        <div className="text-sm text-gray-700 space-y-1">
          <p className="font-semibold">IIT Madras Research Park</p>
          <p>BUA: 12 lakhs sq.ft.</p>
          <p>Location: Chennai, India</p>
          <p>Climate: Hot & Humid</p>
        </div>
      </div>

      {/* Card 2: Elements Score */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6 shadow-md border border-blue-200 flex flex-col">
        <h4 className="text-lg font-bold text-blue-700 mb-2">
          <i className="fas fa-tachometer-alt mr-2 text-blue-600"></i> Elements Score
        </h4>
        <div className="mt-4 mb-2">
          <p className="text-sm font-bold text-gray-700">Building Score: 760</p>
          <div className="w-full bg-gray-300 rounded-full h-2 my-1">
            <div className="bg-blue-500 h-full rounded-full" style={{ width: '76%' }}></div>
          </div>
          <p className="text-xs text-gray-600">Efficiency & sustainability level.</p>
        </div>
        {/* CONNECT Button */}
        <button className="mt-4 bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition-colors duration-200">
          CONNECT
        </button>
      </div>

      {/* Card 3: Savings */}
      <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg p-6 shadow-md border border-yellow-200 flex flex-col">
        <h4 className="text-lg font-bold text-yellow-700 mb-2 flex items-center">
          <i className="fas fa-coins mr-2 text-yellow-600"></i> Savings
        </h4>
        {/* Content Section */}
        <div className="text-gray-700 space-y-1">
          <div className="flex items-center">
            <i className="fas fa-bolt text-green-600 mr-2"></i>
            <p className='text-nowrap'>Energy Savings: 1.4K kWh</p>
          </div>
          <div className="flex items-center">
            <i className="fas fa-dollar-sign text-blue-600 mr-2"></i>
            <p>Cost Savings: $2K</p>
          </div>
          <div className="flex items-center">
            <i className="fas fa-leaf text-green-500 mr-2"></i>
            <p>Carbon Offset: 1.2 tons</p>
          </div>
        </div>

        {/* Centered Circular Indicator with Right-aligned Text */}
        <div className="flex items-center justify-center mt-2">
          <div className="relative w-12 h-12">
            <div className="w-full h-full rounded-full border-4 border-gray-300 flex items-center justify-center font-bold text-yellow-600 bg-white">
              <div className="absolute inset-0 rounded-full border-t-4 border-yellow-500" style={{ transform: 'rotate(180deg)' }}></div>
              50%
            </div>
          </div>
          <p className="text-xs font-semibold text-gray-600 ml-2">Savings Achieved</p>
        </div>
      </div>

      {/* Card 4: Renewable Usage */}
      <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-6 shadow-md border border-green-200 flex flex-col">
        <h4 className="text-lg font-bold text-green-700 mb-2">
          <i className="fas fa-solar-panel mr-2 text-green-600"></i> Renewable Usage
        </h4>
        <div className="flex items-center text-gray-700 space-x-4">
          <p className="font-semibold">Solar: 60%</p>
          <p className="font-semibold">Wind: 40%</p>
        </div>
        <div className="w-full bg-gray-300 rounded-full h-2 my-2">
          <div className="bg-green-500 h-full rounded-full" style={{ width: '60%' }}></div>
        </div>
        <p className="text-xs text-gray-600">Breakdown of renewable sources.</p>
      </div>
    </div>
  </div>






  <div className="bg-gray-100 p-5 space-y-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    
{/* Energy Sources Card */}
<div className="bg-white dark:bg-secondary-dark-bg rounded-xl shadow-lg p-6 flex flex-col relative">
  <div className="flex justify-between items-center mb-4" style={{ zIndex: 1 }}>
    <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">Energy Sources</h3>
    {/* Date Picker in the Top Right Corner */}
    <input
      type="date"
      className="border border-gray-300 rounded px-2 py-1 text-sm"
      style={{ zIndex: 1 }}
      defaultValue={new Date().toISOString().split('T')[0]} // Sets the default date to today
    />
  </div>
  
  {/* Animated Progress Circle for Total Energy */}
  <div className="flex items-center justify-between mb-2" style={{ zIndex: 1 }}>
    <div className="relative w-16 h-16">
      <div className="absolute inset-0 rounded-full border-4 border-dashed border-indigo-700 animate-spin-slow"></div>
      <div className="absolute inset-0 rounded-full flex items-center justify-center font-bold text-indigo-700">60%</div>
    </div>
    <div className="flex-1 pl-4">
      <h4 className="text-md font-semibold text-gray-800 dark:text-gray-200">Energy Breakdown</h4>
      <ul className="mt-2 text-gray-600 text-sm space-y-1">
        <li><i className="fas fa-plug mr-2 text-blue-600"></i> Grid: <span className="font-bold">30%</span></li>
        <li><i className="fas fa-industry mr-2 text-red-600"></i> Diesel: <span className="font-bold">10%</span></li>
        <li><i className="fas fa-sun mr-2 text-yellow-600"></i> Wheeled in Solar: <span className="font-bold">40%</span></li>
        <li><i className="fas fa-leaf mr-2 text-green-600"></i> Rooftop: <span className="font-bold">20%</span></li>
      </ul>
    </div>
  </div>

  {/* 3D Bar Chart - Push the container up */}
  <div style={{ marginTop: '-120px' }}> {/* Negative margin to move it up */}
    <EnergySourcesBarChart data={[30, 10, 40, 20]} />
  </div>

  {/* Additional Components */}
  <div>
    <h4 className="text-md font-semibold text-gray-800 dark:text-gray-200">Total Energy Produced</h4>
    <p className="font-bold">500 kWh</p>
    <h4 className="text-md font-semibold text-gray-800 dark:text-gray-200">Emission Reduction</h4>
    <p className="font-bold">200 kg CO2</p>
  </div>
</div>




{/* Building Consumption Card */}
<div className="bg-white dark:bg-secondary-dark-bg rounded-xl shadow-lg p-6 flex flex-col relative">
  <div className="flex justify-between items-center mb-4">
    <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">Building Consumption</h3>
    {/* Date Picker in the Top Right Corner */}
    <input
      type="date"
      className="border border-gray-300 rounded px-2 py-1 text-sm"
      defaultValue={new Date().toISOString().split('T')[0]} // Sets the default date to today
    />
  </div>
  
  {/* Animated Icons */}
  <div className="flex items-center justify-between mb-5">
    <div className="relative w-16 h-16">
      <div className="absolute inset-0 rounded-full border-4 border-dashed border-green-600 animate-spin-slow"></div>
      <div className="absolute inset-0 rounded-full flex items-center justify-center font-bold text-green-600">80%</div>
    </div>
    <div className="flex-1 pl-4">
      <h4 className="text-md font-semibold text-gray-800 dark:text-gray-200">Consumption Breakdown</h4>
      <ul className="mt-2 text-gray-600 text-sm space-y-1">
        <li><i className="fas fa-user mr-2 text-blue-600"></i> Clients Total: <span className="font-bold">100 kWh</span></li>
        <li><i className="fas fa-fan mr-2 text-green-600"></i> Chillers Total: <span className="font-bold">80 kWh</span></li>
        <li><i className="fas fa-lightbulb mr-2 text-yellow-600"></i> Common Area: <span className="font-bold">60 kWh</span></li>
      </ul>
    </div>
  </div>
  
  {/* 3D Pie Chart - Insert the chart component here */}
  <div style={{ marginTop: "-90px" }}>
    <ConsumptionPieChart />  {/* The pie chart component added here */}
  </div>
  
  {/* Additional Components */}
  <div style={{ marginTop: "-20px" }}>
    <h4 className="text-md font-semibold text-gray-800 dark:text-gray-200">Total Consumption</h4>
    <p className="font-bold">400 kWh</p>
    <h4 className="text-md font-semibold text-gray-800 dark:text-gray-200">Emission Released</h4>
    <p className="font-bold">150 kg CO2</p>
  </div>
</div>
</div>

<Chiller/>
<EVChargerOverview/>
<WaterStorage />
<Batteries />
</div>

    </div>
  );
};

export default Dashboard;