import React from 'react';
import { FaUser, FaChartLine, FaBolt, FaCalendarAlt, FaClock } from 'react-icons/fa';

const ClientSection = () => {
  return (
    <div className="client-section bg-gray-100 min-h-screen p-8">
      {/* Page Title */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Client Monitoring Dashboard</h1>
        <p className="text-gray-600 mt-2">Detailed performance metrics and activity for client management</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Client Overview Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <FaUser className="text-blue-600 text-3xl mr-4" />
            <h2 className="text-2xl font-semibold">Client Overview</h2>
          </div>
          <p className="text-gray-700">
            <strong>Client Name:</strong> ABC Corporation<br />
            <strong>Location:</strong> Headquarters, Block A<br />
            <strong>Subscription Type:</strong> Premium<br />
            <strong>Status:</strong> <span className="text-green-500 font-semibold">Active</span>
          </p>
        </div>

        {/* Performance Metrics Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <FaChartLine className="text-green-600 text-3xl mr-4" />
            <h2 className="text-2xl font-semibold">Performance Metrics</h2>
          </div>
          <div className="text-gray-700 space-y-2">
            <p><strong>Energy Consumed:</strong> 120 kWh</p>
            <p><strong>Peak Usage:</strong> 80 kWh at 2:00 PM</p>
            <p><strong>Average Consumption:</strong> 60 kWh/day</p>
            <p><strong>Billing Cycle:</strong> 1st of every month</p>
          </div>
          {/* Progress Bar Example */}
          <div className="mt-4">
            <p className="text-gray-600 text-sm">Energy Usage Progress</p>
            <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
              <div className="bg-green-500 h-3 rounded-full" style={{ width: '70%' }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        {/* Recent Activity Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <FaClock className="text-purple-600 text-3xl mr-4" />
            <h2 className="text-2xl font-semibold">Recent Activity</h2>
          </div>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Client added 5 new devices on October 15, 2024</li>
            <li>Peak energy consumption recorded on October 14, 2024</li>
            <li>Client scheduled system maintenance for October 20, 2024</li>
          </ul>
        </div>

        {/* Billing Information Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <FaCalendarAlt className="text-yellow-600 text-3xl mr-4" />
            <h2 className="text-2xl font-semibold">Billing Information</h2>
          </div>
          <div className="text-gray-700 space-y-2">
            <p><strong>Next Billing Date:</strong> November 1, 2024</p>
            <p><strong>Last Invoice:</strong> $240.00</p>
            <p><strong>Payment Status:</strong> <span className="text-green-500 font-semibold">Paid</span></p>
            <p><strong>Subscription:</strong> Auto-renew</p>
          </div>
          {/* Progress Circle Example */}
          <div className="flex justify-center mt-6">
            <div className="w-24 h-24 bg-gray-100 rounded-full border-t-4 border-green-500 flex items-center justify-center">
              <span className="text-lg font-semibold text-green-500">70%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSection;
