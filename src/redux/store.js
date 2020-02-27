import {
  compose,
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import ReduxThunk from 'redux-thunk';

import userReducer from './user/user.reducer';

const middlewares = [
  ReduxThunk,
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => createStore(
  combineReducers({
    user: userReducer,
  }),
  composeEnhancers(
    applyMiddleware(...middlewares),
  ),
);
