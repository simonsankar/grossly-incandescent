import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import posts from "./posts/reducer";

const rootReducer = combineReducers({
  posts,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  {
    posts: { loading: false, data: [], error: null },
  },
  composeEnhancers(applyMiddleware(thunk))
);
