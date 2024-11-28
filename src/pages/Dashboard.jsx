import React,{useState} from 'react';
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
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome
import DoughnutChart from '../Charts/FacilityUsageChart';
import { DateRangePicker } from "react-date-range";
import facinfo from './facimg.png';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import RadialChart from './RadialProgressBar';
import RadialProgressBar from './RadialProgressBar';
import { ResponsivePie } from '@nivo/pie';
import { ResponsiveBar } from '@nivo/bar';
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts"; 





const Dashboard = () => {
  const [showDescription, setShowDescription] = useState(false);
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

 

const pieChartOptions = {
  chart: {
    type: "pie",
    backgroundColor: "transparent", // Match the card background
    height: "350px", // Increased the height of the pie chart
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
        enabled: true,
        format: "{point.name}: {point.percentage:.0f}%", // No decimal points in the percentage
        style: {
          color: "black",
          fontSize: "14px", // Increased font size for labels
          fontWeight: "bold", // Added bold to make labels more prominent
        },
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



  const handleRangeChange = (ranges) => {
    setRange([ranges.selection]);
  };

  const [selectedRange, setSelectedRange] = useState("Today");

  // Other states like showDatePicker, dateType, etc.

  const [selectedPeriod, setSelectedPeriod] = useState("today"); // For Today, Last Week, Last Month, etc.
  const [selectedDate, setSelectedDate] = useState(""); // For custom date selection
  const [weekStartDate, setWeekStartDate] = useState(""); // Start date for week selection
  const [weekEndDate, setWeekEndDate] = useState(""); // End date for week selection
  const [selectedMonth, setSelectedMonth] = useState(""); // For month selection
  const [selectedYear, setSelectedYear] = useState(""); // For year selection

  const handlePeriodChange = (period) => {
    setSelectedPeriod(period);
  };

  const calculateWeekDates = (date) => {
    const dayOfWeek = date.getDay(); // Get day of the week (0 = Sunday, 1 = Monday, etc.)
    const startOfWeek = new Date(date);
    const endOfWeek = new Date(date);

    // Adjust the start date to the beginning of the week (Sunday or Monday)
    startOfWeek.setDate(date.getDate() - dayOfWeek); // Start of the week (Sunday)
    endOfWeek.setDate(startOfWeek.getDate() + 6); // End of the week (Saturday)

    setWeekStartDate(startOfWeek.toISOString().split("T")[0]);
    setWeekEndDate(endOfWeek.toISOString().split("T")[0]);
  };

  const handleNavigation = (direction) => {
    let currentDate = new Date();

    if (selectedPeriod === "today") {
      if (direction === "prev") {
        currentDate.setDate(currentDate.getDate() - 1);
      } else {
        currentDate.setDate(currentDate.getDate() + 1);
      }
      setSelectedDate(currentDate.toISOString().split("T")[0]);
    }

    if (selectedPeriod === "lastWeek") {
      if (direction === "prev") {
        currentDate.setDate(currentDate.getDate() - 7);
      } else {
        currentDate.setDate(currentDate.getDate() + 7);
      }
      calculateWeekDates(currentDate); // Recalculate the start and end of the week
    }

    if (selectedPeriod === "lastMonth") {
      if (direction === "prev") {
        currentDate.setMonth(currentDate.getMonth() - 1);
      } else {
        currentDate.setMonth(currentDate.getMonth() + 1);
      }
      setSelectedMonth(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
    }

    if (selectedPeriod === "lastYear") {
      if (direction === "prev") {
        currentDate.setFullYear(currentDate.getFullYear() - 1);
      } else {
        currentDate.setFullYear(currentDate.getFullYear() + 1);
      }
      setSelectedYear(currentDate.getFullYear());
    }
  };
  const chartData = [
    { id: "Clients", label: "Clients", value: 100, color: "#4CAF50" }, // Green
    { id: "Chillers", label: "Chillers", value: 80, color: "#3F51B5" }, // Blue
    { id: "Common Areas", label: "Common Areas", value: 60, color: "#FFC107" }, // Yellow
    { id: "Others", label: "Others", value: 20, color: "#FF5722" }, // Orange
  ];
  
  

  // Define the handler function for date range selection
  

  return (
<div className="min-h-screen flex flex-col bg-gray-100">
  {/* Container with Common Background */}
  
{/* Container for Mini Cards */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5">

  {/* Mini Card 1: Facility Information */}
  <div className="bg-white rounded-lg shadow-sm p-4">
    <h4 className="text-base font-semibold text-gray-700 mb-2">
      <i className="text-gray-500"></i> Facility Information
    </h4>
    <div className="flex flex-col">
      {/* Facility Details */}
      <div className="text-sm text-gray-600 space-y-1 mb-4">
        <p className="font-medium">IIT Madras Research Park</p>
        <p>BUA: <span className="font-semibold">12 lakhs sq.ft.</span></p>
        <p>Location: <span className="font-semibold">Chennai, India</span></p>
        <p>Climate: <span className="font-semibold">Hot & Humid</span></p>
      </div>
    </div>
  </div>

  {/* Mini Card 2: Building Score */}
  <div className="bg-white rounded-lg shadow-sm p-4">
  <h4 className="text-base font-semibold text-gray-700 mb-2">Elements Score</h4>
  <h5 className="text-lg font-medium text-gray-900 mb-1">
    Your Building Score: <span className="font-bold">760</span>
  </h5>
  <p className="text-sm text-gray-500 mb-4">Suggestions for improvement</p>
  <div className="flex items-center justify-between mt-2">
    {/* Progress Bar */}
    <div className="relative flex-grow mr-4">
      <div className="w-full h-3 bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 rounded-full">
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
    {/* Info Icon */}
    <span className="text-gray-500 text-xl transform -translate-y-2 mr-3">ⓘ</span>
    {/* Button */}
    <button className="bg-gray-800 text-white rounded-md px-6 py-2 text-sm font-semibold hover:bg-gray-900 transition-colors duration-200 transform -translate-y-2">
      CONNECT
    </button>
  </div>
</div>









  {/* Mini Card 3: Savings */}
  <div className="bg-white rounded-lg shadow-sm p-4">
  <div className="flex items-center justify-between">
    <h4 className="text-base font-semibold text-gray-700 mb-2">Savings</h4>
    <div className="text-sm text-gray-500 flex items-center">
      Today <span className="ml-1">▼</span>
    </div>
  </div>
  <div className="grid grid-cols-2 gap-4 mt-2">
    <div>
      <p className="text-sm text-gray-500">Energy</p>
      <h5 className="text-2xl font-semibold text-gray-900">1.4K <span className="text-sm font-normal">kWh (Avg)</span></h5>
      <p className="text-sm text-gray-500 flex items-center">
        During Peak Shaving <span className="ml-1 text-gray-400">ⓘ</span>
      </p>
    </div>
    <div>
      <p className="text-sm text-gray-500">Cost</p>
      <h5 className="text-2xl font-semibold text-gray-900">₹ 2K</h5>
      <p className="text-sm text-gray-500 flex items-center">
        During peak hours <span className="ml-1 text-gray-400">ⓘ</span>
      </p>
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
    <div className="flex flex-col items-end space-y-2">
      <div className="flex items-center space-x-1">
        <button
          className={`px-2 py-1 text-sm rounded ${
            selectedPeriod === "today"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
          }`}
          onClick={() => handlePeriodChange("today")}
        >
          Day
        </button>
        <button
          className={`px-2 py-1 text-sm rounded ${
            selectedPeriod === "lastWeek"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
          }`}
          onClick={() => handlePeriodChange("lastWeek")}
        >
          Week
        </button>
        <button
          className={`px-2 py-1 text-sm rounded ${
            selectedPeriod === "lastMonth"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
          }`}
          onClick={() => handlePeriodChange("lastMonth")}
        >
          Month
        </button>
        <button
          className={`px-2 py-1 text-sm rounded ${
            selectedPeriod === "lastYear"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
          }`}
          onClick={() => handlePeriodChange("lastYear")}
        >
          Year
        </button>
      </div>

      {/* Date Input Section with Navigation */}
      <div className="flex items-center space-x-2">
        <button
          onClick={() => handleNavigation("prev")}
          className="p-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>

        {selectedPeriod === "today" && (
          <input
            type="date"
            className="border border-gray-300 rounded px-2 py-1 text-sm dark:bg-gray-800 dark:text-gray-300"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        )}
        {selectedPeriod === "lastWeek" && (
          <input
            type="date"
            className="border border-gray-300 rounded px-2 py-1 text-sm dark:bg-gray-800 dark:text-gray-300"
            value={weekStartDate}
            onChange={(e) => calculateWeekDates(new Date(e.target.value))}
          />
        )}
        {selectedPeriod === "lastMonth" && (
          <input
            type="month"
            className="border border-gray-300 rounded px-2 py-1 text-sm dark:bg-gray-800 dark:text-gray-300"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          />
        )}
        {selectedPeriod === "lastYear" && (
          <input
            type="number"
            className="border border-gray-300 rounded px-2 py-1 text-sm dark:bg-gray-800 dark:text-gray-300"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            placeholder="YYYY"
          />
        )}
        <button
          onClick={() => handleNavigation("next")}
          className="p-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </div>

  {/* Content Section */}
  {/* Top Row Section: Two Boxes Side by Side */}
  <div className="flex flex-row mb-4 space-x-4">
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
  <div className="flex flex-col items-center mr-4 w-48">  {/* Added width to limit its space */}
  {/* Mini Card Wrapper */}
  <div
    className="bg-white rounded-lg shadow-sm p-4 border border-gray-300 w-full flex flex-col items-center mt-7"
    style={{ marginLeft: "30px" }} // Adjust this value to control the horizontal shift
  >
    {/* Circle with Intense Glow Effect */}
    <div className="relative mb-4 mt-2 w-20 h-20"> {/* Reduced size to w-20 h-20 */}
      {/* Outer Glowing Ring */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          boxShadow: "0 0 10px 5px rgba(0, 255, 0, 0.6)", // Reduced thickness
          border: "2px solid rgba(0, 255, 0, 0.3)", // Subtle border for enhancement
          filter: "blur(3px)", // Soft glow effect
        }}
      ></div>

      {/* Inner Circle */}
      <div
        className="w-full h-full rounded-full shadow-lg flex items-center justify-center relative"
        style={{
          background: "white",
          boxShadow: "0 0 15px 6px rgba(0, 255, 0, 0.6)", // Glow for inner circle
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
  <div className="flex-1 -mt-24">
    <EnergySourcesBarChart />
  </div>
</div>

</div>


{/* Facility Usage Card */}
<div className="bg-white rounded-2xl shadow-lg p-6 w-full space-y-1">
  <div className='flex justify-between'>
  <h3 className="text-lg font-bold text-gray-800">Facility Usage</h3>
  {/* Header Section */}
  <div className="flex justify-between items-center mb-4">
    <div className="flex flex-col items-end space-y-2">
      <div className="flex items-center space-x-1">
        <button
          className={`px-2 py-1 text-sm rounded ${
            selectedPeriod === "today"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
          }`}
          onClick={() => handlePeriodChange("today")}
        >
          Day
        </button>
        <button
          className={`px-2 py-1 text-sm rounded ${
            selectedPeriod === "lastWeek"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
          }`}
          onClick={() => handlePeriodChange("lastWeek")}
        >
          Week
        </button>
        <button
          className={`px-2 py-1 text-sm rounded ${
            selectedPeriod === "lastMonth"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
          }`}
          onClick={() => handlePeriodChange("lastMonth")}
        >
          Month
        </button>
        <button
          className={`px-2 py-1 text-sm rounded ${
            selectedPeriod === "lastYear"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
          }`}
          onClick={() => handlePeriodChange("lastYear")}
        >
          Year
        </button>
      </div>

      {/* Date Input Section with Navigation */}
      <div className="flex items-center space-x-2">
        <button
          onClick={() => handleNavigation("prev")}
          className="p-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>

        {selectedPeriod === "today" && (
          <input
            type="date"
            className="border border-gray-300 rounded px-2 py-1 text-sm dark:bg-gray-800 dark:text-gray-300"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        )}
        {selectedPeriod === "lastWeek" && (
          <input
            type="date"
            className="border border-gray-300 rounded px-2 py-1 text-sm dark:bg-gray-800 dark:text-gray-300"
            value={weekStartDate}
            onChange={(e) => calculateWeekDates(new Date(e.target.value))}
          />
        )}
        {selectedPeriod === "lastMonth" && (
          <input
            type="month"
            className="border border-gray-300 rounded px-2 py-1 text-sm dark:bg-gray-800 dark:text-gray-300"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          />
        )}
        {selectedPeriod === "lastYear" && (
          <input
            type="number"
            className="border border-gray-300 rounded px-2 py-1 text-sm dark:bg-gray-800 dark:text-gray-300"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            placeholder="YYYY"
          />
        )}
        <button
          onClick={() => handleNavigation("next")}
          className="p-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
  </div>

  {/* Mini Cards Section */}
  <div className="mt-8 flex flex-row mb-4 space-x-4"> {/* Added top margin */}
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
</div>*/
/* Last Mini Card: Peak Consumption Data 
  <div className="flex-1 p-4 bg-white rounded-lg">
    <h4 className="text-base font-semibold text-gray-700 mb-2">
      <i className="text-gray-500 mr-2"></i> Peak Consumption
    </h4>
    <ul className="text-sm text-gray-600 space-y-1 ml-1">
      <li><i className="text-gray-500 mr-1"></i> Peak Load Time: <span className="font-semibold">5:00 PM</span></li>
      <li><i className="text-gray-500 mr-1"></i> Peak Demand: <span className="font-semibold">500 kW</span></li>
      <li><i className="text-gray-500 mr-1"></i> Daily Peak Consumption: <span className="font-semibold">8,400 kWh</span></li>
      <li><i className="text-gray-500 mr-1"></i> Weekly Peak Consumption: <span className="font-semibold">58,800 kWh</span></li>
    </ul>
  </div>
*/}
