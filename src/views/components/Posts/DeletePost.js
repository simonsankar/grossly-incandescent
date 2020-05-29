import React from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../../../state/posts/actions";
import { Modal } from "antd";

const DeletePost = ({ visible, post, handleClose }) => {
  const dispatch = useDispatch();
  return (
    <Modal
      title="Delete Post?"
      visible={visible}
      onOk={() => {
        deletePost(dispatch, post.id);
        handleClose();
      }}
      onCancel={handleClose}
    >
      {post ? (
        <div>
          <p>{post.id}</p>
          <p>{post.details.title}</p>
          <p>{post.details.date}</p>
        </div>
      ) : null}
    </Modal>
  );
};

export default DeletePost;
