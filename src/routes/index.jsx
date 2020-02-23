import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter,
} from 'react-router-dom';

// Routes
import ClientRoutes from './client';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route
        path="/"
        component={ClientRoutes}
      />
    </Switch>
  </BrowserRouter>
);

export default Routes;
