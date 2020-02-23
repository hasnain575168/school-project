import React from 'react';
import axios from 'axios';
import {
  Form,
  Input,
  Button,
  Typography,
  notification,
} from 'antd';

import { BASE_URI } from '../../types';

import Label from '../../components/label';

const { TextArea } = Input;
const { Title } = Typography;

const ClientComplaintPage = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [description, setDescription] = React.useState('');

  const handleOnChange = (event) => {
    const { name: inputName, value } = event.target;

    switch (inputName) {
      case 'name':
        setName(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'description':
        setDescription(value);
        break;

      default:
        break;
    }
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    const onSuccess = () => notification.success({
      placement: 'bottomRight',
      message: 'Complaint successfully submitted',
      description: 'Your complaint was successfully submitted, we will contact you soon!',
    });

    const onFailure = () => notification.error({
      placement: 'bottomRight',
      message: 'Complaint submission failed',
      description: 'Oops! Seems like your complaint could not be submitted!',
    });

    try {
      const response = await axios({
        method: 'POST',
        url: `${BASE_URI}/complaints`,
        data: {
          name,
          email,
          description,
        },
      });

      const { data } = response;

      if (data.success) {
        onSuccess();

        setName('');
        setEmail('');
        setDescription('');
      } else {
        onFailure();
      }
    } catch (error) {
      onFailure();
    }
  };

  return (
    <Form
      className="form"
      onSubmit={handleOnSubmit}
    >
      <Title
        level={3}
        className="form__title text-center"
      >
        Write Your Complaints
      </Title>
      <Label htmlFor="name" text="Name">
        <Input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={name}
          onChange={handleOnChange}
        />
      </Label>
      <Label htmlFor="email" text="Email">
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleOnChange}
        />
      </Label>
      <Label htmlFor="description" text="Complaint">
        <TextArea
          rows={5}
          id="description"
          name="description"
          placeholder="Complaint"
          value={description}
          onChange={handleOnChange}
        />
      </Label>
      <Button
        type="primary"
        onClick={handleOnSubmit}
      >
        Submit Complaint
      </Button>
    </Form>
  );
};

export default ClientComplaintPage;
