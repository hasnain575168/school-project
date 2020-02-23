import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './redux/store';

import Routes from './routes/index';

const App = () => (
  <Provider store={configureStore()}>
    <Routes />
  </Provider>
);

export default App;
