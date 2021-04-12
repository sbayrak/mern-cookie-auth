import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
} from '../constants/userConstants';

export const userLoginReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_LOGIN_REQUEST:
      return {
        loading: true,
      };

    case USER_LOGIN_SUCCESS:
      return {
        loading: false,
        userInfo: payload,
      };

    case USER_LOGIN_FAIL:
      return {
        loading: false,
        error: payload,
      };

    default:
      return {};
  }
};

export const userDetailsReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_DETAILS_REQUEST:
      return {
        loading: true,
      };

    case USER_DETAILS_SUCCESS:
      return {
        loading: false,
        userInfo: payload,
      };

    case USER_DETAILS_FAIL:
      return {
        loading: false,
        error: payload,
      };

    default:
      return {};
  }
};
