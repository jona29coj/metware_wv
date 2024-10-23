import React from 'react';
import { useState } from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { Doughnut } from 'react-chartjs-2'; // Make sure to install chart.js and react-chartjs-2
import { Bar } from 'react-chartjs-2'; // Chart.js bar chart
import {
  Stacked,
  Pie,
  Button,
  LineChart,
  SparkLine,
} from '../components';
import {
  earningData,
  medicalproBranding,
  recentTransactions,
  weeklyStats,
  dropdownData,
  SparklineAreaData,
  ecomPieChartData,
} from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import product9 from '../data/product9.jpg';
import '../App.css';
import BarChart from './Charts/BarChart';
import ReactSlider from 'react-slider';
import Plot from 'react-plotly.js';
import PieChart from '../components/Charts/3DPieChart';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import Batteries from './Batteries';
import WaterStorage from './WaterStorage';
import EVchargers from './evchargers';
import Chiller from './Chiller';
import '../pages/enerndbuist.css';
import TrendLineChart from './Charts/TrendLineChart';
import StyledDatePicker from './StyledDatePicker';
import bgpic from '../pages/Picture1.png';
import EnergySourcesBarChart from '../components/EnergySourcesBar';
import ConsumptionPieChart from '../components/ConsumptionPie';













// Custom multi-colored slider component
const MultiColoredSlider = () => (
  <ReactSlider
    className="custom-slider"
    trackClassName="track"
    thumbClassName="thumb"
    min={0}
    max={100}
    defaultValue={50}
    renderTrack={(props, state) => (
      <div
        {...props}
        className={`${props.className} ${
          state.index === 0
            ? 'bg-green-500'
            : state.index === 1
            ? 'bg-yellow-500'
            : 'bg-red-500'
        }`}
      />
    )}
    renderThumb={(props) => (
      <div {...props} className="thumb"></div>
    )}
  />
);

// Dropdown component for selecting time period
const DropDown = ({ currentMode }) => (
  <div className="w-28 border border-color px-2 py-1 rounded-md">
    <DropDownListComponent
      id="time"
      fields={{ text: 'Time', value: 'Id' }}
      style={{
        border: 'none',
        color: currentMode === 'Dark' && 'white',
      }}
      value="1"
      dataSource={dropdownData}
      popupHeight="220px"
      popupWidth="120px"
    />
  </div>
);

// Data for Doughnut Chart
const doughnutData = {
  labels: ['Grid', 'Diesel', 'Wheeled in Solar', 'Rooftop', 'Today\'s Renewable Share'],
  datasets: [
    {
      data: [30, 10, 40, 20, 2],
      backgroundColor: [
        '#4CAF50', // Green
        '#FFC107', // Amber
        '#2196F3', // Blue
        '#FF5722', // Deep Orange
        '#9E9E9E', // Grey
      ],
      hoverBackgroundColor: [
        '#388E3C', // Darker Green
        '#FFA000', // Darker Amber
        '#1976D2', // Darker Blue
        '#F4511E', // Darker Deep Orange
        '#757575', // Darker Grey
      ],
    },
  ],
};

// Data for Stacked Bar Chart
const barData = {
  labels: ['Building Consumption'],
  datasets: [
    {
      label: 'Clients',
      backgroundColor: '#4CAF50', // Green for Clients
      data: [100],
    },
    {
      label: 'Chillers',
      backgroundColor: '#2196F3', // Blue for Chillers
      data: [80],
    },
    {
      label: 'Common Area',
      backgroundColor: '#FF5722', // Deep Orange for Common Area
      data: [60],
    },
  ],
};

const barOptions = {
  plugins: {
    legend: {
      position: 'bottom', // Place the legend at the bottom for better readability
    },
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
      beginAtZero: true,
    },
  },
};

