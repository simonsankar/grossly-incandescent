import {
  GET_POSTS,
  ADD_POST,
  DELETE_POST,
  GET_POST,
  CLEAR_STATUSES,
} from "../types";

const posts = (
  state = {
    loading: false,
    data: [],
    error: null,
    uploaded: false,
    deleted: null,
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
    case DELETE_POST.PENDING:
      return {
        ...state,
        loading: true,
        error: null,
        deleted: null,
      };

    case GET_POSTS.SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: null,
        uploaded: false,
      };
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
    case DELETE_POST.SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        deleted: true,
      };

    case GET_POSTS.FAILURE:
    case ADD_POST.FAILURE:
    case GET_POST.FAILURE:
    case DELETE_POST.FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
        uploaded: false,
        deleted: false,
      };

    case CLEAR_STATUSES:
      return {
        ...state,
        loading: false,
        uploaded: false,
        error: null,
        deleted: null,
      };
    default:
      return state;
  }
};
export default posts;
