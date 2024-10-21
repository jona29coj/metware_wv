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
          alpha: 10,
          beta: 30,
          depth: 150,
          viewDistance: 25,
        },
      },
      title: {
        text: null,
      },
      xAxis: {
        categories: ['Grid', 'Diesel', 'Wheeled in Solar', 'Rooftop'],
        title: {
          text: null,
        },
        visible: false, // Hide x-axis
        gridLineWidth: 0, // Hide grid lines
        labels: {
          enabled: false, // Hide labels
        },
      },
      yAxis: {
        title: {
          text: 'Percentage (%)',
        },
        visible: false, // Hide y-axis
        gridLineWidth: 0, // Hide grid lines
        labels: {
          enabled: false, // Hide labels
        },
      },
      series: [{
        name: 'Energy Sources',
        data: data,
        colorByPoint: true,
      }],
    });
  }, [data]);

  return <div id="energy-sources-chart" style={{ height: '400px', width: '100%' }} />;
};

export default EnergySourcesBarChart;
