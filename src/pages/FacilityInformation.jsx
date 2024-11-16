import React, { useState } from 'react';

const FacilityUsageCard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().slice(0, 10)); // Default to current date

  // Sample data
  const facilityUsageData = [
    { label: 'Chiller', energy: '17770 kWh', percentage: '47.66%' },
    { label: 'Client', energy: '17032 kWh', percentage: '45.68%' },
    { label: 'Others', energy: '2437 kWh', percentage: '6.54%' },
    { label: 'Common Area', energy: '48 kWh', percentage: '0.13%' },
  ];

  const topClientsData = [
    { name: 'Pfizer', energy: '4585 kWh' },
    { name: 'SGRI', energy: '3122 kWh' },
    { name: 'Tata Communications', energy: '930 kWh' },
    { name: 'ARCI', energy: '666 kWh' },
  ];

  // Format date to ddmmyyyy
  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split('-');
    return `${day}${month}${year}`;
  };

  // Handle date change
  const handleDateChange = (event) => {
    const date = event.target.value;
    setSelectedDate(date);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-gray-700">Facility Usage</h3>

        {/* Date Input on the Right */}
        <div className="text-right">
          <input
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
            className="bg-white border border-gray-300 rounded px-4 py-2 text-sm"
          />
        </div>
      </div>

      {/* Facility Usage Information */}
      <div className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {facilityUsageData.map((item) => (
            <div key={item.label} className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <h5 className="text-md font-semibold text-gray-800">{item.label}</h5>
              <p className="text-sm text-gray-600">Energy: {item.energy}</p>
              <p className="text-sm text-gray-600">Percentage: {item.percentage}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Top Clients */}
      <div>
        <h4 className="text-lg font-semibold text-gray-700">Top Clients</h4>
        <ul className="mt-4">
          {topClientsData.map((client) => (
            <li key={client.name} className="flex justify-between p-2 border-b">
              <span className="text-gray-700">{client.name}</span>
              <span className="text-gray-600">{client.energy}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FacilityUsageCard;
