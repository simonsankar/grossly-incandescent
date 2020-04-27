import React from "react";
import { Link } from "react-router-dom";
import { Table, Tag, Button, Space } from "antd";
import { FireFilled, EditOutlined, DeleteOutlined } from "@ant-design/icons";

const { Column } = Table;

const PostsTable = ({ posts, isAuth }) => {
  console.log(posts);
  return (
    <Table
      size="small"
      rowKey="id"
      className="table"
      dataSource={posts}
      pagination={{ position: ["bottomCenter"], pageSize: 5 }}
      footer={() => <FireFilled style={{ color: "#8c7343" }} />}
    >
      <Column
        title="title"
        dataIndex="details"
        key="title"
        render={(details) => (
          <Link to={`/read/${details.url}`}>{details.title}</Link>
        )}
      />
      <Column
        title="tags"
        dataIndex="details"
        key="tags"
        render={({ tags }) => (
          <span>
            {tags.map((tag) => (
              <Tag color="#8c7343" key={tag}>
                {tag}
              </Tag>
            ))}
          </span>
        )}
      />
      <Column
        title="date"
        dataIndex="details"
        key="date"
        render={({ date }) => <span>{date}</span>}
      />
      {isAuth && (
        <Column
          title="actions"
          dataIndex="details"
          key="actions"
          render={(details) => (
            <Space size="small">
              <Button
                shape="circle"
                type="primary"
                icon={<EditOutlined />}
                href={`/edit/${details.url}`}
              />
              <Button shape="circle" type="danger" icon={<DeleteOutlined />} />
            </Space>
          )}
        />
      )}
    </Table>
  );
};

export default PostsTable;
