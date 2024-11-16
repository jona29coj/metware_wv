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
    </div>
  );
};

export default FacilityUsageCard;
