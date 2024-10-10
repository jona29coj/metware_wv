import React from 'react'
import '../pages/Chiller.css';

const Chiller = () => {
  return (
<div className="grid grid-cols-1 gap-4 mb-4">
  <div className="bg-white dark:bg-secondary-dark-bg rounded-xl shadow-md p-4 mb-4">
    <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-12">Chillers</h3>
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
</div>  )
}

export default Chiller