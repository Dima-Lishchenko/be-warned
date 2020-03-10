import {
  LOGIN,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGOUT,
  LOGOUT_ERROR,
  LOGOUT_SUCCESS
} from "redux/constants";

import { getAuthToken } from "services/api";

const AccessToken = getAuthToken();

const initialState = {
  isAuth: false,
  loading: false,
  error: "",
  AccessToken: "",
  FirstName: "",
  LastName: ""
};

const authState = { ...initialState };

authState.isAuth = !!AccessToken;
authState.AccessToken = AccessToken ? AccessToken : "";

export default function(state = authState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN:
      return { ...state, loading: true };
    case LOGIN_ERROR:
      return { ...state, loading: false, isAuth: false, error: payload };
    case LOGIN_SUCCESS:
      return { ...state, loading: false, isAuth: true, error: "", token: payload };

    case LOGOUT:
      return { ...state };
    case LOGOUT_ERROR:
      return { ...state, error: payload };
    case LOGOUT_SUCCESS:
      return { ...initialState };

    default:
      return state;
  }

}
