import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch, useStore } from "react-redux";
import { getCurrentUser } from "./state/user/actions";
import { Layout, Row, Col } from "antd";

import Navbar from "./components/Navigation/Navbar";
import Home from "./pages/Home";
import Read from "./pages/Read";
import Posts from "./pages/Posts";
import EditPost from "./pages/EditPost";
import Login from "./pages/Login";

const { Footer, Content } = Layout;

const App = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    getCurrentUser(dispatch);
  }, [dispatch]);

  const PrivateRoute = ({ component: Component, user, ...rest }) => (
    <Route
      {...rest}
      render={(props) => {
        console.log("the user?", user.data);
        return user.data ? <Redirect to="/edit" /> : <Component {...props} />;
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
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/read" component={Read} />
              <Route path="/create" component={EditPost} />
              <Route path="/edit" component={EditPost} />
              <Route path="/posts" component={Posts} />
              <PrivateRoute path="/login" user={user} component={Login} />
            </Switch>
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
