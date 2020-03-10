import {
  LOGIN,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGOUT,
  LOGOUT_ERROR,
  LOGOUT_SUCCESS
} from "redux/constants";

export function Login(payload) {
  return {
    type: LOGIN,
    payload
  };
}

export function LoginError(err) {
  return {
    type: LOGIN_ERROR,
    payload: err
  };
}

export function LoginSuccess(token) {
  return {
    type: LOGIN_SUCCESS,
    payload: token
  };
}

export function Logout() {
  return {
    type: LOGOUT
  };
}

export function LogoutError(err) {
  return {
    type: LOGOUT_ERROR,
    payload: err
  };
}

export function LogoutSuccess() {
  return {
    type: LOGOUT_SUCCESS
  };
}
