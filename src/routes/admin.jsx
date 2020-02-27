import React from 'react';
import PropTypes from 'prop-types';
import {
  connect,
} from 'react-redux';
import {
  Switch,
  useRouteMatch,
} from 'react-router-dom';

import {
  verify,
} from '../redux/user/user.actions';

// Layouts
import AdminLayout from '../layouts/admin';

// Pages
import FundsPage from '../pages/admin/funds';
import ComplaintsPage from '../pages/admin/complaints';

// Components
import ProtectedRoute from './protected-route.component';

const AdminRoutes = ({
  dispatch,
}) => {
  const { path } = useRouteMatch();

  React.useEffect(() => {
    dispatch(verify());
  }, []);

  return (
    <AdminLayout>
      <Switch>
        <ProtectedRoute
          exact
          path={path}
          component={FundsPage}
        />
        <ProtectedRoute
          path={`${path}/complaint`}
          component={ComplaintsPage}
        />
      </Switch>
    </AdminLayout>
  );
};

AdminRoutes.defaultProps = {
  dispatch: Function,
};

AdminRoutes.propTypes = {
  dispatch: PropTypes.func,
};

export default connect()(AdminRoutes);
