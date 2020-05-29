import actionTypeCreator from "./actionTypeCreator";

// Posts
export const GET_POSTS = actionTypeCreator("GET_POSTS");

export const ADD_POST = actionTypeCreator("ADD_POST");
export const DELETE_POST = actionTypeCreator("DELETE_POST");
export const GET_POST = actionTypeCreator("GET_POST");
export const CLEAR_STATUSES = "CLEAR_STATUSES";

// User (me)
export const USER_LOGIN = actionTypeCreator("USER_LOGIN");
export const USER_LOGOUT = actionTypeCreator("USER_LOGOUT");
export const GET_CURRENT_USER = actionTypeCreator("GET_CURRENT_USER");
