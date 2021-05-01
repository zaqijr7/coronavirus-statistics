import React, { useState } from 'react';
import Chart from 'react-apexcharts';

function Charts() {
  const options = {
    chart: {
      id: 'basic-bar',
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'March', 'April'],
    },
    markers: {
      size: 8,
    },
    yaxis: {
      opposite: true,
    },
  };

  const [series, setSeries] = useState([
    {
      name: 'series-1',
      data: [30, 40, 45, 50],
    },
  ]);
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
