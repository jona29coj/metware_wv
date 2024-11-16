import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const BuildingConsumptionChart = () => {
  const stackedColumnOptions = {
    chart: {
      type: 'column',
      backgroundColor: 'transparent',
    },
    title: { text: null },
    xAxis: {
      categories: Array.from({ length: 10 }, (_, i) => `Day ${21 + i}`), // Adjusts to the last 10 days
      labels: { enabled: false }, // Hides x-axis labels (Day labels)
      lineWidth: 0, // Removes x-axis line
      tickWidth: 0, // Removes ticks
    },
    yAxis: {
      min: 0,
      labels: { enabled: false }, // Hides y-axis labels
      title: { text: null }, // Removes y-axis title
      gridLineWidth: 0, // Removes grid lines
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.y} kWh</b><br/>Total: <b>{point.stackTotal} kWh</b>', // Tooltip showing the stacked data when hovered
    },
    plotOptions: {
      column: {
        stacking: 'normal',
        dataLabels: {
          enabled: false, // Disables labels inside columns
        },
      },
    },
    series: [
      {
        name: 'Grid',
        data: [120, 150, 170, 130, 160, 180, 210, 190, 150, 140], // Example data
        color: '#1e40af',
      },
      {
        name: 'Solar',
        data: [100, 110, 130, 120, 140, 150, 160, 150, 130, 120],
        color: '#10b981',
      },
      {
        name: 'Rooftop',
        data: [50, 60, 70, 55, 65, 75, 85, 75, 70, 60],
        color: '#f59e0b',
      },
      {
        name: 'Diesel',
        data: [60, 70, 80, 50, 90, 100, 70, 60, 80, 50],
        color: '#ef4444',
      },
    ],
    credits: { enabled: false },
  };

  return <HighchartsReact highcharts={Highcharts} options={stackedColumnOptions} />;
};

export default BuildingConsumptionChart;
