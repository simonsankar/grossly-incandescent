import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../state/posts/actions";
import { Row, Col, Skeleton } from "antd";
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
            <Skeleton paragraph active loading={true} />
          ) : (
            <PostsTable posts={posts.data} isAuth={user.data !== null} />
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Posts;
