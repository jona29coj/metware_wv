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
import bgImg from '../img1.png';
import carImg from '../carmov.png';
import '../App.css';
import BarChart from '../components/Charts/3DBarChart';
import ReactSlider from 'react-slider';
import bgpic from '../img1.png'
import Plot from 'react-plotly.js';
import PieChart from '../components/Charts/3DPieChart';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import '../pages/Chiller.css';
import '../pages/evcharger.css';














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
  const [startDate, setStartDate] = useState(new Date());


  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Top Cards */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
  {/* Facility Information Card */}
  <div className="bg-white dark:bg-secondary-dark-bg rounded-xl shadow-md p-4">
    <h3 className="text-lg font-semibold mb-2">Facility Information</h3>
    <ul className="text-gray-600">
      <li>IIT Madras Research Park</li>
      <li>BUA: 12 lakhs sq.ft.</li>
      <li>Chennai, India</li>
      <li>Climate Type: Hot & Humid</li>
    </ul>
  </div>

  {/* Elements Score Card */}
  <div className="bg-white dark:bg-secondary-dark-bg rounded-xl shadow-md p-4">
    <h3 className="text-lg font-semibold mb-2">Elements Score</h3>
    <p className="text-gray-600 mb-1">Your Building Score: <span className="font-bold">760</span></p>
    <p className="text-gray-600 mb-2">Suggestions for improvement:</p>
    <div className="mb-2">
      <p className="text-gray-600 mb-1">Energy Efficiency:</p>
      <MultiColoredSlider />
    </div>
    <Button
      color="white"
      bgColor={currentColor}
      text="CONNECT"
      borderRadius="8px"
      width="full"
    />
  </div>

  {/* Image Card with Car Animation */}
  <div className="relative bg-white dark:bg-secondary-dark-bg rounded-xl shadow-md overflow-hidden">
    <img
      src={bgImg}
      alt="Background"
      className="w-full h-36 object-cover"  // Reduced height for image
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <img src={carImg} alt="Moving Car" className="w-16 animate-bounce" /> {/* Reduced image size */}
    </div>
    <div className="absolute bottom-0 left-0 p-2">
      <div className="bg-white p-1 rounded-lg shadow-md">
        <p className="text-gray-800 font-semibold">Save Earth by Reducing CO₂</p>
      </div>
    </div>
  </div>
</div>

{/* Charts Section */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
  {/* Energy Sources Card */}
  <div className="bg-white dark:bg-secondary-dark-bg rounded-xl shadow-md p-4 flex flex-col">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Energy Sources</h3>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="yyyy/MM/dd"
        className="border rounded px-2 py-1"
      />
    </div>
    <div className="flex">
      {/* Bar Chart Section */}
      <div className="flex-1 pr-4"> {/* Bar Chart on the left */}
        <BarChart /> {/* Inserted 3D Bar Chart */}
      </div>

      {/* Relevant Information Section */}
      <div className="flex-1 pl-4">
        <h4 className="text-md font-semibold text-gray-800 dark:text-gray-200">Energy Sources Breakdown</h4>
        <ul className="mt-2 text-gray-600 text-sm">
          <li>Grid: 30%</li>
          <li>Diesel: 10%</li>
          <li>Wheeled in Solar: 40%</li>
          <li>Rooftop: 20%</li>
          <li>Today's Renewable Share: 2%</li>
        </ul>
      </div>
    </div>
  </div>

  {/* Building Consumption Card */}
  <div className="bg-white dark:bg-secondary-dark-bg rounded-xl shadow-md p-4 flex flex-col">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Building Consumption</h3>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="yyyy/MM/dd"
        className="border rounded px-2 py-1"
      />
    </div>
    <div className="flex">
      {/* Pie Chart Section */}
      <div className="flex-1 pr-4"> {/* Pie Chart on the left */}
        <PieChart /> {/* Inserted 3D Pie Chart */}
      </div>

      {/* Relevant Information Section */}
      <div className="flex-1 pl-4">
        <h4 className="text-md font-semibold text-gray-800 dark:text-gray-200">Consumption Breakdown</h4>
        <ul className="mt-2 text-gray-600 text-sm">
          <li>Clients Total: 100 kWh</li>
          <li>Chillers Total: 80 kWh</li>
          <li>Common Area Total: 60 kWh</li>
        </ul>
      </div>
    </div>
  </div>
</div>

{/* Chillers Efficiency Card */}
<div className="grid grid-cols-1 gap-4 mb-4">
  <div className="bg-white dark:bg-secondary-dark-bg rounded-xl shadow-md p-4 mb-4">
    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-12 text-center">Chiller Efficiency Overview</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {Array.from({ length: 8 }, (_, index) => (
        <div key={index} className="chiller-card relative p-4 border border-gray-300 rounded-lg flex flex-col items-center">
          {/* Chiller Visual Representation */}
          <div className="chiller-placeholder">
            <div className="cooling-efficiency">Cooling Efficiency: {Math.floor(Math.random() * (100 - 50 + 1)) + 50}%</div>
          </div>
          {/* Pipes */}
          <div className="pipe inlet"></div>
          <div className="pipe outlet"></div>
          {/* Chiller Label */}
          <h4 className="font-semibold text-gray-800 dark:text-gray-200 text-center mt-2">Chiller {index + 1}</h4>
          {/* Relevant Information */}
          <p className="text-gray-600 text-sm mt-1 text-center">
            Temperature: {Math.floor(Math.random() * (15 - 5 + 1)) + 5} °C<br />
            Pressure: {Math.floor(Math.random() * (120 - 80 + 1)) + 80} kPa
          </p>
        </div>
      ))}
    </div>
  </div>
