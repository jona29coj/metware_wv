import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import Highcharts3D from 'highcharts/highcharts-3d';

Highcharts3D(Highcharts); // Initialize 3D support

const EnergySourcesBarChart = ({ data }) => {
  useEffect(() => {
    Highcharts.chart('energy-sources-chart', {
      chart: {
        type: 'column',
        options3d: {
          enabled: true,
          alpha: 20, // Top-down view angle
          beta: 30, // Side view angle
          depth: 500, // Increased depth for a more substantial look
          viewDistance: 100, // Distance from the viewer
        },
        backgroundColor: 'transparent', // Optional: to match the card style
      },
      title: {
        text: '', // Removed the title
      },
      xAxis: {
        categories: ['Energy Sources'], // Single category for stacking
        visible: false, // Hide x-axis
      },
      yAxis: {
        title: {
          text: null, // No title for y-axis
        },
        visible: false, // Hide y-axis
      },
      series: [{
        name: 'Grid',
        data: [30], // Each series represents a stack segment
        color: '#007bff', // Custom color for better aesthetics
      }, {
        name: 'Diesel',
        data: [10],
        color: '#dc3545',
      }, {
        name: 'Wheeled in Solar',
        data: [40],
        color: '#28a745',
      }, {
        name: 'Rooftop',
        data: [20],
        color: '#ffc107',
      }],
      plotOptions: {
        column: {
          stacking: 'normal', // Enable stacking
          depth: 200, // Increased depth for each column segment
          dataLabels: {
            enabled: false,
            format: '{point.y}', // Display values on top of the columns
            style: {
              color: 'black', // Contrast color for readability
              fontWeight: 'bold',
              fontSize: '14px', // Adjust for readability
            },
          },
          shadow: true, // Enable shadow for depth effect
        },
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        floating: true,
      },
      credits: {
        enabled: false, // Hide Highcharts credits
      },
    });
  }, [data]);

  return <div id="energy-sources-chart" style={{ height: '600px', width: '100%' }} />; // Overall chart height
};

export default EnergySourcesBarChart;
