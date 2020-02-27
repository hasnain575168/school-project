import React from 'react';
import PropTypes from 'prop-types';
import {
  connect,
} from 'react-redux';
import {
  Link,
  useHistory,
  useRouteMatch,
} from 'react-router-dom';
import {
  Menu,
} from 'antd';

import {
  logout,
} from '../redux/user/user.actions';

const AdminLayout = ({
  children,
  dispatch,
}) => {
  const history = useHistory();
  const { url } = useRouteMatch();

  const handleLogout = () => {
    dispatch(logout(() => {
      history.push('/');
    }));
  };

  return (
    <div>
      <div className="navbar">
        <div className="container">
          <Menu
            mode="horizontal"
            style={{
              backgroundColor: 'transparent',
            }}
          >
            <Menu.Item>
              <Link to={url}>
                Funds
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to={`${url}/complaint`}>
                Complaints
              </Link>
            </Menu.Item>
            <Menu.Item onClick={handleLogout}>
              Logout
            </Menu.Item>
          </Menu>
        </div>
      </div>
      <div className="main">
        <div className="container">
          {children}
        </div>
      </div>
    </div>
  );
};

AdminLayout.defaultProps = {
  children: {},
  dispatch: Function,
};

AdminLayout.propTypes = {
  children: PropTypes.node,
  dispatch: PropTypes.func,
};

export default connect()(AdminLayout);
