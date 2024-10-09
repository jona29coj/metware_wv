import React from 'react';
import Highcharts from 'highcharts';
import Highcharts3D from 'highcharts/highcharts-3d';
import HighchartsReact from 'highcharts-react-official';

// Initialize the 3D module
Highcharts3D(Highcharts);

const BarChart = () => {
  const options = {
    chart: {
      type: 'column',
      options3d: {
        enabled: true,
        alpha: 10,
        beta: 30,
        depth: 250,
        viewDistance: 5,
      },
      backgroundColor: 'transparent', // Remove background graph imagery
    },
    xAxis: {
      categories: ['Total Energy Sources'],
      visible: false, // Hide the x-axis
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Percentage',
      },
      visible:false,
    },
    plotOptions: {
      column: {
        stacking: 'normal', // Enable stacking
        pointWidth: 40, // Adjust the thickness of the bar
        dataLabels: {
          enabled: true, // Enable data labels
          format: '{point.name}: {point.y}%', // Format for the data labels
          style: {
            fontWeight: 'bold',
            color: 'black', // You can customize the color
          },
        },
      },
    },
    series: [
      {
        name: 'Grid',
        data: [{ y: 30, name: 'Grid' }], // Include name for the data label
        color: '#1f77b4', // You can customize the colors
      },
      {
        name: 'Diesel',
        data: [{ y: 10, name: 'Diesel' }], // Include name for the data label
        color: '#ff7f0e',
      },
      {
        name: 'Wheeled in Solar',
        data: [{ y: 40, name: 'Wheeled in Solar' }], // Include name for the data label
        color: '#2ca02c',
      },
      {
        name: 'Rooftop',
        data: [{ y: 20, name: 'Rooftop' }], // Include name for the data label
        color: '#d62728',
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default BarChart;
