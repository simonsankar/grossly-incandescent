import { postsRef, postsStorageRef } from "../../api/firebase";
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

export const addPost = (dispatch, post, file) => {
  dispatch({ type: ADD_POST.PENDING });
  const upload = postsStorageRef.child(post.id).put(file);
  upload.on(
    "state_changed",
    () => {},
    (error) => dispatch({ type: ADD_POST.FAILURE, error }),
    () => {
      postsRef.child(post.id).set(post, (error) => {
        if (error) dispatch({ type: ADD_POST.FAILURE, error });
        else dispatch({ type: ADD_POST.SUCCESS });
      });
    }
  );
};
