import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../state/posts/actions";
import { logoutUser } from "../state/user/actions";
import { Row, Col, Avatar, PageHeader, Divider, Space, Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitch,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import PostsTable from "../components/Posts/PostsTable";
import avatar from "../images/avatar.svg";

const Home = () => {
  const { posts, user } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    getPosts(dispatch, 3);
  }, [dispatch]);

  return (
    <div className="home">
      <Row className="home__splash" align="middle">
        <Col xs={24} sm={10} md={10} lg={10}>
          <PageHeader
            className="home__bio"
            title={
              user.data ? (
                <Button
                  type="primary"
                  icon={<FontAwesomeIcon icon={faSignOutAlt} />}
                  onClick={() => logoutUser(dispatch)}
                ></Button>
              ) : (
                <Link to="/login">
                  <Avatar className="home__image" src={avatar} size={60} />
                </Link>
              )
            }
            subTitle={
              <div>
                <h1>Simon Sankar</h1>
                <div>Dev • Messi • Minecraft</div>
                <span>I like to code sometimes</span>
                <Divider style={{ margin: "10px 0px" }} />
                <div>
                  <Space size="middle">
                    <FontAwesomeIcon icon={faGithub} />
                    <FontAwesomeIcon icon={faYoutube} />
                    <FontAwesomeIcon icon={faTwitch} />
                  </Space>
                </div>
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
