import React from 'react';

const Edmc = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
      {/* First Section */}
      <div className="bg-white shadow-md p-3 rounded-md w-full lg:w-1/2 flex-grow">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 h-full">
          {/* Meters */}
          <div className="flex flex-col justify-center items-center border-b sm:border-b-0 sm:border-r border-gray-200 pb-4 sm:pb-0 sm:pr-3 h-full">
          <h3 className="text-xxs md:text-xs text-gray-500 font-medium pb-2 relative lg:bottom-1 md:bottom-0">Meters</h3>
            <p className="text-lg md:text-xl font-extrabold text-gray-900">10</p>
          </div>
          {/* Consumption */}
          <div className="flex flex-col justify-center items-center border-b sm:border-b-0 sm:border-r border-gray-200 pb-3 sm:pb-0 sm:pr-3 h-full">
          <h3 className="text-xxs md:text-xs text-gray-500 font-medium pb-2 relative lg:bottom-1 md:bottom-0">Consumption</h3>
            <p className="text-lg md:text-xl font-extrabold text-gray-900">11,438 <span className="text-xxxs md:text-xxs font-normal">kWh</span></p>
          </div>
          {/* Cost */}
          <div className="flex flex-col justify-center items-center h-full">
          <h3 className="text-xxs md:text-xs text-gray-500 font-medium pb-2 relative lg:bottom-1 md:bottom-0">Cost</h3>
            <p className="text-lg md:text-xl font-extrabold text-gray-900">₹78,545</p>
          </div>
        </div>
      </div>
      
      {/* Second Section */}
      <div className="bg-white shadow-md p-3 rounded-md w-full lg:w-1/2 flex-grow">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 h-full">
          {/* Normal Power Load */}
          <div className="flex flex-col justify-center items-center border-b sm:border-b-0 sm:border-r border-gray-200 pb-4 sm:pb-0 sm:pr-3 h-full">
            <h3 className="text-xxs md:text-xs font-medium text-gray-500 pb-1">
              Power Load: <span className="text-blue-600">Normal</span>
            </h3>
            <p className="text-lg md:text-xl font-extrabold text-gray-900 pb-1">8,594 kWh</p>
            <p className="text-xxs md:text-xs text-gray-600">₹52,427</p>
          </div>
          {/* Peak Power Load */}
          <div className="flex flex-col justify-center items-center border-b sm:border-b-0 sm:border-r border-gray-200 pb-4 sm:pb-0 sm:pr-3 h-full">
            <h3 className="text-xxs md:text-xs font-medium text-gray-500 pb-1">
              Power Load: <span className="text-red-600">Peak</span>
            </h3>
            <p className="text-lg md:text-xl font-extrabold text-gray-900 pb-1">2,843 kWh</p>
            <p className="text-xxs md:text-xs text-gray-600">₹26,117</p>
          </div>
          {/* Off-Peak Power Load */}
          <div className="flex flex-col justify-center items-center h-full">
            <h3 className="text-xxs md:text-xs font-medium text-gray-500 pb-1">
              Power Load: <span className="text-orange-600">Off-Peak</span>
            </h3>
            <p className="text-lg md:text-xl font-extrabold text-gray-900 pb-1">5,301 kWh</p>
            <p className="text-xxs md:text-xs text-gray-600">₹24,252</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edmc;
