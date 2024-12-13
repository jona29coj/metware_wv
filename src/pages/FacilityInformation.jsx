import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

// Top Clients Data
const topClientsData = [
  {
    name: "Client 1",
    energy: 4585,
    trends: [4300, 4400, 4500, 4585, 4630, 4700, 4750, 4800, 4850, 4900, 4950, 5000],
  },
  {
    name: "Client 2",
    energy: 3122,
    trends: [3000, 3050, 3100, 3122, 3200, 3250, 3300, 3350, 3400, 3450, 3500, 3550],
  },
  {
    name: "Client 3",
    energy: 930,
    trends: [900, 920, 925, 930, 940, 950, 960, 970, 980, 990, 1000, 1020],
  },
  {
    name: "Client 4",
    energy: 666,
    trends: [650, 660, 665, 666, 670, 675, 680, 685, 690, 695, 700, 710],
  },
  {
    name: "Client 5", // New Client
    energy: 1890,
    trends: [1800, 1850, 1880, 1890, 1920, 1950, 1980, 2000, 2050, 2100, 2150, 2200], // New Client Trend Data
  },
];

const TopClients = ({ isSidebarCollapsed }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      {/* Outer Common Card for Top Clients */}
      <h4 className="text-lg font-bold text-gray-700 mb-6">Top Clients</h4>

      {/* Grid Layout for Client Partitions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
        {topClientsData.map((client, index) => (
          <div
            key={client.name}
            className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between border border-gray-300"
          >
            {/* Client Info Section */}
            <h5 className="text-xl font-semibold text-gray-800 mb-2">{client.name}</h5>
            <p className="text-sm text-gray-600">Energy Consumption: {client.energy} kWh</p>
          </div>
        ))}
      </div>

      {/* Common Trend Line Chart Section */}
      <div
        className="w-full -translate-x-4"
        style={{
          maxWidth: "100%",
          height: "400px", // Fixed height for the chart container
        }}
        
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={topClientsData[0].trends.map((_, index) => ({
            month: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][index],
            ...topClientsData.reduce((acc, client, idx) => {
              acc[`client${idx + 1}`] = client.trends[index];
              return acc;
            }, {})
          }))}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            {topClientsData.map((client, index) => (
              <Line
                key={client.name}
                type="monotone"
                dataKey={`client${index + 1}`}
                stroke={["#3F51B5", "#4CAF50", "#FFC107", "#FF5722", "#00BCD4"][index]} // Line colors
                activeDot={{ r: 8 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TopClients;
