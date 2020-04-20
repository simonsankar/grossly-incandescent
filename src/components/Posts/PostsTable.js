import React from "react";
import { Link } from "react-router-dom";
import { Table, Tag } from "antd";

const { Column } = Table;

const PostsTable = ({ posts }) => {
  console.log(posts);
  return (
    <Table
      dataSource={posts}
      pagination={{ position: ["bottomCenter"], pageSize: 5 }}
      footer={() => "Praise the sun"}
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
              <Tag color="#22252d" key={tag}>
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
    </Table>
  );
};

export default PostsTable;
