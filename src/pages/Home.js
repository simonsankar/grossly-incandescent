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
      <Row className="home__splash" align="middle">
        <Col xs={24} sm={10} md={10} lg={10}>
          <PageHeader
            className="home__bio"
            title={<Avatar src={avatar} size={50} />}
            subTitle={
              <div>
                <h2>Simon Sankar</h2>
                <span>lorem ipsum</span>
              </div>
            }
          />
        </Col>
        <Col xs={24} sm={14} md={14} lg={14}>
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
