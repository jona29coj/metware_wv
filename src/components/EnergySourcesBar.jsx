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
          beta: 15,
          depth: 100,
          viewDistance: 25,
          frame: {
            bottom: { size: 0 },
            back: { size: 0 },
            left: { size: 0 },
            right: { size: 0 },
            top: { size: 0 },
            front: { size: 0 },
          },
        },
        backgroundColor: 'transparent',
        margin: [50, 50, 50, 50],
      },
      title: {
        text: null,
      },
      xAxis: {
        categories: ['Energy Sources'],
        visible: false,
      },
      yAxis: {
        visible: false,
      },
      tooltip: {
        pointFormat: '<b>{series.name}</b>: <b>{point.percentage:,.0f}%</b> ({point.y} kWh)',
      },
      series: [
        {
          name: 'Grid',
          data: [30],
          color: '#355F2E', // Deep green for Grid
        },
        {
          name: 'Wind',
          data: [30],
          color: '#0A3981', // Blue for Wind
        },
        {
          name: 'Wheeled in Solar',
          data: [40],
          color: '#E85C0D', // Orange for Solar
        },
        {
          name: 'Rooftop',
          data: [20],
          color: '#8D493A', // Brown for Rooftop
        },
        {
          name: 'Diesel',
          data: [10],
          color: '#FFDE4D', // Yellow for Diesel
        },
      ],
      plotOptions: {
        column: {
          stacking: 'normal',
          depth: 120,
          borderWidth: 0,
          borderColor: '#444444',
          shadow: true,
        },
      },
      legend: {
        enabled: false, // Disable the legend
      },
      credits: {
        enabled: false,
      },
    });
  }, [data]);

  return <div id="energy-sources-chart" style={{ height: '370px', width: '300px' }} />;
};

export default EnergySourcesBarChart;
