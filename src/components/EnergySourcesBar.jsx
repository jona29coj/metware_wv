import React, { useEffect } from 'react';
import Highcharts from 'highcharts';

const DailyEnergySourcesStackedAreaChart = () => {
  // Hardcoded data for January
  const januaryData = [
    310, 295, 330, 305, 340, 370, 330, 320, 360, 375, 385, 390, 300, 310, 330, 305, 340, 360, 320, 310, 340, 355, 360, 375, 380, 390, 370, 360, 355, 365, 375
  ];

  // Update the chart when component is mounted
  useEffect(() => {
    Highcharts.chart('daily-energy-sources-chart', {
      chart: {
        type: 'area',
        backgroundColor: '#ffffff',
        style: {
          fontFamily: 'Arial, sans-serif',
        },
      },
      title: null, // Remove chart title
      xAxis: {
        categories: Array.from({ length: 31 }, (_, i) => `Day ${i + 1}`), // Days of the month
        tickmarkPlacement: 'on',
        labels: {
          enabled: false, // Disable labels on the x-axis
        },
      },
      yAxis: {
        title: null, // Remove Y-axis title
        labels: {
          enabled: false, // Disable labels on the y-axis
        },
        gridLineWidth: 0, // Remove horizontal grid lines
      },
      tooltip: {
        shared: true,
        backgroundColor: '#333333',
        style: { color: '#ffffff' },
        valueSuffix: ' kWh', // Add suffix in tooltip for clarity
      },
      plotOptions: {
        area: {
          stacking: 'normal',
          lineColor: '#ffffff',
          lineWidth: 1,
          marker: {
            enabled: false, // Disable markers
          },
          states: {
            hover: {
              lineWidthPlus: 0,
            },
          },
        },
      },
      series: [
        {
          name: 'Grid',
          data: januaryData,
          color: {
            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
            stops: [
              [0, '#4a90e2'], // Brighter blue
              [1, '#a8c9f0'], // Lighter blue
            ],
          },
        },
        {
          name: 'Wheeled in Solar',
          data: januaryData.map(d => d * 0.7), // Example modification for different energy source
          color: {
            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
            stops: [
              [0, '#7ed321'], // Brighter green
              [1, '#b7e67f'], // Lighter green
            ],
          },
        },
        {
          name: 'Rooftop',
          data: januaryData.map(d => d * 0.5), // Example modification for different energy source
          color: {
            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
            stops: [
              [0, '#f5a623'], // Brighter orange
              [1, '#f7cc8f'], // Lighter orange
            ],
          },
        },
        {
          name: 'Diesel',
          data: januaryData.map(d => d * 0.3), // Example modification for different energy source
          color: {
            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
            stops: [
              [0, '#d0021b'], // Brighter red
              [1, '#f18b8e'], // Lighter red
            ],
          },
        },
      ],
      legend: {
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'bottom',
        itemStyle: {
          color: '#333333',
          fontSize: '14px',
        },
      },
      credits: {
        enabled: false, // Disable Highcharts credits
      },
    });
  }, []); // Empty dependency array to only run once when the component is mounted

  return (
    <div>
      {/* Chart */}
      <div id="daily-energy-sources-chart" style={{ height: '400px', width: '100%' }} />
    </div>
  );
};

export default DailyEnergySourcesStackedAreaChart;
