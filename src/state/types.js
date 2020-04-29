import actionTypeCreator from "./actionTypeCreator";

// Posts
export const GET_POSTS = actionTypeCreator("GET_POSTS");
export const ADD_POST = actionTypeCreator("ADD_POST");

// User (me)
export const USER_LOGIN = actionTypeCreator("USER_LOGIN");
export const USER_LOGOUT = actionTypeCreator("USER_LOGOUT");
export const GET_CURRENT_USER = actionTypeCreator("GET_CURRENT_USER");
