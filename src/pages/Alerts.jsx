import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import './Alerts.css'; // Import custom CSS for styles and animations

const AlertsOverview = () => {
  // Sample data for alerts
  const alertsData = [
    {
      id: 1,
      type: 'Warning',
      message: 'High temperature detected in Chiller Unit A!',
      status: 'Active',
      timestamp: '2024-10-17 10:45 AM',
      icon: faExclamationTriangle,
    },
    {
      id: 2,
      type: 'Critical',
      message: 'Chiller Unit B has shut down unexpectedly.',
      status: 'Acknowledged',
      timestamp: '2024-10-17 09:30 AM',
      icon: faTimesCircle,
    },
    {
      id: 3,
      type: 'Info',
      message: 'Maintenance scheduled for all units next week.',
      status: 'Resolved',
      timestamp: '2024-10-16 02:00 PM',
      icon: faCheckCircle,
    },
    {
      id: 4,
      type: 'Warning',
      message: 'Low battery level detected in Energy Storage Unit C.',
      status: 'Active',
      timestamp: '2024-10-15 11:15 AM',
      icon: faExclamationTriangle,
    },
  ];

  return (
<div className="p-6 bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Alerts Overview</h1>

      {/* Alerts List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {alertsData.map((alert) => (
          <div
            key={alert.id}
            className={`alert-card animate-fade-in bg-white shadow-lg rounded-lg p-6 flex flex-col mb-4 ${
              alert.status === 'Active' ? 'border-l-4 border-yellow-500' : alert.status === 'Critical' ? 'border-l-4 border-red-500' : 'border-l-4 border-green-500'
            }`}
          >
            <div className="flex items-center mb-2">
              <FontAwesomeIcon icon={alert.icon} className={`text-3xl ${alert.status === 'Active' ? 'text-yellow-600' : alert.status === 'Critical' ? 'text-red-600' : 'text-green-600'}`} />
              <h2 className="text-xl font-semibold ml-2">{alert.type}</h2>
            </div>
            <p className="text-lg">{alert.message}</p>
            <p className="text-sm text-gray-600 mt-2">Status: {alert.status}</p>
            <p className="text-sm text-gray-500">{alert.timestamp}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlertsOverview;
