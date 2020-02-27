import React from 'react';
import {
  Route,
  Switch,
  useRouteMatch,
} from 'react-router-dom';

// Auth Pages
import LoginPage from '../pages/auth/login';
import RegisterPage from '../pages/auth/register';

const ClientRoutes = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route
        exact
        path={`${path}/login`}
        component={LoginPage}
      />
      <Route
        exact
        path={`${path}/register`}
        component={RegisterPage}
      />
    </Switch>
  );
};

export default ClientRoutes;
