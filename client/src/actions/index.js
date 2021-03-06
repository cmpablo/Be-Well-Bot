import axios from 'axios';
import {
  AUTH_USER,
  AUTH_ERROR
} from './types';

// redux thunk action creator
export const signup = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post('https://be-well-bot.herokuapp.com/signup', formProps);

    dispatch({
      type: AUTH_USER,
      payload: response.data.token
    });
    localStorage.setItem('token', response.data.token);
    callback();
  } catch (e) {
    dispatch({
      type: AUTH_ERROR,
      payload: 'Invalid email and/or password'
    })
  }
};

export const signin = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post('https://be-well-bot.herokuapp.com/signin', formProps);

    dispatch({
      type: AUTH_USER,
      payload: response.data.token
    });
    localStorage.setItem('token', response.data.token);
    callback();
  } catch (e) {
    dispatch({
      type: AUTH_ERROR,
      payload: 'Invalid email and/or password'
    })
  }
};

export const logout = () => {
  localStorage.removeItem('token');

  return {
    type: AUTH_USER,
    payload: ''
  };
};