import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ElectricityUsageGroupedChart = () => {
  const fullChartData = [
    { TOD1: 50000, TOD2: 70000, TOD3: 30000, TOD4: 20000 },
    { TOD1: 40000, TOD2: 60000, TOD3: 20000, TOD4: 10000 },
    { TOD1: 45000, TOD2: 55000, TOD3: 25000, TOD4: 15000 },
    { TOD1: 60000, TOD2: 80000, TOD3: 40000, TOD4: 20000 },
    { TOD1: 80000, TOD2: 100000, TOD3: 50000, TOD4: 25000 },
    { TOD1: 85000, TOD2: 110000, TOD3: 60000, TOD4: 30000 },
    { TOD1: 50000, TOD2: 80000, TOD3: 40000, TOD4: 20000 },
    { TOD1: 40000, TOD2: 70000, TOD3: 30000, TOD4: 10000 },
    { TOD1: 30000, TOD2: 60000, TOD3: 20000, TOD4: 5000 },
    { TOD1: 47022, TOD2: 68748, TOD3: 25000, TOD4: 12000 },
    { TOD1: 50000, TOD2: 70000, TOD3: 30000, TOD4: 20000 },
    { TOD1: 40000, TOD2: 60000, TOD3: 20000, TOD4: 10000 },
    { TOD1: 45000, TOD2: 55000, TOD3: 25000, TOD4: 15000 },
    { TOD1: 60000, TOD2: 80000, TOD3: 40000, TOD4: 20000 },
    { TOD1: 80000, TOD2: 100000, TOD3: 50000, TOD4: 25000 },
    { TOD1: 85000, TOD2: 110000, TOD3: 60000, TOD4: 30000 },
    { TOD1: 50000, TOD2: 80000, TOD3: 40000, TOD4: 20000 },
    { TOD1: 40000, TOD2: 70000, TOD3: 30000, TOD4: 10000 },
    { TOD1: 30000, TOD2: 60000, TOD3: 20000, TOD4: 5000 },
    { TOD1: 47022, TOD2: 68748, TOD3: 25000, TOD4: 12000 },
    { TOD1: 50000, TOD2: 70000, TOD3: 30000, TOD4: 20000 },
    { TOD1: 40000, TOD2: 60000, TOD3: 20000, TOD4: 10000 },
    { TOD1: 45000, TOD2: 55000, TOD3: 25000, TOD4: 15000 },
    { TOD1: 60000, TOD2: 80000, TOD3: 40000, TOD4: 20000 },
    { TOD1: 80000, TOD2: 100000, TOD3: 50000, TOD4: 25000 },
    { TOD1: 85000, TOD2: 110000, TOD3: 60000, TOD4: 30000 },
    { TOD1: 50000, TOD2: 80000, TOD3: 40000, TOD4: 20000 },
    { TOD1: 40000, TOD2: 70000, TOD3: 30000, TOD4: 10000 },
    { TOD1: 30000, TOD2: 60000, TOD3: 20000, TOD4: 5000 },
    { TOD1: 47022, TOD2: 68748, TOD3: 25000, TOD4: 12000 },
  ];

  const chartData = fullChartData.slice(0, 31); // Display data for 31 days

  const currentMonth = new Date().toLocaleString("default", { month: "long" });
  const currentYear = new Date().getFullYear();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#f7f9fc",
        padding: "24px",
        borderRadius: "12px",
        boxShadow: "0 6px 18px rgba(0, 0, 0, 0.1)",
        width: "100%",
      }}
    >
      <div
        style={{
          alignSelf: "center",
          fontSize: "24px",
          fontWeight: "bold",
          color: "",
          paddingBottom: "18px",
        }}
      >
        TOD
      </div>
      
      <div
        style={{
          alignSelf: "flex-end",
          fontSize: "18px",
          color: "#555",
          paddingBottom: "16px",
        }}
      >
      </div>

      <ResponsiveContainer width="95%" height={400}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis
            dataKey="date"
            tick={{ fill: "#555", fontSize: 12 }}
            interval={0} // Show all labels
            textAnchor="end"
            height={50} // Increase height for spacing
            label={{
              value: "Day",
              position: "insideBottom",
              offset: -5,
              fill: "#555",
              fontSize: 14,
            }}
            tickFormatter={(tick, index) => `${index + 1}`} // Label as "Day 1", "Day 2", etc.
          />
          <YAxis
            tick={{ fill: "#555", fontSize: 12 }}
            tickCount={6} // Adjust number of ticks for spacing
            tickFormatter={(value) => `${value / 1000}k`} // Format numbers
            label={{
              value: "Units Consumed",
              angle: -90,
              position: "insideLeft",
              fill: "#555",
              fontSize: 14,
            }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              border: "1px solid #ddd",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          />
          <Legend
            wrapperStyle={{
              color: "#555",
              paddingTop: "10px", // Add padding to the top of the legends
            }}
          />
          <Bar dataKey="TOD1" fill="#1E90FF" name="TOD - 1 (05:00 AM - 11:00 AM)" />
          <Bar dataKey="TOD2" fill="#28a745" name="TOD - 2 (11:00 AM - 05:00 PM)" />
          <Bar dataKey="TOD3" fill="#ffc107" name="TOD - 3 (05:00 PM - 11:00 PM)" />
          <Bar dataKey="TOD4" fill="#dc3545" name="TOD - 4 (11:00 PM - 05:00 AM)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ElectricityUsageGroupedChart;
