import React, { useState, useEffect } from "react";
import { Row, Col, Space, Button, Form, Input } from "antd";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import MarkdownIt from "markdown-it";

const mdParser = new MarkdownIt(/* Markdown-it options */);

const CreatePost = () => {
  const [source, setSource] = useState(
    "# Hello! \n ## How are ya?\n ```js const code = 0; ```"
  );

  useEffect(() => {}, []);

  const onFinish = ({ title, password }) => {
    console.log("Success:", title);
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
