import { fork, put, takeEvery } from "redux-saga/effects";

import {
  GetUsersListError,
  GetUsersListSuccess
} from "redux/actions";
import { GET_USERS_LIST } from "redux/constants";

import { getErrorMessage, getInstance } from "services/api";
import { USERS_LIST_API } from "constants/api";

function* watchUsers() {
  yield takeEvery(GET_USERS_LIST, handleGetUsersList);
}

function* handleGetUsersList() {
  try {
    const {data: { results }} = yield getInstance().get(`${USERS_LIST_API}?results=50`);

    yield put(GetUsersListSuccess(results));
  } catch (e) {
    const error = yield getErrorMessage(e);
    yield put(GetUsersListError(error));
  }
}

export default function* usersSagas() {
  yield fork(watchUsers);
}
