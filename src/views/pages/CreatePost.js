import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../state/posts/actions";
import { v4 } from "uuid";
import readingTime from "reading-time";
import { Row, Col, Button, Form, Input, Card, message } from "antd";

const loading = () => {
  message.info("Uploading your post!");
};
const success = () => {
  message.success("Post was successful;y added!");
};

const error = (error) => {
  message.error(error);
};

const CreatePost = () => {
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state);

  const onFinish = ({ title }) => {
    const id = v4(title);
    const date = new Date();

    const post = {
      id,
      details: {
        title,
        tags: [],
        date: date.toISOString().substring(0, 10),
        url: title.split(" ").join("-").toLowerCase(),
      },
    };
    console.log(title, file);
    addPost(dispatch, post, file);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="create">
      {posts.loading && loading()}
      {posts.error && error()}
      {posts.uploaded ? success() : null}
      <Row className="create__menu" align="middle" justify="center">
        <Col span={16}>
          <Card className="create__form">
            <Form
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="Title"
                name="title"
                rules={[
                  { required: true, message: "Please input your post title!" },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label=".md"
                name="md"
                rules={[
                  {
                    required: true,
                    message: "Please input your markdown file!",
                  },
                ]}
              >
                <Input
                  type="file"
                  onChange={(e) => {
                    console.log(e.target.files[0]);
                    setFile(e.target.files[0]);
                  }}
                />
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
    </div>
  );
};

export default CreatePost;
