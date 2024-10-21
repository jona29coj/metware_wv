import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const HotWaterControlPage = () => {
  const [temperature, setTemperature] = useState(70);
  const [flow, setFlow] = useState(50);
  const [pressure, setPressure] = useState(2.5);
  const [heatingOn, setHeatingOn] = useState(false);

  const handleTemperatureChange = (e) => setTemperature(e.target.value);
  const handleFlowChange = (e) => setFlow(e.target.value);
  const handlePressureChange = (e) => setPressure(e.target.value);
  const toggleHeating = () => setHeatingOn(!heatingOn);

  // Sample data for the chart
  const chartData = [
    { time: '00:00', temperature: 65, flow: 40, pressure: 2.5 },
    { time: '01:00', temperature: 68, flow: 45, pressure: 2.6 },
    { time: '02:00', temperature: 70, flow: 50, pressure: 2.5 },
    { time: '03:00', temperature: 72, flow: 55, pressure: 2.7 },
    { time: '04:00', temperature: 74, flow: 60, pressure: 2.8 },
    { time: '05:00', temperature: 76, flow: 65, pressure: 2.9 },
    { time: '06:00', temperature: 78, flow: 70, pressure: 3.0 },
    { time: '07:00', temperature: 80, flow: 75, pressure: 3.1 },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Hot Water Control</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Overview Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Overview</h2>
          
          <div className="grid grid-cols-2 gap-4">
            {/* Total Water Usage */}
            <div className="bg-blue-100 p-4 rounded-md shadow-md text-center">
              <h3 className="font-medium text-blue-600">Total Water Usage</h3>
              <p className="text-2xl font-bold">12,345 L</p>
              <div className="mt-2">
                <p className="text-sm text-gray-600">Daily Average: 1,230 L</p>
                <p className="text-sm text-gray-600">Usage Trend: <span className="text-green-500">+5%</span></p>
              </div>
            </div>

            {/* Peak Flow Rate */}
            <div className="bg-green-100 p-4 rounded-md shadow-md text-center">
              <h3 className="font-medium text-green-600">Peak Flow Rate</h3>
              <p className="text-2xl font-bold">90 L/min</p>
              <div className="mt-2">
                <p className="text-sm text-gray-600">Last 24 hrs Peak: 88 L/min</p>
                <p className="text-sm text-gray-600">Flow Status: <span className="text-red-500">Near Peak</span></p>
              </div>
            </div>

            {/* Average Temperature */}
            <div className="bg-red-100 p-4 rounded-md shadow-md text-center">
              <h3 className="font-medium text-red-600">Average Temperature</h3>
              <p className="text-2xl font-bold">75°C</p>
              <div className="mt-2">
                <p className="text-sm text-gray-600">Optimal Temp: 70°C - 80°C</p>
                <p className="text-sm text-gray-600">Efficiency: <span className="text-green-500">Good</span></p>
              </div>
            </div>

            {/* System Pressure */}
            <div className="bg-yellow-100 p-4 rounded-md shadow-md text-center">
              <h3 className="font-medium text-yellow-600">System Pressure</h3>
              <p className="text-2xl font-bold">2.8 Bar</p>
              <div className="mt-2">
                <p className="text-sm text-gray-600">Recommended: 2.5 - 3 Bar</p>
                <p className="text-sm text-gray-600">Pressure Status: <span className="text-green-500">Stable</span></p>
              </div>
            </div>
          </div>

          {/* Chart for System Performance */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-4">System Performance Over Time</h3>
            <LineChart width={500} height={300} data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="temperature" stroke="#ff7300" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="flow" stroke="#387908" />
              <Line type="monotone" dataKey="pressure" stroke="#0033cc" />
            </LineChart>
          </div>
        </div>

        {/* Instantaneous Control Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Instantaneous Control</h2>

          {/* Temperature Control */}
          <div className="mb-6">
            <label className="block mb-1 font-medium text-gray-700">Water Temperature:</label>
            <div className="flex items-center justify-between">
              <div className="relative w-20 h-20 bg-blue-100 rounded-full shadow-inner flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">{temperature}°C</span>
                </div>
              </div>
              <input
                type="range"
                min="50"
                max="100"
                value={temperature}
                onChange={handleTemperatureChange}
                className="ml-6 w-full"
              />
            </div>
          </div>

          {/* Flow Control */}
          <div className="mb-6">
            <label className="block mb-1 font-medium text-gray-700">Water Flow (%):</label>
            <div className="flex items-center justify-between">
              <div className="relative w-20 h-20 bg-green-100 rounded-full shadow-inner flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-green-600">{flow}%</span>
                </div>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={flow}
                onChange={handleFlowChange}
                className="ml-6 w-full"
              />
            </div>
          </div>

          {/* Pressure Control */}
          <div className="mb-6">
            <label className="block mb-1 font-medium text-gray-700">Water Pressure (Bar):</label>
            <div className="flex items-center justify-between">
              <div className="relative w-20 h-20 bg-yellow-100 rounded-full shadow-inner flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-yellow-600">{pressure} Bar</span>
                </div>
              </div>
              <input
                type="number"
                value={pressure}
                step="0.1"
                min="0"
                max="5"
                onChange={handlePressureChange}
                className="ml-6 border rounded-md p-2 w-full"
              />
            </div>
          </div>

          {/* Heating Control */}
          <div className="mb-6">
            <label className="block mb-1 font-medium text-gray-700">Heating Status:</label>
            <div className="flex items-center justify-center">
              <button
                onClick={toggleHeating}
                className={`w-full p-4 rounded-md text-white flex items-center justify-center space-x-2 transition duration-200 ${
                  heatingOn ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'
                }`}
              >
                {heatingOn ? (
                  <>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 10-2 0v10a1 1 0 002 0zm4-10v10a1 1 0 11-2 0V6a1 1 0 112 0zm-8 0v10a1 1 0 11-2 0V6a1 1 0 012 0z"></path>
                    </svg>
                    <span>Heating ON</span>
                  </>
                ) : (
                  <>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                    <span>Heating OFF</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* PIN or Safety Confirmation */}
          <div className="mb-6">
            <label className="block mb-1 font-medium text-gray-700">PIN for Control:</label>
            <input
              type="password"
              className="border rounded-md p-2 w-full"
              placeholder="Enter PIN"
            />
          </div>

          <button className="bg-blue-500 text-white rounded-md p-4 w-full hover:bg-blue-600 transition duration-200">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotWaterControlPage;
