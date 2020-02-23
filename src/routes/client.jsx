import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

// Pages
import Page404 from '../pages/Page404';
import ClientIndexPage from '../pages/client/index';
import ClientFundsPage from '../pages/client/funds';
import ClientComplaintPage from '../pages/client/complaint';

// Layouts
import ClientLayout from '../layouts/client';

const ClientRoutes = () => (
  <ClientLayout>
    <Switch>
      <Route
        exact
        path="/"
        component={ClientIndexPage}
      />
      <Route
        exact
        path="/funds"
        component={ClientFundsPage}
      />
      <Route
        exact
        path="/complaint"
        component={ClientComplaintPage}
      />
      <Route
        path="*"
        component={Page404}
      />
    </Switch>
  </ClientLayout>
);

export default ClientRoutes;
