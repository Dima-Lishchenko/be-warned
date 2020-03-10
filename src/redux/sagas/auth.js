import { push } from "connected-react-router";
import { delay, call, fork, put, takeEvery } from "redux-saga/effects";

import { LOGIN_ROUTE, USERS_LIST_ROUTE } from "constants/routes";
import {
  LoginError,
  LoginSuccess,
  LogoutError,
  LogoutSuccess
} from "redux/actions";
import { LOGIN, LOGOUT } from "redux/constants";
import { deleteAuthToken, getErrorMessage, saveAuthToken } from "services/api";

function* watchLogin() {
  yield takeEvery(LOGIN, handleLogin);
}

function* watchLogout() {
  yield takeEvery(LOGOUT, handleLogout);
}

function* handleLogin() {
  try {
    // simulate API call delay
    yield delay(3000);

    // fake token
    const token = "testToken";

    yield saveAuthToken(token);
    yield put(LoginSuccess(token));
    yield put(push(USERS_LIST_ROUTE));
  } catch (e) {
    const error = yield call(getErrorMessage(e));
    yield put(LoginError(error));
  }
}

function* handleLogout() {
  try {
    yield deleteAuthToken();
    yield put(push(LOGIN_ROUTE));
    yield put(LogoutSuccess());
  } catch (e) {
    yield put(LogoutError(e));
  }
}

export default function* authSagas() {
  yield fork(watchLogin);
  yield fork(watchLogout);
}
