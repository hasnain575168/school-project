import React from 'react';
import PropTypes from 'prop-types';
import {
  useHistory,
} from 'react-router-dom';
import {
  connect,
} from 'react-redux';
import {
  Form,
  Input,
  Button,
} from 'antd';

import {
  login,
} from '../../redux/user/user.actions';

import Label from '../../components/label';

const LoginPage = ({
  dispatch,
}) => {
  const history = useHistory();

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleOnChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
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

    dispatch(login(username, password, (success) => {
      if (success) {
        history.push('/admin');
      }
    }));
  };

  return (
    <div className="auth-page">
      <div className="auth-page__form">
        <h1>Login Page</h1>
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
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
};

LoginPage.defaultProps = {
  dispatch: Function,
};

LoginPage.propTypes = {
  dispatch: PropTypes.func,
};

export default connect()(LoginPage);
