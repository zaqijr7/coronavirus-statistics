import React, { useState } from 'react';
import Chart from 'react-apexcharts';

function ChartActivity() {
  const options = {
    chart: {
      id: 'basic-bar',
      toolbar: {
        show: false,
      },
    },
    colors: '#3366D6',
    xaxis: {
      categories: ['Jan', 'Feb', 'March', 'April', 'May'],
      labels: {
        show: true,
      },
      axisBorder: {
        show: true,
      },
      axisTicks: {
        show: true,
      },
    },
    markers: {
      size: 8,
    },
    yaxis: {
      show: true,
      opposite: true,
    },
    grid: {
      show: true,
    },
    dataLabels: {
      enabled: false,
    },
  };

  const [series, setSeries] = useState([
    {
      name: 'series-1',
      data: [30, 40, 45, 50, 32],
    },
  ]);
  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={options}
            series={series}
            type="bar"
            width="100%"
            height={450}
          />
        </div>
      </div>
    </div>
  );
}

export default ChartActivity;
