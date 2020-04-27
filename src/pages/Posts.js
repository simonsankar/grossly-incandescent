import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../state/posts/actions";
import { Row, Col } from "antd";
import PostsTable from "../components/Posts/PostsTable";

const Posts = () => {
  const { posts, user } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    getPosts(dispatch, 10);
  }, [dispatch]);
  return (
    <div className="posts">
      <Row className="posts__table">
        <Col span={24}>
          {posts.loading ? (
            "Loading..."
          ) : posts.data.length ? (
            <PostsTable posts={posts.data} isAuth={user.data !== null} />
          ) : (
            "No posts found :("
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Posts;
