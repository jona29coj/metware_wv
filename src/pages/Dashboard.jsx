import React from 'react';
import '../App.css';
import 'react-datepicker/dist/react-datepicker.css';
import Batteries from './Batteries';
import WaterStorage from './WaterStorage';
import '../pages/enerndbuist.css';
import EVChargerOverview from './evchargers';
import FacilityInformation from './FacilityInformation';
import ChillerCard from './ChillerCard';
import EnergySourcesBarChart from '../components/EnergySourcesBar';
import ConsumptionPieChart from '../components/ConsumptionPie';

const Dashboard = () => {
  return (
<div className="min-h-screen flex flex-col bg-gray-100">
  {/* Container with Common Background */}
  
{/* Container for Mini Cards */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-5">

  {/* Mini Card 1: Facility Information */}
  <div className="bg-white rounded-lg shadow-sm p-4">
    <h4 className="text-base font-semibold text-gray-700 mb-2">
      <i className="fas fa-building text-gray-500 mr-2"></i> Facility Information
    </h4>
    <div className="text-sm text-gray-600 space-y-1 ml-2">
      <p className="font-medium">IIT Madras Research Park</p>
      <p>BUA: <span className="font-semibold">12 lakhs sq.ft.</span></p>
      <p>Location: <span className="font-semibold">Chennai, India</span></p>
      <p>Climate: <span className="font-semibold">Hot & Humid</span></p>
    </div>
  </div>

  {/* Mini Card 2: Elements Score */}
  <div className="bg-white rounded-lg shadow-sm p-4">
    <h4 className="text-base font-semibold text-gray-700 mb-2">
      <i className="fas fa-tachometer-alt text-gray-500 mr-2"></i> Elements Score
    </h4>
    <div className="text-sm text-gray-600 space-y-2 ml-2">
      <p className="font-medium text-gray-900">Building Score: <span className="text-blue-600">760</span></p>
      <div className="w-full bg-gray-300 rounded-full h-1 my-1">
        <div className="bg-blue-400 h-full rounded-full" style={{ width: '76%' }}></div>
      </div>
      <p className="text-xs text-gray-600">Efficiency & sustainability level.</p>
    </div>
    <button className="mt-2 bg-blue-600 text-white rounded-md px-3 py-2 text-sm hover:bg-blue-700 transition-colors duration-200 ml-2">
      CONNECT
    </button>
  </div>

  {/* Mini Card 3: Savings */}
  <div className="bg-white rounded-lg shadow-sm p-4">
    <h4 className="text-base font-semibold text-gray-700 mb-2">
      <i className="fas fa-coins text-gray-500 mr-2"></i> Savings
    </h4>
    <div className="text-sm text-gray-600 space-y-2 ml-1">
      <div className="flex items-center">
        <i className="fas fa-bolt text-gray-500 mr-1"></i>
        <p>Energy Savings: <span className="font-semibold">1.4K kWh</span></p>
      </div>
      <div className="flex items-center">
        <i className="fas fa-dollar-sign text-gray-500 mr-1"></i>
        <p>Cost Savings: <span className="font-semibold">$2K</span></p>
      </div>
      <div className="flex items-center">
        <i className="fas fa-leaf text-gray-500 mr-1"></i>
        <p>Carbon Offset: <span className="font-semibold">1.2 tons</span></p>
      </div>
    </div>
    <div className="flex items-center justify-center mt-2 text-xs text-gray-600">
      <div className="relative w-10 h-10">
        <div className="w-full h-full rounded-full border-2 border-gray-300 flex items-center justify-center text-xs font-medium text-gray-600 bg-white">
          <div className="absolute inset-0 rounded-full border-t-2 border-blue-500" style={{ transform: 'rotate(180deg)' }}></div>
          50%
        </div>
      </div>
      <p className="text-xs text-gray-600 ml-2">Savings Achieved</p>
    </div>
  </div>

  {/* Last Mini Card: Peak Consumption Data */}
  <div className="flex-1 p-4 bg-white rounded-lg">
    <h4 className="text-base font-semibold text-gray-700 mb-2">
      <i className="fas fa-bolt text-gray-500 mr-2"></i> Peak Consumption
    </h4>
    <ul className="text-sm text-gray-600 space-y-1 ml-1">
      <li><i className="fas fa-clock text-gray-500 mr-1"></i> Peak Load Time: <span className="font-semibold">5:00 PM</span></li>
      <li><i className="fas fa-tachometer-alt text-gray-500 mr-1"></i> Peak Demand: <span className="font-semibold">500 kW</span></li>
      <li><i className="fas fa-calendar-day text-gray-500 mr-1"></i> Daily Peak Consumption: <span className="font-semibold">8,400 kWh</span></li>
      <li><i className="fas fa-calendar-week text-gray-500 mr-1"></i> Weekly Peak Consumption: <span className="font-semibold">58,800 kWh</span></li>
    </ul>
  </div>

</div>


{/* Move the Energy Sources and Building Consumption Cards Up */}
<div className="bg-gray-100 p-5 space-y-6 mt-[-30px]"> {/* Reduce margin-top to pull cards up */}
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

<ChillerCard />
<FacilityInformation/>
<EVChargerOverview/>
<WaterStorage />
<Batteries />
</div>

    </div>
  );
};

export default Dashboard;

{/*
<div className="bg-white dark:bg-secondary-dark-bg rounded-lg p-4 border border-gray-300 dark:border-gray-600 mb-6">
        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Energy Breakdown</h4>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <i className="fas fa-plug mr-2 text-blue-600"></i>
              <span className="font-bold text-gray-800 dark:text-gray-200">Grid</span>
            </div>
            <span className="text-gray-800 dark:text-gray-200">30%</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <i className="fas fa-sun mr-2 text-yellow-600"></i>
              <span className="font-bold text-gray-800 dark:text-gray-200">Wheeled in Solar</span>
            </div>
            <span className="text-gray-800 dark:text-gray-200">40%</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <i className="fas fa-leaf mr-2 text-green-600"></i>
              <span className="font-bold text-gray-800 dark:text-gray-200">On-Site Solar</span>
            </div>
            <span className="text-gray-800 dark:text-gray-200">30%</span>
          </div>
        </div>
</div>

 {/* Building Consumption Summary 
 <div className="bg-white dark:bg-secondary-dark-bg rounded-lg p-4 border border-gray-300 dark:border-gray-600 mb-6">
  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Consumption Metrics</h4>
  <div className="space-y-4">
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <i className="fas fa-bolt mr-2 text-indigo-600"></i>
        <span className="font-bold text-gray-800 dark:text-gray-200">Total Energy Consumed</span>
      </div>
      <span className="text-gray-800 dark:text-gray-200">12,500 kWh</span>
    </div>
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <i className="fas fa-sun mr-2 text-orange-600"></i>
        <span className="font-bold text-gray-800 dark:text-gray-200">Peak Consumption Time</span>
      </div>
      <span className="text-gray-800 dark:text-gray-200">3:00 PM - 4:00 PM</span>
    </div>
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <i className="fas fa-chart-line mr-2 text-teal-600"></i>
        <span className="font-bold text-gray-800 dark:text-gray-200">Average Daily Load</span>
      </div>
      <span className="text-gray-800 dark:text-gray-200">9,000 kWh</span>
    </div>
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <i className="fas fa-leaf mr-2 text-green-600"></i>
        <span className="font-bold text-gray-800 dark:text-gray-200">Renewable Energy Contribution</span>
      </div>
      <span className="text-gray-800 dark:text-gray-200">15%</span>
    </div>
  </div>
</div>*/}
