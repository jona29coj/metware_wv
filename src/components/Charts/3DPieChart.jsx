import React from 'react';
import Highcharts from 'highcharts';
import Highcharts3D from 'highcharts/highcharts-3d';
import HighchartsReact from 'highcharts-react-official';

// Initialize the 3D module
Highcharts3D(Highcharts);

const PieChart = () => {
  const options = {
    chart: {
      type: 'pie',
      options3d: {
        enabled: true,
        alpha: 45,
        beta: 0,
      },
    },
    title: {
      text: 'Building Consumption',
    },
    plotOptions: {
      pie: {
        depth: 35,
        dataLabels: {
          enabled: true,
          format: '{point.name}: {point.y} kWh',
        },
      },
    },
    series: [
      {
        name: 'Total Consumption',
        data: [
          { name: 'Clients Total', y: 100 },
          { name: 'Chillers Total', y: 80 },
          { name: 'Common Area Total', y: 60 },
        ],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default PieChart;
