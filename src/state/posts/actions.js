import { postsRef } from "../../api/firebase";
import { GET_POSTS, ADD_POST } from "../../state/types";

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

export const addPost = (dispatch, post) => {
  dispatch({ type: ADD_POST.PENDING });
  postsRef.child(post.id).set(post, (error) => {
    if (error) dispatch({ type: ADD_POST.FAILURE, error });
    else dispatch({ type: ADD_POST.SUCCESS });
  });
};
