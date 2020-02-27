import React from 'react';
import axios from 'axios';
import {
  Form,
  Input,
  Button,
} from 'antd';

import Label from '../../components/label';

const RegisterPage = () => {
  const [email, setEmail] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleOnChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'username':
        setUsername(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        break;
    }
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    axios.post('/api/auth/register', {
      email, username, password,
    }).then((response) => {
      const { success } = response;

      if (success) {
        console.log(response);
      }
    }).catch((error) => {
      console.log(error);
    });
  };

  return (
    <div className="auth-page">
      <div className="auth-page__form">
        <h1>Register Page</h1>
        <Form onSubmit={handleOnSubmit}>
          <Label htmlFor="username" text="Username">
            <Input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={username}
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
          <Label htmlFor="password" text="Password">
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleOnChange}
            />
          </Label>
          <Button
            type="primary"
            onClick={handleOnSubmit}
          >
            Register
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default RegisterPage;