</div>

{/* EV Chargers Section */}
<div className="grid grid-cols-1 gap-4 mb-4">
  {/* Big Card for the entire EV Chargers section */}
  <div className="bg-white dark:bg-secondary-dark-bg rounded-xl shadow-md p-4">
    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 text-center">EV Chargers Overview</h3>
    
    {/* Common Summary Card inside the big card */}
    <div className="grid grid-cols-3 gap-4 mb-8">
      <div className="summary-card p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md flex flex-col items-center">
        <h4 className="font-semibold text-gray-800 dark:text-gray-200">No. of Chargers Used</h4>
        <p className="text-3xl font-bold text-green-600">00</p>
      </div>
      <div className="summary-card p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md flex flex-col items-center">
        <h4 className="font-semibold text-gray-800 dark:text-gray-200">Total Sessions Today</h4>
        <p className="text-3xl font-bold text-blue-600">00</p>
      </div>
      <div className="summary-card p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md flex flex-col items-center">
        <h4 className="font-semibold text-gray-800 dark:text-gray-200">Total Energy Used</h4>
        <p className="text-3xl font-bold text-red-600">00 kWh</p>
      </div>
    </div>

    {/* EV Chargers Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: 6 }, (_, index) => (
        <div key={index} className="ev-charger-card p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md flex">
          {/* CSS-based detailed EV charging station */}
          <div className="w-1/2 flex justify-center items-center">
            <div className="charging-station">
              <div className="station-screen"></div>
              <div className="station-base"></div>
              <div className="station-cable"></div>
            </div>
          </div>
          {/* EV Charger Info */}
          <div className="w-1/2 pl-4 flex flex-col justify-center items-center text-center">
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">EV Charger {index + 1}</h4>
            <p className="text-gray-600 dark:text-gray-400">
              Location: Block E<br />
              Energy Consumed: 50 kWh
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>





















    <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">$63,448.78</p>
            </div>
            <button
              type="button"
              style={{ backgroundColor: currentColor }}
              className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
            >
              <BsCurrencyDollar />
            </button>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
            />
          </div>
        </div>
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((item) => (
            <div key={item.title} className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400  mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780  ">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoDot />
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span>
                  <GoDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className=" border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">$93,438</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                    23%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Budget</p>
              </div>
              <div className="mt-8">
                <p className="text-3xl font-semibold">$48,487</p>

                <p className="text-gray-500 mt-1">Expense</p>
              </div>

              <div className="mt-5">
                <SparkLine currentColor={currentColor} id="line-sparkLine" type="Line" height="80px" width="250px" data={SparklineAreaData} color={currentColor} />
              </div>
              <div className="mt-10">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
            </div>
            <div>
              <Stacked currentMode={currentMode} width="320px" height="360px" />
            </div>
          </div>
        </div>
        <div>
          <div
            className=" rounded-2xl md:w-400 p-4 m-3"
            style={{ backgroundColor: currentColor }}
          >
            <div className="flex justify-between items-center ">
              <p className="font-semibold text-white text-2xl">Earnings</p>

              <div>
                <p className="text-2xl text-white font-semibold mt-8">$63,448.78</p>
                <p className="text-gray-200">Monthly revenue</p>
              </div>
            </div>

            <div className="mt-4">
              <SparkLine currentColor={currentColor} id="column-sparkLine" height="100px" type="Column" data={SparklineAreaData} width="320" color="rgb(242, 252, 253)" />
            </div>
          </div>

          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-400 p-8 m-3 flex justify-center items-center gap-10">
            <div>
              <p className="text-2xl font-semibold ">$43,246</p>
              <p className="text-gray-400">Yearly sales</p>
            </div>

            <div className="w-40">
              <Pie id="pie-chart" data={ecomPieChartData} legendVisiblity={false} height="160px" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-10 m-4 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl">
          <div className="flex justify-between items-center gap-2">
            <p className="text-xl font-semibold">Recent Transactions</p>
            <DropDown currentMode={currentMode} />
          </div>
          <div className="mt-10 w-72 md:w-400">
            {recentTransactions.map((item) => (
              <div key={item.title} className="flex justify-between mt-4">
                <div className="flex gap-4">
                  <button
                    type="button"
                    style={{
                      color: item.iconColor,
                      backgroundColor: item.iconBg,
                    }}
                    className="text-2xl rounded-lg p-4 hover:drop-shadow-xl"
                  >
                    {item.icon}
                  </button>
                  <div>
                    <p className="text-md font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>
                <p className={`text-${item.pcColor}`}>{item.amount}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mt-5 border-t-1 border-color">
            <div className="mt-3">
              <Button
                color="white"
                bgColor={currentColor}
                text="Add"
                borderRadius="10px"
              />
            </div>

            <p className="text-gray-400 text-sm">36 Recent Transactions</p>
          </div>
        </div>
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl w-96 md:w-760">
          <div className="flex justify-between items-center gap-2 mb-10">
            <p className="text-xl font-semibold">Sales Overview</p>
            <DropDown currentMode={currentMode} />
          </div>
          <div className="md:w-full overflow-auto">
            <LineChart />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center">
        <div className="md:w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">Weekly Stats</p>
            <button type="button" className="text-xl font-semibold text-gray-500">
              <IoIosMore />
            </button>
          </div>

          <div className="mt-10 ">
            {weeklyStats.map((item) => (
              <div key={item.title} className="flex justify-between mt-4 w-full">
                <div className="flex gap-4">
                  <button
                    type="button"
                    style={{ background: item.iconBg }}
                    className="text-2xl hover:drop-shadow-xl text-white rounded-full p-3"
                  >
                    {item.icon}
                  </button>
                  <div>
                    <p className="text-md font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>

                <p className={`text-${item.pcColor}`}>{item.amount}</p>
              </div>
            ))}
            <div className="mt-4">
              <SparkLine currentColor={currentColor} id="area-sparkLine" height="160px" type="Area" data={SparklineAreaData} width="320" color="rgb(242, 252, 253)" />
            </div>
          </div>

        </div>
        <div className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">MedicalPro Branding</p>
            <button type="button" className="text-xl font-semibold text-gray-400">
              <IoIosMore />
            </button>
          </div>
          <p className="text-xs cursor-pointer hover:drop-shadow-xl font-semibold rounded-lg w-24 bg-orange-400 py-0.5 px-2 text-gray-200 mt-10">
            16 APR, 2021
          </p>

          <div className="flex gap-4 border-b-1 border-color mt-6">
            {medicalproBranding.data.map((item) => (
              <div key={item.title} className="border-r-1 border-color pr-4 pb-2">
                <p className="text-xs text-gray-400">{item.title}</p>
                <p className="text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="border-b-1 border-color pb-4 mt-2">
            <p className="text-md font-semibold mb-2">Teams</p>

            <div className="flex gap-4">
              {medicalproBranding.teams.map((item) => (
                <p
                  key={item.name}
                  style={{ background: item.color }}
                  className="cursor-pointer hover:drop-shadow-xl text-white py-0.5 px-3 rounded-lg text-xs"
                >
                  {item.name}
                </p>
              ))}
            </div>
          </div>
          <div className="mt-2">
            <p className="text-md font-semibold mb-2">Leaders</p>
            <div className="flex gap-4">
              {medicalproBranding.leaders.map((item, index) => (
                <img key={index} className="rounded-full w-8 h-8" src={item.image} alt="" />
              ))}
            </div>
          </div>
          <div className="flex justify-between items-center mt-5 border-t-1 border-color">
            <div className="mt-3">
              <Button
                color="white"
                bgColor={currentColor}
                text="Add"
                borderRadius="10px"
              />
            </div>

            <p className="text-gray-400 text-sm">36 Recent Transactions</p>
          </div>
        </div>
        <div className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">Daily Activities</p>
            <button type="button" className="text-xl font-semibold text-gray-500">
              <IoIosMore />
            </button>
          </div>
          <div className="mt-10">
            <img
              className="md:w-96 h-50 "
              src={product9}
              alt=""
            />
            <div className="mt-8">
              <p className="font-semibold text-lg">React 18 coming soon!</p>
              <p className="text-gray-400 ">By Johnathan Doe</p>
              <p className="mt-8 text-sm text-gray-400">
                This will be the small description for the news you have shown
                here. There could be some great info.
              </p>
              <div className="mt-3">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Read More"
                  borderRadius="10px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;