import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
} from '../constants/userConstants';
import axios from 'axios';

export const loadUser = () => async (dispatch) => {
  dispatch({
    type: USER_DETAILS_REQUEST,
  });

  try {
    const { data } = await axios.get('/api/users/', { withCredentials: true });

    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAIL,
      payload: error,
    });
  }
};

export const login = ({ email, password }) => async (dispatch) => {
  dispatch({
    type: USER_LOGIN_REQUEST,
  });

  try {
    const { data } = await axios.post(
      '/api/users/login',
      { email, password },
      { withCredentials: true }
    );

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
    dispatch(loadUser());
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error,
    });
  }
};
