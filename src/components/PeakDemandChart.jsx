import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const PeakDemandChart = () => {
  const data = [
    { month: "Jan", "2024": 560.88, "2023": 578.56 },
    { month: "Feb", "2024": 555.0, "2023": 560.16 },
    { month: "Mar", "2024": 556.8, "2023": 555.0 },
    { month: "Apr", "2024": 555.0, "2023": 555.0 },
    { month: "May", "2024": 577.68, "2023": 608.16 },
    { month: "Jun", "2024": 613.44, "2023": 617.04 },
    { month: "Jul", "2024": 615.12, "2023": 615.12 },
    { month: "Aug", "2024": 604.08, "2023": 612.24 },
    { month: "Sep", "2024": 628.56, "2023": 638.56 },
    { month: "Oct", "2024": 641.52, "2023": 665.28 },
    { month: "Nov", "2024": 602.4, "2023": 612.0 },
    { month: "Dec", "2024": 555.0, "2023": 555.0 },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="2024" stroke="#1f77b4" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="2023" stroke="#ff7f0e" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default PeakDemandChart;
