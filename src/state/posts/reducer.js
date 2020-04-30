import { GET_POSTS, ADD_POST } from "../types";

const posts = (
  state = {
    loading: false,
    data: [],
    error: null,
    uploaded: false,
  },
  action
) => {
  switch (action.type) {
    case GET_POSTS.PENDING:
    case ADD_POST.PENDING:
      return {
        ...state,
        loading: true,
        error: null,
        uploaded: false,
      };
    case GET_POSTS.SUCCESS:
    case ADD_POST.SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: null,
        uploaded: true,
      };
    case GET_POSTS.FAILURE:
    case ADD_POST.FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
        uploaded: false,
      };
    default:
      return state;
  }
};
export default posts;
