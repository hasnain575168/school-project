import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter,
} from 'react-router-dom';

// Routes
import AuthRoutes from './auth';
import AdminRoutes from './admin';
import ClientRoutes from './client';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route
        path="/auth"
        component={AuthRoutes}
      />
      <Route
        path="/admin"
        component={AdminRoutes}
      />
      <Route
        path="/"
        component={ClientRoutes}
      />
    </Switch>
  </BrowserRouter>
);

export default Routes;
