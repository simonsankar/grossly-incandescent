import { postsRef } from "../../api/firebase";
import { GET_POSTS } from "../../state/types";

export const getPosts = (dispatch, limit = 10) => {
  console.log("Limit is", limit);
  dispatch({ type: GET_POSTS.PENDING });
  return postsRef.limitToLast(limit).on("value", (snapshot) => {
    console.log(snapshot.val());
    return dispatch({
      type: GET_POSTS.SUCCESS,
      payload: Object.values(snapshot.val()),
    });
  });
};
