import { GET_POSTS, ADD_POST, GET_POST } from "../types";

const posts = (
  state = {
    loading: false,
    data: [],
    error: null,
    uploaded: false,
    selected: {},
  },
  action
) => {
  switch (action.type) {
    case GET_POSTS.PENDING:
    case ADD_POST.PENDING:
    case GET_POST.PENDING:
      return {
        ...state,
        loading: true,
        error: null,
        uploaded: false,
        selected: {},
      };

    case GET_POSTS.SUCCESS:
    case ADD_POST.SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: null,
        uploaded: true,
      };
    case GET_POST.SUCCESS:
      return {
        ...state,
        loading: false,
        selected: action.payload,
        error: null,
      };

    case GET_POSTS.FAILURE:
    case ADD_POST.FAILURE:
    case GET_POST.FAILURE:
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
