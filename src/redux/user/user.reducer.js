import {
  LOGIN,
  LOGOUT,
  VERIFY,
} from './user.types';

const initState = {
  email: '',
  token: '',
  username: '',
  loading: true,
  isAuthenticated: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case LOGIN:
    case VERIFY:
      return {
        ...action.payload,
        loading: false,
        isAuthenticated: true,
      };

    case LOGOUT:
      return {
        token: '',
        email: '',
        username: '',
        loading: false,
        isAuthenticated: false,
      };

    default:
      return state;
  }
};