const Ecommerce = () => {
  const { currentColor, currentMode } = useStateContext();
  const [startDateEnergy, setStartDateEnergy] = useState(new Date());
  const [startDateConsumption, setStartDateConsumption] = useState(new Date());



  return (
<div className="min-h-screen flex flex-col">
  {/* Top Portion with Background Image */}
  <div
    className="relative bg-cover bg-center h-96 w-full"
    style={{
      backgroundImage: `url(${bgpic})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundPositionY: '-110px',
      backgroundRepeat: 'no-repeat',
      marginBottom: '-50px',
    }}
  >
    {/* Mini Cards on Top of Background Image */}
    <div className="absolute inset-x-0 top-16 flex justify-center space-x-14"> {/* Adjusted spacing */}
      {/* Card 1: Facility Information */}
      <div className="bg-white dark:bg-secondary-dark-bg rounded-xl p-5 w-72 h-44 border border-gray-200"> {/* Adjusted height */}
        <h4 className="text-sm font-bold text-gray-800 dark:text-gray-200 text-left"> {/* Top-left heading */}
          <i className="fas fa-building mr-1 text-blue-600"></i> Facility Information
        </h4>
        <div className="mt-4 space-y-1 text-left text-sm text-gray-600"> {/* Increased spacing and font size */}
          <p className="font-semibold">IIT Madras Research Park</p>
          <p>BUA: 12 lakhs sq.ft.</p>
          <p>Chennai, India</p>
          <p>Climate Type: Hot & Humid</p>
        </div>
      </div>

      {/* Card 2: Elements Score with Compact Bar Chart */}
      <div className="bg-white dark:bg-secondary-dark-bg rounded-xl p-5 w-72 h-44 border border-gray-200">
        <h4 className="text-sm font-bold text-gray-800 dark:text-gray-200 text-left"> {/* Top-left heading */}
          <i className="fas fa-tachometer-alt mr-1 text-green-600"></i> Elements Score
        </h4>
        <div className="mt-4 text-left">
          <p className="text-sm font-bold text-gray-600">Your Building Score: 760</p>

          {/* Bar Chart */}
          <div className="mt-3 flex items-center">
            <div className="w-full h-2 bg-gray-200 rounded-full">
              <div
                className="h-full bg-gradient-to-r from-red-500 to-green-500 via-yellow-500"
                style={{ width: `${(760 / 1000) * 100}%` }}
              ></div>
            </div>
            <span className="ml-3 text-xs font-bold text-blue-600">760</span> {/* Adjusted position */}
          </div>

          <p className="mt-2 text-xs text-gray-500 text-left">
            Efficiency and sustainability score of your building's systems.
          </p>
        </div>
      </div>

      {/* Card 3: Savings with Mini Visual and More Content */}
      <div className="bg-white dark:bg-secondary-dark-bg rounded-xl p-5 w-72 h-44 border border-gray-200"> {/* Adjusted height to match first two cards */}
        <h4 className="text-sm font-bold text-gray-800 dark:text-gray-200 text-left"> {/* Top-left heading */}
          <i className="fas fa-coins mr-1 text-yellow-600"></i> Savings
        </h4>

        {/* Flex container for two columns */}
        <div className="mt-4 flex justify-between text-xs font-semibold text-gray-600 space-x-2"> {/* Reduced gap and font size */}
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
        <div className="mt-3 flex flex-col items-center justify-center h-12"> {/* Adjusted height */}
          <div className="w-14 h-14 rounded-full border-4 border-gray-300 flex items-center justify-center relative">
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'conic-gradient(green 0%, green 50%, gray 50%, gray 100%)',
              }}
            />
            <span className="text-xs font-bold text-green-500">50%</span>
          </div>
          <p className="mt-1 text-xs font-bold text-gray-600">Performance: Good</p> {/* Adjusted margin */}
        </div>
      </div>
    </div>
  </div>

      {/* Bottom Portion with Two Cards */}
      <div className="p-6 bg-gradient-to-br from-gray-100 to-white flex-grow">
        {/* Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 mt-[-67px]">
{/* Energy Sources Card */}
<div className="bg-white dark:bg-secondary-dark-bg rounded-xl shadow-lg p-6 flex flex-col">
  <div className="flex justify-between items-center mb-4" style={{zIndex:1}}>
    <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">Energy Sources</h3>
    <StyledDatePicker selectedDate={startDateEnergy} setSelectedDate={setStartDateEnergy} />
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
        <li><i className="fas fa-plug mr-2 text-blue-600"></i> Grid: <span className="font-bold text-blue-600">30%</span></li>
        <li><i className="fas fa-industry mr-2 text-red-600"></i> Diesel: <span className="font-bold text-red-600">10%</span></li>
        <li><i className="fas fa-sun mr-2 text-yellow-600"></i> Wheeled in Solar: <span className="font-bold text-yellow-600">40%</span></li>
        <li><i className="fas fa-leaf mr-2 text-green-600"></i> Rooftop: <span className="font-bold text-green-600">20%</span></li>
      </ul>
    </div>
  </div>
  {/* 3D Bar Chart - Push the container up */}
  <div className="mb-2" style={{ marginTop: '-170px' }}> {/* Negative margin to move it up */}
    <EnergySourcesBarChart data={[30, 10, 40, 20]} />
  </div>
  {/* Mini Cards for Energy Breakdown */}
  <div className="grid grid-cols-2 gap-2 mb-4" style={{marginTop: '-100px', zIndex:2}}>
    <div className="bg-blue-100 p-2 rounded-lg shadow">
      <h4 className="text-md font-semibold text-blue-600">Grid</h4>
      <p className="font-bold text-blue-600">30%</p>
    </div>
    <div className="bg-red-100 p-2 rounded-lg shadow">
      <h4 className="text-md font-semibold text-red-600">Diesel</h4>
      <p className="font-bold text-red-600">10%</p>
    </div>
    <div className="bg-yellow-100 p-2 rounded-lg shadow">
      <h4 className="text-md font-semibold text-yellow-600">Wheeled in Solar</h4>
      <p className="font-bold text-yellow-600">40%</p>
    </div>
    <div className="bg-green-100 p-2 rounded-lg shadow">
      <h4 className="text-md font-semibold text-green-600">Rooftop</h4>
      <p className="font-bold text-green-600">20%</p>
    </div>
  </div>
  {/* Additional Components */}
  <div className="mt-4">
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
    <StyledDatePicker selectedDate={startDateConsumption} setSelectedDate={setStartDateConsumption} />
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
  <div className="mb-4" style={{marginTop:"-100px"}}>
    <ConsumptionPieChart />  {/* The pie chart component added here */}
  </div>

  {/* Mini Cards for Consumption Breakdown */}
  <div className="grid grid-cols-2 gap-2 mb-4" style={{marginTop:"-80px"}}>
    <div className="bg-blue-100 p-2 rounded-lg shadow">
      <h4 className="text-md font-semibold text-blue-600">Clients Total</h4>
      <p className="font-bold">100 kWh</p>
    </div>
    <div className="bg-green-100 p-2 rounded-lg shadow">
      <h4 className="text-md font-semibold text-green-600">Chillers Total</h4>
      <p className="font-bold">80 kWh</p>
    </div>
    <div className="bg-yellow-100 p-2 rounded-lg shadow">
      <h4 className="text-md font-semibold text-yellow-600">Common Area</h4>
      <p className="font-bold">60 kWh</p>
    </div>
  </div>
  
  {/* Additional Components */}
  <div className="mt-4">
    <h4 className="text-md font-semibold text-gray-800 dark:text-gray-200">Total Consumption</h4>
    <p className="font-bold">400 kWh</p>
    <h4 className="text-md font-semibold text-gray-800 dark:text-gray-200">Emission Released</h4>
    <p className="font-bold">150 kg CO2</p>
  </div>
</div>
</div>




<Chiller/>
<EVchargers/>
<WaterStorage />
<Batteries />
</div>

    </div>
  );
};

export default Ecommerce;