import {
  GET_CURRENT_USER,
  GET_USERS_LIST,
  GET_USERS_LIST_ERROR,
  GET_USERS_LIST_SUCCESS
} from "redux/constants";

const initialState = {
  loading: false,
  error: null,
  users: [],
  currentUser: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_USERS_LIST:
      return { ...state, loading: true };
    case GET_USERS_LIST_ERROR:
      return { ...state, loading: false, error: payload };
    case GET_USERS_LIST_SUCCESS:
      return { ...state, loading: false, error: "", users: payload };

    case GET_CURRENT_USER:
      return { ...state, currentUser: payload };

    default:
      return state;
  }
}
