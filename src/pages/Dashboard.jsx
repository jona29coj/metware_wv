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
<div className="min-h-screen flex flex-col bg-green-300">
      {/* Unified Container for Mini Cards and Typing Effect */}
      <div className="bg-green-300 rounded-lg shadow-lg p-6 mb-8">
        {/* Typing Slogan Effect */}
        <div className="flex items-center justify-center bg-green-300 p-4">
          <h1 className="text-2xl text-white font-bold">
            <TypingEffect />
          </h1>
        </div>
        {/* Mini Cards Section */}
        <div className="flex flex-wrap justify-around mb-6">
          {/* Card 1: Facility Information */}
          <div className="bg-white rounded-xl p-5 w-80 h-52 border border-gray-200 shadow-md flex flex-col justify-between">
            <h4 className="text-base font-bold text-gray-800 text-left">
              <i className="fas fa-building mr-1 text-blue-600"></i> Facility Information
            </h4>
            <div className="mt-2 space-y-1 text-left text-sm text-gray-600">
              <p className="font-semibold">IIT Madras Research Park</p>
              <p>BUA: 12 lakhs sq.ft.</p>
              <p>Chennai, India</p>
              <p>Climate Type: Hot & Humid</p>
            </div>
          </div>

          {/* Card 2: Elements Score with Compact Bar Chart */}
          <div className="bg-white rounded-xl p-5 w-80 h-52 border border-gray-200 shadow-md flex flex-col justify-between">
            <h4 className="text-base font-bold text-gray-800 text-left">
              <i className="fas fa-tachometer-alt mr-1 text-green-600"></i> Elements Score
            </h4>
            <div className="mt-2 text-left">
              <p className="text-sm font-bold text-gray-600">Your Building Score: 760</p>

              {/* Bar Chart */}
              <div className="mt-3 flex items-center">
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-full bg-gradient-to-r from-red-500 to-green-500 via-yellow-500"
                    style={{ width: `${(760 / 1000) * 100}%` }}
                  ></div>
                </div>
                <span className="ml-3 text-xs font-bold text-blue-600">760</span>
              </div>

              <p className="mt-2 text-xs text-gray-500 text-left">
                Efficiency and sustainability score of your building's systems.
              </p>
            </div>
          </div>

          {/* Card 3: Savings with Mini Visual and More Content */}
          <div className="bg-white rounded-xl p-5 w-80 h-52 border border-gray-200 shadow-md flex flex-col justify-between">
            <h4 className="text-base font-bold text-gray-800 text-left">
              <i className="fas fa-coins mr-1 text-yellow-600"></i> Savings
            </h4>

            {/* Flex container for two columns */}
            <div className="mt-2 flex justify-between text-xs font-semibold text-gray-600 space-x-2">
              {/* Left Column for Energy Savings */}
              <div className="text-left">
                <p>Energy:</p>
                <p>1.4K kWh</p>
              </div>

              {/* Right Column for Cost Savings */}
              <div className="text-left">
                <p>Cost:</p>
                <p>$2K</p>
              </div>
            </div>

            {/* Carbon Offset */}
            <p className="mt-2 text-xs font-bold text-gray-600 text-left">Carbon Offset: 1.2 tons</p>

            {/* Pie Chart at the bottom */}
            <div className="mt-3 flex flex-col items-center justify-center h-12">
              <div className="w-14 h-14 rounded-full border-4 border-gray-300 flex items-center justify-center relative">
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'conic-gradient(green 0%, green 50%, gray 50%, gray 100%)',
                  }}
                />
                <span className="text-xs font-bold text-green-500">50%</span>
              </div>
              <p className="mt-1 text-xs font-bold text-gray-600">Performance: Good</p>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Portion with Two Cards */}
      <div className="p-6 bg-green-300 flex-grow">
        {/* Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 mt-[-67px]">
{/* Energy Sources Card */}
<div className="bg-white dark:bg-secondary-dark-bg rounded-xl shadow-lg p-6 flex flex-col">
  <div className="flex justify-between items-center mb-4" style={{zIndex:1}}>
    <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">Energy Sources</h3>
  </div>
  {/* Animated Progress Circle for Total Energy */}
  <div className="flex items-center justify-between mb-2" style={{zIndex:1}}>
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
<div className="bg-white dark:bg-secondary-dark-bg rounded-xl shadow-lg p-6 flex flex-col">
  <div className="flex justify-between items-center mb-4">
    <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">Building Consumption</h3>
  </div>
  
  {/* Animated Icons */}
  <div className="flex items-center justify-between mb-4">
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
  <div className="mb-1" style={{marginTop:"-110px"}}>
    <ConsumptionPieChart />  {/* The pie chart component added here */}
  </div>
  
  {/* Additional Components */}
  <div>
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