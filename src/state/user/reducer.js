import { USER_LOGIN, USER_LOGOUT, GET_CURRENT_USER } from "../types";

const user = (state = { loading: true, data: null, error: null }, action) => {
  switch (action.type) {
    case USER_LOGIN.PENDING:
    case USER_LOGOUT.PENDING:
    case GET_CURRENT_USER.PENDING:
      return { ...state, loading: true };

    case USER_LOGIN.SUCCESS:
    case GET_CURRENT_USER.SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case USER_LOGOUT.SUCCESS:
      return { ...state, loading: false, data: null, error: null };

    case USER_LOGIN.FAILURE:
    case USER_LOGOUT.FAILURE:
    case GET_CURRENT_USER.FAILURE:
      return { ...state, loading: false, error: action.error };

    default:
      return state;
  }
};
export default user;
