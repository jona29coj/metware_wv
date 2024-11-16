import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Reports = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [reportType, setReportType] = useState('Energy Consumption');

  // Sample data for reports
  const reportData = [
    {
      id: 1,
      date: '2024-10-01',
      type: 'Energy Consumption',
      value: '1500 kWh',
    },
    {
      id: 2,
      date: '2024-10-02',
      type: 'Energy Consumption',
      value: '1600 kWh',
    },
    {
      id: 3,
      date: '2024-10-03',
      type: 'Peak Demand',
      value: '320 kW',
    },
    {
      id: 4,
      date: '2024-10-04',
      type: 'Energy Consumption',
      value: '1400 kWh',
    },
    {
      id: 5,
      date: '2024-10-05',
      type: 'Peak Demand',
      value: '330 kW',
    },
  ];

  const filteredReports = reportData.filter(report => {
    const reportDate = new Date(report.date);
    return reportDate >= startDate && reportDate <= endDate && report.type === reportType;
  });

  return (
    <div className="p-6 bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen">
      <h1 className="text-2xl font-bold mb-10 text-center">Reports</h1>

      {/* Report Type Selector */}
      <div className="mb-4">
        <label className="text-lg font-semibold">Select Report Type:</label>
        <select
          value={reportType}
          onChange={(e) => setReportType(e.target.value)}
          className="bg-white border border-gray-300 p-2 rounded-lg ml-2"
        >
          <option value="Energy Consumption">Energy Consumption</option>
          <option value="Peak Demand">Peak Demand</option>
          <option value="Cost Analysis">Cost Analysis</option>
        </select>
      </div>

      {/* Date Range Picker */}
      <div className="flex mb-4">
        <div className="mr-4">
          <label className="text-lg font-semibold">Start Date:</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="bg-white p-2 rounded shadow"
          />
        </div>
        <div>
          <label className="text-lg font-semibold">End Date:</label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            className="bg-white p-2 rounded shadow"
          />
        </div>
      </div>

      {/* Reports Table */}
      <div className="bg-white shadow-lg rounded-lg p-4 mt-6">
        <h2 className="text-xl font-semibold mb-4">Filtered Reports</h2>
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 text-left">Date</th>
              <th className="py-2 px-4 text-left">Report Type</th>
              <th className="py-2 px-4 text-left">Value</th>
            </tr>
          </thead>
          <tbody>
            {filteredReports.length > 0 ? (
              filteredReports.map((report) => (
                <tr key={report.id} className="border-b hover:bg-gray-100">
                  <td className="py-2 px-4">{report.date}</td>
                  <td className="py-2 px-4">{report.type}</td>
                  <td className="py-2 px-4">{report.value}</td>
                </tr>
              ))
            ) : (
                <tr>
                <td className="py-2 px-4 text-center text-gray-500" colSpan="3">
                  No reports found for selected criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Download Reports Button */}
      <div className="flex justify-center mt-4">
        <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition duration-200">
          Download Reports
        </button>
      </div>
    </div>
  );
};

export default Reports;
