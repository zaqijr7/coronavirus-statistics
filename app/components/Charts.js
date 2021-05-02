/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React from 'react';
import moment from 'moment';
import Chart from 'react-apexcharts';

function Charts(props) {
  const confirmed = props.data.map(item => item.totalConfirmed);
  const recovered = props.data.map(item => item.recovered.total);
  const deaths = props.data.map(item => item.deaths.total);
  const xaxisData = props.data.map(item =>
    moment(item.reportDate).format('ll'),
  );
  const options = {
    chart: {
      id: 'basic-bar',
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: xaxisData,
      type: 'datetime',
    },
    markers: {
      size: 8,
    },
    yaxis: {
      opposite: true,
      labels: {
        formatter: val => {
          const result = val / 1000;
          return `${result}k`;
        },
      },
    },
  };

  const series = [
    {
      name: 'series-1',
      data:
        props.location === '/'
          ? confirmed
          : props.location === '/recovered'
          ? recovered
          : deaths,
    },
  ];
  console.log(props.location);
  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart options={options} series={series} type="line" width="100%" />
        </div>
      </div>
    </div>
  );
}

export default Charts;
