import React from "react";
import { Link } from "react-router-dom";
import { Table, Tag } from "antd";

const { Column } = Table;

const PostsTable = () => {
  return (
    <Table
      dataSource={data}
      pagination={{ position: ["bottomCenter"], pageSize: 5 }}
      footer={() => "Praise the sun"}
    >
      <Column
        title="title"
        dataIndex="post"
        key="title"
        render={(post) => <Link to={`/read/${post.url}`}>{post.title}</Link>}
      />
      <Column
        title="tags"
        dataIndex="tags"
        key="tags"
        render={(tags) => (
          <span>
            {tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </span>
        )}
      />
      <Column title="date" dataIndex="date" key="date" />
    </Table>
  );
};
const data = [
  {
    key: "1",
    post: {
      title: "Create-react-app electron starter guide",
      url: "098123-asd-qwe",
    },
    date: "2020/03/19",
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    post: {
      url: "098123-asd-qwe",
      title: "Reason-Native with Revery UI",
    },
    date: "2020/03/19",
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    post: {
      url: "098123-asd-qwe",
      title: "React Cool tricks",
    },
    date: "2020/03/19",
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

export default PostsTable;
