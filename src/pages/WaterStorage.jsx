import React from 'react'
import '../pages/waterstorage.css';

const WaterStorage = () => {
  return (
<div className="grid grid-cols-1 gap-6 mb-6">
  <div className="bg-white dark:bg-secondary-dark-bg rounded-xl shadow-lg p-6">
    <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-6">
      Water Storage 
    </h3>

    {/* Two-Column Layout for Cold and Hot Water Storage */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Cold Water Storage */}
      <div className="p-6 bg-blue-50 dark:bg-blue-900 rounded-lg shadow-md">
        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-6 text-center">
          Cold Water Storage
        </h4>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Column: Tank Visual */}
          <div className="flex-1 flex justify-center items-center">
            <div className="tank-body">
              <div className="water-level cold-water"></div>
            </div>
          </div>

          {/* Right Column: Data Display */}
          <div className="flex-1">
            {/* Animated Inlet and Outlet Flow */}
            <div className="flow-visual flex justify-between mb-6">
              <div className="flow-container">
                <div className="inlet-flow"></div>
                <p className="flow-label text-gray-800 dark:text-gray-200 text-center">
                  Inlet Flow
                </p>
              </div>
              <div className="flow-container">
                <div className="outlet-flow"></div>
                <p className="flow-label text-gray-800 dark:text-gray-200 text-center">
                  Outlet Flow
                </p>
              </div>
            </div>

            {/* Mini Data Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <h5 className="font-semibold text-gray-800 dark:text-gray-200">Charging Energy</h5>
                <p className="text-xl font-bold text-blue-600">0 kWh</p>
              </div>
              <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <h5 className="font-semibold text-gray-800 dark:text-gray-200">Discharging Energy</h5>
                <p className="text-xl font-bold text-red-600">0 kWh</p>
              </div>
            </div>

            {/* Temperature and Status */}
            <div className="mt-6 p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md">
              <h5 className="font-semibold text-gray-800 dark:text-gray-200">
                Stored Water Temperature
              </h5>
              <p className="text-xl font-bold text-teal-600">7°C</p>
            </div>
            <div className="mt-4 text-lg font-bold text-center">
              <span className="text-green-500">Status: Running</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hot Water Storage */}
      <div className="p-6 bg-red-50 dark:bg-red-900 rounded-lg shadow-md">
        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-6 text-center">
          Hot Water Storage
        </h4>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Column: Tank Visual */}
          <div className="flex-1 flex justify-center items-center">
            <div className="tank-body">
              <div className="water-level hot-water"></div>
            </div>
          </div>

          {/* Right Column: Data Display */}
          <div className="flex-1">
            {/* Animated Flow */}
            <div className="flow-visual flex justify-center mb-6">
              <div className="flow-container">
                <div className="delivery-flow"></div>
                <p className="flow-label text-gray-800 dark:text-gray-200 text-center">
                  Delivery Flow
                </p>
              </div>
            </div>

            {/* Mini Data Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <h5 className="font-semibold text-gray-800 dark:text-gray-200">Charging Energy</h5>
                <p className="text-xl font-bold text-blue-600">0 kWh</p>
              </div>
              <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <h5 className="font-semibold text-gray-800 dark:text-gray-200">Discharging Energy</h5>
                <p className="text-xl font-bold text-red-600">0 kWh</p>
              </div>
            </div>

            {/* Temperature and Status */}
            <div className="mt-6 p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md">
              <h5 className="font-semibold text-gray-800 dark:text-gray-200">
                Stored Water Temperature
              </h5>
              <p className="text-xl font-bold text-red-600">35°C</p>
            </div>
            <div className="mt-4 text-lg font-bold text-center">
              <span className="text-red-500">Status: Off</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default WaterStorage
