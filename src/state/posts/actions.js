import { postsRef, postsStorageRef } from "../../api/firebase";
import { GET_POSTS, ADD_POST, GET_POST } from "../../state/types";
import { filter } from "lodash";

export const getPosts = (dispatch, limit = 10) => {
  console.log("Limit is", limit);
  dispatch({ type: GET_POSTS.PENDING });
  return postsRef.limitToLast(limit).on("value", (snapshot) => {
    console.log(snapshot.val());
    return dispatch({
      type: GET_POSTS.SUCCESS,
      payload: snapshot.val() ? Object.values(snapshot.val()) : [],
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

export const getPost = (dispatch, url) => {
  dispatch({ type: GET_POST.PENDING });
  return postsRef.orderByChild("url").on("value", (snapshot) => {
    const selectedPost = filter(snapshot.val(), (post) => {
      return post.details.url === url;
    });
    postsStorageRef
      .child(selectedPost[0].id)
      .getDownloadURL()
      .then((fileUrl) => {
        fetch(fileUrl)
          .then((res) => {
            return res.text();
          })
          .then((data) => {
            return dispatch({
              type: GET_POST.SUCCESS,
              payload: {
                ...selectedPost[0],
                text: data,
              },
            });
          })
          .catch((error) => dispatch({ type: GET_POST.FAILURE, error }));
      })
      .catch((error) => dispatch({ type: GET_POST.FAILURE, error }));
  });
};
