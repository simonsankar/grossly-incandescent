import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../state/posts/actions";
import { v4 } from "uuid";
import readingTime from "reading-time";
import { Row, Col, Button, Form, Input } from "antd";

import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import MarkdownIt from "markdown-it";

const mdParser = new MarkdownIt(/* Markdown-it options */);

const CreatePost = () => {
  const [source, setSource] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {}, []);

  const onFinish = ({ title }) => {
    const id = v4(title);
    const date = new Date();

    const post = {
      id,
      data: {
        readTime: readingTime(source),
        text: source,
      },
      details: {
        title,
        tags: [],
        date: date.toISOString().substring(0, 10),
        url: title.split(" ").join("-").toLowerCase(),
      },
    };

    addPost(dispatch, post);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="create">
      <Row className="create__menu">
        <Col span={24}>
          <Form
            layout="inline"
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Title"
              name="title"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <MdEditor
        value=""
        renderHTML={(text) => mdParser.render(text)}
        onChange={({ text }) => {
          setSource(text);
        }}
      />
    </div>
  );
};

export default CreatePost;
