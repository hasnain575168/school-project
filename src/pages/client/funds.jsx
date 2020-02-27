import React from 'react';
import axios from 'axios';
import {
  Form,
  Input,
  Button,
  Select,
  Typography,
  notification,
} from 'antd';

import { BASE_URI } from '../../types';

import getCurrentMonth from '../../helpers/get-current-month';

import Label from '../../components/label';

const { TextArea } = Input;
const { Title } = Typography;
const { Option } = Select;

const ClientFundsPage = () => {
  const [name, setName] = React.useState('');
  const [amount, setAmount] = React.useState(0);
  const [reason, setReason] = React.useState('');
  const [month, setMonth] = React.useState(getCurrentMonth());

  const handleOnChange = (event) => {
    const { name: inputName, value } = event.target;

    switch (inputName) {
      case 'name':
        setName(value);
        break;

      case 'amount':
        setAmount(value);
        break;

      case 'reason':
        setReason(value);
        break;

      default:
        break;
    }
  };

  const handleMonthChange = (value) => {
    setMonth(value);
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    const onSuccess = () => notification.success({
      placement: 'bottomRight',
      message: 'Funds Request successfully submitted',
      description: 'Your funds request was successfully submitted, we will get in touch soon!',
    });

    const onFailure = () => notification.error({
      placement: 'bottomRight',
      message: 'Funds Request submission failed',
      description: 'Oops! Seems like your funds request could not be submitted!',
    });

    try {
      const response = await axios({
        method: 'POST',
        url: `${BASE_URI}/funds`,
        data: {
          name,
          month,
          amount,
          reason,
        },
      });

      const { data } = response;

      if (data.success) {
        onSuccess();

        setName('');
        setAmount(0);
        setReason('');
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
        Make a Funds Request
      </Title>
      <Label htmlFor="name" text="University Name">
        <Input
          type="text"
          id="name"
          name="name"
          placeholder="University Name"
          value={name}
          onChange={handleOnChange}
        />
      </Label>
      <Label htmlFor="month" text="Month">
        <Select
          id="month"
          name="month"
          placeholder="Month"
          defaultValue={month}
          onChange={handleMonthChange}
          className="w-100"
        >
          <Option value="jan">January</Option>
          <Option value="feb">Feburary</Option>
          <Option value="mar">March</Option>
          <Option value="apr">April</Option>
          <Option value="may">May</Option>
          <Option value="jun">June</Option>
          <Option value="jul">July</Option>
          <Option value="aug">August</Option>
          <Option value="sep">September</Option>
          <Option value="oct">October</Option>
          <Option value="nov">November</Option>
          <Option value="dec">December</Option>
        </Select>
      </Label>
      <Label htmlFor="amount" text="Funds Amount">
        <Input
          type="number"
          id="amount"
          name="amount"
          placeholder="Funds Amount"
          value={amount}
          onChange={handleOnChange}
        />
      </Label>
      <Label htmlFor="reason" text="Funds Request Reason">
        <TextArea
          rows={5}
          id="reason"
          name="reason"
          placeholder="Funds Request Reason"
          value={reason}
          onChange={handleOnChange}
        />
      </Label>
      <Button
        type="primary"
        onClick={handleOnSubmit}
      >
        Submit Funds Request
      </Button>
    </Form>
  );
};

export default ClientFundsPage;
