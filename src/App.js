import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCurrentUser } from "./state/user/actions";
import { Layout, Row, Col, Spin } from "antd";

import Navbar from "./views/components/Navigation/Navbar";
import Home from "./views/pages/Home";
import Read from "./views/pages/Read";
import Posts from "./views/pages/Posts";
import Archive from "./views/pages/Archive";
import EditPost from "./views/pages/EditPost";
import Login from "./views/pages/Login";
import NoMatch from "./views/pages/NoMatch";
import Projects from "./views/pages/Projects";
import SpinnerLogo from "./images/spinner.svg";
import CreatePost from "./views/pages/CreatePost";

const { Footer, Content } = Layout;

const App = () => {
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    getCurrentUser(dispatch);
  }, [dispatch]);

  const PrivateRoute = ({ component: Component, user, ...rest }) => (
    <Route
      {...rest}
      render={(props) => {
        return user.loading && !user.data ? (
          "Loading... checking auth..."
        ) : !user.loading && user.data ? (
          <Component {...props} />
        ) : (
          <Redirect push to="/login" />
        );
      }}
    />
  );

  return (
    <Row className="app" justify="center">
      <Col
        className="app__content"
        xs={24}
        sm={24}
        md={20}
        lg={18}
        xl={16}
        xxl={14}
      >
        <Layout>
          <Navbar />
          <Content
            style={{ minHeight: "calc(100vh - 106px)", position: "relative" }}
          >
            {user.loading ? (
              <Spin
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%,-50%)",
                }}
                indicator={
                  <img
                    className="spin"
                    style={{
                      height: "120px",
                      width: "120px",
                    }}
                    alt="loading"
                    src={SpinnerLogo}
                  />
                }
                spinning
                size="large"
              />
            ) : (
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/read" component={Read} />
                <Route path="/posts" component={Posts} />
                <Route path="/archive" component={Archive} />
                <Route path="/projects" component={Projects} />
                <Route path="/login" component={Login} />
                <PrivateRoute
                  path="/create"
                  user={user}
                  component={CreatePost}
                />
                <PrivateRoute path="/edit/*" user={user} component={EditPost} />
                <Route component={NoMatch} />
              </Switch>
            )}
          </Content>
          <Footer>
            <Row justify="space-around">
              <Col span={4}>col-4</Col>
              <Col span={4}>col-4</Col>
              <Col span={4}>col-4</Col>
              <Col span={4}>col-4</Col>
            </Row>
          </Footer>
        </Layout>
      </Col>
    </Row>
  );
};

export default App;
