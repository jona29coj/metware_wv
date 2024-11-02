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
          alpha: 15,
          beta: 15,
          depth: 400,
          viewDistance: 20,
          frame: {
            bottom: { size: 0 }, // Remove bottom frame
            back: { size: 0 },   // Remove back frame
            left: { size: 0 },   // Remove left frame
            right: { size: 0 },  // Remove right frame
            top: { size: 0 },    // Remove top frame
            front: { size: 0 },  // Remove front frame
          },
        },
        backgroundColor: 'transparent',
        margin: [50, 50, 50, 50],
      },
      title: {
        text: '',
      },
      xAxis: {
        categories: ['Energy Sources'],
        visible: false,
      },
      yAxis: {
        title: { text: null },
        visible: false,
        plotBands: [
          {
            from: 0,
            to: 10, // Adjust based on your segment heights
            color: 'rgba(200, 200, 200, 0.15)', // Light band color
          },
          {
            from: 10,
            to: 20,
            color: 'rgba(200, 200, 200, 0.05)', // Alternate lighter band
          },
          {
            from: 20,
            to: 30,
            color: 'rgba(200, 200, 200, 0.15)',
          },
          // Continue for each "floor" layer
        ],
      },
      series: [{
        name: 'Grid',
        data: [30],
        color: {
          linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
          stops: [
            [0, '#007bff'],
            [1, '#85d0f7'],
          ],
        },
      }, {
        name: 'Diesel',
        data: [10],
        color: {
          linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
          stops: [
            [0, '#dc3545'],
            [1, '#f799a3'],
          ],
        },
      }, {
        name: 'Wheeled in Solar',
        data: [40],
        color: {
          linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
          stops: [
            [0, '#28a745'],
            [1, '#a9e2b9'],
          ],
        },
      }, {
        name: 'Rooftop',
        data: [20],
        color: {
          linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
          stops: [
            [0, '#ffc107'],
            [1, '#ffe291'],
          ],
        },
      }],
      plotOptions: {
        column: {
          stacking: 'normal',
          depth: 250,
          borderWidth: 1,
          borderColor: '#cccccc',
          shadow: true,
          dataLabels: {
            enabled: false, // Disable data labels
          },
        },
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        floating: true,
      },
      credits: {
        enabled: false,
      },
    });
  }, [data]);

  return <div id="energy-sources-chart" style={{ height: '400px', width: '100%' }} />;
};

export default EnergySourcesBarChart;
