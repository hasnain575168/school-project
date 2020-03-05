import React from 'react';
import axios from 'axios';
import { Typography } from 'antd';

import { BASE_URI } from '../../types';

import Chart from '../../components/chart';
import ChartFilter from '../../components/chart-filter';

const { Title } = Typography;

const FundsPage = () => {
  const [funds, setFunds] = React.useState([]);
  const [filter, setFilter] = React.useState('');
  const [filteredFunds, setFilteredFunds] = React.useState([]);

  React.useEffect(() => {
    axios.get(`${BASE_URI}/api/funds`).then(({ data }) => {
      if (data.success) {
        setFunds([
          ...data.funds,
        ]);
      }
    });
  }, []);

  React.useEffect(() => {
    if (filter) {
      setFilteredFunds(funds.filter(({ month }) => month === filter));
    } else {
      setFilteredFunds([...funds]);
    }
  }, [filter, funds]);

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  return (
    <div>
      <Title
        level={1}
        className="text-center"
      >
        Funds Dataset
      </Title>
      <ChartFilter
        defaultValue={filter}
        onChange={handleFilterChange}
      />
      <Chart
        data={{
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
        }}
      />
    </div>
  );
};

export default FundsPage;
