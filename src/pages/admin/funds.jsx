import React from 'react';
import axios from 'axios';
import {
  List,
  Button,
  Typography,
} from 'antd';

import { BASE_URI } from '../../types';

const months = {
  jan: 'January',
  feb: 'February',
  mar: 'March',
  apr: 'April',
  may: 'May',
  jun: 'June',
  jul: 'August',
  sep: 'September',
  oct: 'October',
  nov: 'November',
  dec: 'December',
};

const FundsPage = () => {
  const [funds, setFunds] = React.useState([]);

  React.useEffect(() => {
    axios.get(`${BASE_URI}/api/funds`).then(({ data }) => {
      if (data.success) {
        setFunds([
          ...data.funds,
        ]);
      }
    });
  }, []);

  const handleRemoveFund = (id) => {
    axios.delete(`${BASE_URI}/api/funds/${id}`, {
      headers: {
        bearer: localStorage.getItem('AUTH-TOKEN'),
      },
    }).then(({ data }) => {
      if (data.success) {
        setFunds(funds.filter(({ _id }) => _id !== id));
      }
    });
  };

  return (
    <List>
      {
        funds.map(({
          _id,
          name,
          month,
          amount,
        }) => (
          <List.Item key={_id}>
            <List.Item.Meta
              title={months[month]}
              description={`${amount} amount of funds request by ${name}`}
            />
            <Button
              size="small"
              type="danger"
              onClick={() => {
                handleRemoveFund(_id);
              }}
            >
              Reject
            </Button>
          </List.Item>
        ))
      }
    </List>
  );
};

export default FundsPage;
