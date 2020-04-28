import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCurrentUser } from "./state/user/actions";
import { Layout, Row, Col, Spin } from "antd";

import Navbar from "./components/Navigation/Navbar";
import Home from "./pages/Home";
import Read from "./pages/Read";
import Posts from "./pages/Posts";
import Archive from "./pages/Archive";
import EditPost from "./pages/EditPost";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import SpinnerLogo from "./images/spinner.svg";

const { Footer, Content } = Layout;

const App = () => {
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    getCurrentUser(dispatch);
  }, [dispatch]);
  console.log(user);

  const PrivateRoute = ({ component: Component, user, ...rest }) => (
    <Route
      {...rest}
      render={(props) => {
        console.log("Current user?", user);
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
          <Content style={{ minHeight: "calc(100vh - 106px)" }}>
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
                <Route path="/login" component={Login} />
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
