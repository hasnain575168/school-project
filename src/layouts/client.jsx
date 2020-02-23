import React from 'react';
import PropTypes from 'prop-types';
import {
  Link,
} from 'react-router-dom';
import {
  Menu,
} from 'antd';

const ClientLayout = ({
  children,
}) => (
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
            <Link to="/">
              Home
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/complaint">
              Complaint
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/funds">
              Funds Request
            </Link>
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

ClientLayout.defaultProps = {
  children: {},
};

ClientLayout.propTypes = {
  children: PropTypes.node,
};

export default ClientLayout;
