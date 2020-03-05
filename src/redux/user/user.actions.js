import axios from 'axios';
import {
  LOGIN,
  LOGOUT,
  VERIFY,
} from './user.types';

export const login = (username, password, callback = null) => (dispatch) => {
  axios.post('/api/auth/login', {
    username, password,
  }).then((response) => {
    const { data } = response;

    if (data.success) {
      localStorage.setItem('AUTH-TOKEN', data.token);

      dispatch({
        type: LOGIN,
        payload: {
          ...data.user,
          token: data.token,
        },
      });

      if (callback) {
        callback(data.success);
      }
    }
  }).catch((error) => {
    console.log(error);
  });
};

export const verify = (callback = null) => (dispatch) => {
  axios.post('/api/auth/verify', null, {
    headers: {
      bearer: localStorage.getItem('AUTH-TOKEN'),
    },
  }).then((response) => {
    console.log(response);

    const { data } = response;

    if (data.success) {
      dispatch({
        type: VERIFY,
        payload: {
          ...data.user,
          token: data.token,
        },
      });
    } else {
      dispatch({
        type: LOGOUT,
      });
    }

    if (callback) {
      callback(data.success);
    }
  }).catch((error) => {
    console.log(error);

    dispatch({
      type: LOGOUT,
    });
  });
};

export const logout = (callback) => {
  localStorage.removeItem('AUTH-TOKEN');

  if (callback) {
    callback();
  }

  return {
    type: LOGOUT,
  };
};
