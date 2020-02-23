import {
  compose,
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import ReduxThunk from 'redux-thunk';

import complaintReducer from './complaint/complaint.reducer';

const middlewares = [
  ReduxThunk,
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => createStore(
  combineReducers({
    complaints: complaintReducer,
  }),
  composeEnhancers(
    applyMiddleware(...middlewares),
  ),
);
