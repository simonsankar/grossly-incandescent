import React from "react";
import { Row, Col } from "antd";
import PostsTable from "../components/Posts/PostsTable";

const Posts = () => {
  return (
    <div className="posts">
      <Row>
        <Col span={24}>
          <PostsTable />
        </Col>
      </Row>
    </div>
  );
};

export default Posts;
