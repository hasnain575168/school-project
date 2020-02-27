import React from 'react';
import axios from 'axios';
import {
  List,
  Button,
  Typography,
} from 'antd';

import { BASE_URI } from '../../types';

const { Paragraph } = Typography;

const ComplaintsPage = () => {
  const [complaints, setComplaints] = React.useState([]);

  React.useEffect(() => {
    axios.get(`${BASE_URI}/api/complaints`).then(({ data }) => {
      if (data.success) {
        setComplaints([
          ...data.complaints,
        ]);
      }
    });
  }, []);

  const handleRemoveComplaint = (id) => {
    axios.delete(`${BASE_URI}/api/complaints/${id}`, {
      headers: {
        bearer: localStorage.getItem('AUTH-TOKEN'),
      },
    }).then(({ data }) => {
      if (data.success) {
        setComplaints(complaints.filter(({ _id }) => _id !== id));
      }
    });
  };

  return (
    <List>
      {
        complaints.map(({
          _id,
          name,
          email,
          description,
        }) => (
          <List.Item key={_id}>
            <List.Item.Meta
              title={name}
              description={description}
            />
            <Paragraph>{email}</Paragraph>
            <Button
              size="small"
              type="danger"
              onClick={() => {
                handleRemoveComplaint(_id);
              }}
            >
              Delete
            </Button>
          </List.Item>
        ))
      }
    </List>
  );
};

export default ComplaintsPage;
