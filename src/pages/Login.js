import React from "react";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../state/user/actions";
import { Row, Col, Card, Form, Input, Button } from "antd";

const Login = (props) => {
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();

  const onFinish = ({ email, password }) => {
    console.log("Success:", email, password);
    loginUser(dispatch, email, password).then(() =>
      props.history.push("/edit")
    );
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Row className="login" align="middle" justify="center">
      <Col xs={22} sm={20} md={18} lg={12}>
        <Card
          className="login__form"
          title="Login"
          extra={
            user.loading
              ? "Loading..."
              : user.error
              ? `${user.error.message}`
              : "Are you sure you're Simon?"
          }
        >
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default withRouter(Login);
