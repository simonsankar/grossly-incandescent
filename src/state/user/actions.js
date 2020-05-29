import { USER_LOGIN, USER_LOGOUT, GET_CURRENT_USER } from "../types";
import { authRef } from "../../api/firebase";

export const loginUser = (dispatch, email, password) => {
  dispatch({ type: USER_LOGIN.PENDING });
  authRef
    .login(email, password)
    .then(({ user }) => {
      dispatch({
        type: USER_LOGIN.SUCCESS,
        payload: user,
      });
    })
    .catch((error) => dispatch({ type: USER_LOGIN.FAILURE, error }));
};

export const logoutUser = (dispatch) => {
  dispatch({ type: USER_LOGOUT.PENDING });
  authRef
    .logout()
    .then(() => dispatch({ type: USER_LOGOUT.SUCCESS }))
    .catch((error) => dispatch({ type: USER_LOGOUT.FAILURE, error }));
};

export const getCurrentUser = (dispatch) => {
  dispatch({ type: GET_CURRENT_USER.PENDING });
  authRef.getCurrentUser((user) => {
    dispatch({ type: GET_CURRENT_USER.SUCCESS, payload: user });
  });
};
