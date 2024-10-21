import { useState } from "react";

const IOEBatteryControl = () => {
  const [charge, setCharge] = useState(75);
  const [voltage, setVoltage] = useState(380);
  const [current, setCurrent] = useState(25);
  const [status, setStatus] = useState("Charging");
  const [batteryTemp, setBatteryTemp] = useState(35);
  const [heatingStatus, setHeatingStatus] = useState(false);
  const [energyUsed, setEnergyUsed] = useState(120); // Sample value
const [operatingTime, setOperatingTime] = useState(24); // Sample value
const [totalCycles, setTotalCycles] = useState(15); // Sample value
const [lastMaintenance, setLastMaintenance] = useState("2023-09-01"); // Sample value


  const toggleHeating = () => setHeatingStatus(!heatingStatus);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">IOE Battery Control</h1>

      {/* Overview Card */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
  <div className="bg-white shadow-md rounded-lg p-6">
    <h2 className="text-xl font-semibold mb-4">Overview</h2>
    <div className="grid grid-cols-2 gap-4">
      {/* Battery Charge */}
      <div className="bg-blue-100 p-4 rounded-md shadow-sm">
        <h3 className="font-semibold">Battery Charge</h3>
        <div className="flex items-center mt-2">
          <span className="text-3xl font-bold mr-2">{charge}%</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1M12 8h.01M21 12c0-4.418-3.582-8-8-8S5 7.582 5 12s3.582 8 8 8 8-3.582 8-8z"
            />
          </svg>
        </div>
      </div>

      {/* Current Status */}
      <div className="bg-green-100 p-4 rounded-md shadow-sm">
        <h3 className="font-semibold">Current Status</h3>
        <div className="flex items-center mt-2">
          <span className="text-2xl font-bold">{status}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-green-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
      </div>

      {/* Battery Voltage */}
      <div className="bg-yellow-100 p-4 rounded-md shadow-sm">
        <h3 className="font-semibold">Battery Voltage</h3>
        <span className="text-3xl font-bold">{voltage} V</span>
      </div>

      {/* Battery Temperature */}
      <div className="bg-red-100 p-4 rounded-md shadow-sm">
        <h3 className="font-semibold">Battery Temperature</h3>
        <span className="text-3xl font-bold">{batteryTemp}°C</span>
      </div>

      {/* Additional Metrics */}
      <div className="bg-purple-100 p-4 rounded-md shadow-sm">
        <h3 className="font-semibold">Total Energy Used</h3>
        <span className="text-3xl font-bold">{energyUsed} kWh</span>
      </div>

      <div className="bg-orange-100 p-4 rounded-md shadow-sm">
        <h3 className="font-semibold">Operating Time</h3>
        <span className="text-3xl font-bold">{operatingTime} hrs</span>
      </div>

      <div className="bg-teal-100 p-4 rounded-md shadow-sm">
        <h3 className="font-semibold">Total Cycles</h3>
        <span className="text-3xl font-bold">{totalCycles}</span>
      </div>

      <div className="bg-pink-100 p-4 rounded-md shadow-sm">
        <h3 className="font-semibold">Last Maintenance</h3>
        <span className="text-3xl font-bold">{lastMaintenance}</span>
      </div>
    </div>
  </div>


        {/* Instantaneous Control Card */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Instantaneous Control</h2>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Charge Control:</label>
            <input
              type="range"
              min="0"
              max="100"
              value={charge}
              onChange={(e) => setCharge(e.target.value)}
              className="w-full"
            />
            <div className="mt-2 text-lg font-bold">{charge}%</div>
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Current (A):</label>
            <input
              type="number"
              value={current}
              onChange={(e) => setCurrent(e.target.value)}
              className="border rounded-md p-2 w-full"
            />
            <div className="mt-2 text-lg font-bold">{current} A</div>
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Voltage (V):</label>
            <input
              type="number"
              value={voltage}
              onChange={(e) => setVoltage(e.target.value)}
              className="border rounded-md p-2 w-full"
            />
            <div className="mt-2 text-lg font-bold">{voltage} V</div>
          </div>

          {/* Heating Control */}
          <div className="mb-4">
            <label className="block mb-1 font-medium">Heating Status:</label>
            <button
              onClick={toggleHeating}
              className={`w-full p-2 rounded-md text-white ${
                heatingStatus ? "bg-green-500" : "bg-red-500"
              } transition duration-200`}
            >
              {heatingStatus ? "Heating ON" : "Heating OFF"}
            </button>
          </div>

          {/* PIN for control */}
          <div className="mb-4">
            <label className="block mb-1 font-medium">PIN for Control:</label>
            <input
              type="password"
              className="border rounded-md p-2 w-full"
              placeholder="Enter PIN"
            />
          </div>

          <button className="bg-blue-500 text-white rounded-md p-2 w-full hover:bg-blue-600 transition duration-200">
            Submit
          </button>
        </div>
      </div>

      {/* Logs Table */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Battery Logs</h2>
        <table className="table-auto w-full text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">TimeStamp</th>
              <th className="px-4 py-2">Event</th>
              <th className="px-4 py-2">Current (A)</th>
              <th className="px-4 py-2">Voltage (V)</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">1</td>
              <td className="border px-4 py-2">12/10/2024 14:45</td>
              <td className="border px-4 py-2">Discharge</td>
              <td className="border px-4 py-2">15</td>
              <td className="border px-4 py-2">365</td>
              <td className="border px-4 py-2">Complete</td>
            </tr>
            {/* More rows */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IOEBatteryControl;
