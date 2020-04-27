import { USER_LOGIN, USER_LOGOUT, GET_CURRENT_USER } from "../types";
import { authRef } from "../../api/firebase";

export const loginUser = (dispatch, email, password) => {
  dispatch({ type: USER_LOGIN.PENDING });
  return authRef
    .login(email, password)
    .then(({ user }) => {
      dispatch({
        type: USER_LOGIN.SUCCESS,
        payload: user,
      });
      return new Promise((resolve, reject) => {
        resolve("Redirecting is ok");
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
    console.log("Got current user val", user);
    dispatch({ type: GET_CURRENT_USER.SUCCESS, payload: user });
  });
};
