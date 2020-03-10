import {
  GET_USERS_LIST,
  GET_USERS_LIST_ERROR,
  GET_USERS_LIST_SUCCESS,
  GET_CURRENT_USER,
} from "redux/constants";

export function GetUsersList() {
  return {
    type: GET_USERS_LIST
  };
}

export function GetUsersListError(err) {
  return {
    type: GET_USERS_LIST_ERROR,
    payload: err
  };
}

export function GetUsersListSuccess(token) {
  return {
    type: GET_USERS_LIST_SUCCESS,
    payload: token
  };
}

export function GetCurrentUser(userInfo) {
  return {
    type: GET_CURRENT_USER,
    payload: userInfo
  };
}
