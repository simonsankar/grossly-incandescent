import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../state/posts/actions";
import { logoutUser } from "../../state/user/actions";
import {
  Row,
  Col,
  Avatar,
  PageHeader,
  Divider,
  Space,
  Button,
  Skeleton,
} from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitch,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import PostsTable from "../components/Posts/PostsTable";
import avatar from "../../images/avatar.svg";

const Home = () => {
  const { posts, user } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    getPosts(dispatch, 3);
  }, [dispatch]);

  return (
    <div className="home">
      <Row className="home__splash" align="middle">
        <Col xs={24} sm={12} md={12} lg={10}>
          <PageHeader
            className="home__bio"
            title={
              user.data ? (
                <Button
                  className="fade-in"
                  shape="circle"
                  type="primary"
                  icon={<FontAwesomeIcon icon={faSignOutAlt} />}
                  onClick={() => logoutUser(dispatch)}
                ></Button>
              ) : (
                <Link to="/login">
                  <Avatar
                    className="home__image fade-in pulse"
                    src={avatar}
                    size={60}
                  />
                </Link>
              )
            }
            subTitle={
              <div>
                <h1>Simon Sankar</h1>
                <div>Dev • Messi • Minecraft</div>
                <p>I am not sure what to put here</p>
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
        <Col xs={24} sm={12} md={12} lg={14}>
          <div className="home__header">Grossly Incandescent</div>
        </Col>
      </Row>
      <Row className="home__posts">
        <Col span={24}>
          {posts.loading ? (
            <Skeleton loading={true} active paragraph />
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

export default Home;
