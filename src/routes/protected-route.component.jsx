import React from 'react';
import PropTypes from 'prop-types';
import {
  Route,
  Redirect,
} from 'react-router-dom';
import {
  connect,
} from 'react-redux';

const ProtectedRoute = ({
  user,
  component: Component,
  ...rest
}) => {
  console.log(user);

  const { isAuthenticated, loading } = user;

  if (!isAuthenticated && loading) {
    return <h1>Logging In</h1>;
  }

  if (!isAuthenticated && !loading) {
    return <Redirect to="/admin/auth/login" />;
  }

  return (
    <Route
      {...rest}
      component={Component}
    />
  );
};

ProtectedRoute.defaultProps = {
  user: null,
  component: null,
};

ProtectedRoute.propTypes = {
  user: PropTypes.object,
  component: PropTypes.func,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, null)(ProtectedRoute);
