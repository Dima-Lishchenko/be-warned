import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";

import authReducer from "redux/reducers/auth";
import usersListReducer from "redux/reducers/users";

export const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    users: usersListReducer,
  });
