import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../state/posts/actions";
import { Row, Col, Avatar, PageHeader } from "antd";
import PostsTable from "../components/Posts/PostsTable";
import avatar from "../images/avatar.svg";
const Home = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    getPosts(dispatch, 3);
  }, [dispatch]);
  console.log(posts);
  return (
    <div className="home">
      <Row className="home__splash">
        <Col xs={24} sm={12} md={10} lg={10}>
          <PageHeader title={<Avatar src={avatar} size={60} />} />
        </Col>
        <Col xs={24} sm={12} md={14} lg={14}>
          <div className="home__header">Grossly Incandescent</div>
        </Col>
      </Row>
      <Row className="home__posts">
        <Col span={24}>
          {posts.loading ? (
            "Loading..."
          ) : posts.data.length ? (
            <PostsTable posts={posts.data} />
          ) : (
            "No posts found :("
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Home;
