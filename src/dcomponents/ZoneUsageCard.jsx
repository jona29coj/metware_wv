import React from 'react';
import { Chart } from 'react-google-charts';

const ZoneUsageCard = () => {
  const data = [
    ['Source', 'Target', 'Value'],
    ['Diesel', 'Source', 20],  // Diesel is at the bottom
    ['Grid', 'Source', 12],    // Grid is at the top
    ['Source', 'Zone 1', 8],
    ['Source', 'Zone 2', 4],
    ['Source', 'Zone 3', 6],
    ['Source', 'Zone 4', 8],
    ['Source', 'Zone 5', 10],
    ['Source', 'Zone 6', 5],
    ['Source', 'Zone 7', 3],
    ['Source', 'Zone 8', 7],
    ['Source', 'Zone 9', 9],
    ['Source', 'Zone 10', 10],
  ];

  const options = {
    sankey: {
      node: {
        colors: ['#B0E0E6', '#FFB6C1', '#D3D3D3', '#E6A1D6', '#F0E68C', '#98FB98', '#FFD700', '#BA55D3', '#FF6347', '#C71585', '#20B2AA'],
        width: 15,
        label: {
          fontSize: 14,
        },
      },
      link: {
        colorMode: 'gradient',
        colors: ['#00BFFF', '#FF1493', '#7FFF00'],
      },
    },
    width: '100%',
    height: 400,
    layout: 'horizontal', // ensures zones go top to bottom
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full">
      <h1 className="text-lg font-bold">Zone Usage</h1>
      <Chart
        chartType="Sankey"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
};

export default ZoneUsageCard;
