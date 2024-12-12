import React from 'react';
import DateSelector from '../components/DateSelector';



const FacilityUsage = () => {

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center pb-4">
        <h3 className="text-lg font-bold text-gray-800">Facility Usage</h3>
        <DateSelector />
      </div>

      {/* Mini Cards Section */}
      <div className="flex flex-col md:flex-row gap-4 pb-4">
        <div className="flex-1 bg-white rounded-lg shadow-sm p-4 border border-gray-300">
          <div className="flex justify-between items-center text-sm pb-2">
            <span className="text-gray-500">Clients:</span>
            <span className="font-semibold text-gray-800">200 MW</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500">Chillers:</span>
            <span className="font-semibold text-gray-800">20 MW</span>
          </div>
        </div>

        <div className="flex-1 bg-white rounded-lg shadow-sm p-4 border border-gray-300">
          <div className="flex justify-between items-center text-sm pb-2">
            <span className="text-gray-500">Common Areas:</span>
            <span className="font-semibold text-gray-800">20 MW</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500">Others:</span>
            <span className="font-semibold text-gray-800">10 MW</span>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="flex justify-center items-center pb-4">
      </div>

      {/* Legends Section */}
      <div className="flex justify-center space-x-8">
        <div className="flex items-center space-x-2">
          <div className="w-5 h-5" style={{ backgroundColor: '#4CAF50' }}></div>
          <span className="text-sm text-gray-800">Clients</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-5 h-5" style={{ backgroundColor: '#3F51B5' }}></div>
          <span className="text-sm text-gray-800">Chillers</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-5 h-5" style={{ backgroundColor: '#FFC107' }}></div>
          <span className="text-sm text-gray-800">Common Areas</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-5 h-5" style={{ backgroundColor: '#FF5722' }}></div>
          <span className="text-sm text-gray-800">Others</span>
        </div>
      </div>
    </div>
  );
};

export default FacilityUsage;
