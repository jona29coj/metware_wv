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
  const ratePerUnit = {
    TOD1: 5.0,
    TOD2: 5.0,
    TOD3: 7.0,
    TOD4: 4.5,
  };

  const fullChartData = [
    { TOD1: 50000, TOD2: 70000, TOD3: 30000, TOD4: 20000 },
    { TOD1: 40000, TOD2: 60000, TOD3: 20000, TOD4: 10000 },
    { TOD1: 45000, TOD2: 55000, TOD3: 25000, TOD4: 15000 },
    { TOD1: 60000, TOD2: 80000, TOD3: 40000, TOD4: 20000 },
    { TOD1: 80000, TOD2: 100000, TOD3: 50000, TOD4: 25000 },
    { TOD1: 85000, TOD2: 110000, TOD3: 60000, TOD4: 30000 },
    { TOD1: 50000, TOD2: 80000, TOD3: 40000, TOD4: 20000 },
  ];

  const chartData = fullChartData.slice(0, 31);

  const convertToRupees = (units, TOD) => {
    if (!ratePerUnit[TOD]) return "N/A";
    return Math.round(units * ratePerUnit[TOD]);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "white",
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
          paddingBottom: "18px",
        }}
      >
        TOD
      </div>

      <ResponsiveContainer width="95%" height={400}>
        <BarChart data={chartData}>
          <CartesianGrid stroke="none" />
          <XAxis
            dataKey="date"
            tick={{ fill: "#555", fontSize: 12 }}
            interval={0}
            textAnchor="end"
            height={50}
            label={{
              value: "Day",
              position: "insideBottom",
              fill: "#555",
              fontSize: 14,
            }}
            tickFormatter={(tick, index) => `${index + 1}`}
          />
          <YAxis
            tick={{ fill: "#555", fontSize: 12 }}
            tickCount={6}
            tickFormatter={(value) => `${Math.round(value / 1000)}k`}
            label={{
              value: "Amount",
              angle: -90,
              position: "insideLeft",
              fill: "#555",
              fontSize: 14,
              dx: -20, // Adjust for spacing
            }}
          />
          <Tooltip
  contentStyle={{
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  }}
  formatter={(value, name) => `₹500`}
/>

          <Legend
            wrapperStyle={{
              color: "#555",
              paddingTop: "10px",
            }}
          />
          <Bar dataKey="TOD1" fill="#8d86d8" name="TOD - 1 (05:00 AM - 11:00 AM)" value="90"/>
          <Bar dataKey="TOD2" fill="#86cb9d" name="TOD - 2 (11:00 AM - 05:00 PM)" />
          <Bar dataKey="TOD3" fill="#f8c55f" name="TOD - 3 (05:00 PM - 11:00 PM)" />
          <Bar dataKey="TOD4" fill="#f76c6c" name="TOD - 4 (11:00 PM - 05:00 AM)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ElectricityUsageGroupedChart;
