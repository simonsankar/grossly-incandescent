import { GET_POSTS } from "../types";

const posts = (
  state = {
    loading: false,
    data: [],
    error: null,
  },
  action
) => {
  switch (action.type) {
    case GET_POSTS.PENDING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_POSTS.SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: null,
      };
    case GET_POSTS.FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
export default posts;
