import { all, fork } from "redux-saga/effects";

import authSagas from "redux/sagas/auth";
import usersSagas from "redux/sagas/users";

const sagas = [
  authSagas,
  usersSagas
];

export function* rootSaga(services = {}) {
  yield all(sagas.map(saga => fork(saga, services)));
}
