import React from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';

const Chart = ({
  data,
}) => (
  <Bar
    data={data}
    options={{
      scales: {
        yAxes: [
          {
            ticks: {
              min: 0,
              beginAtZero: true,
            },
          },
        ],
      },
    }}
  />
);

Chart.defaultProps = {
  data: {},
};

Chart.propTypes = {
  data: PropTypes.object,
};

const mapStateToProps = (state) => {
  const { funds, filter } = state;

  let filteredFunds = [...funds];

  if (filter) {
    filteredFunds = funds.filter(({ month }) => month === filter);
  }

  return {
    chartData: {
      labels: filteredFunds.map(({ name }) => name),
      datasets: [
        {
          label: 'Funds Dataset',
          backgroundColor: [
            'rgba(255, 99, 132, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(255, 206, 86, 0.8)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(255, 159, 64, 0.8)',
            'rgba(153, 102, 255, 0.8)',
          ],
          data: filteredFunds.map(({ amount }) => amount),
        },
      ],
    },
  };
};

export default Chart;
