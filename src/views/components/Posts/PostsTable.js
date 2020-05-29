import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { findIndex } from "lodash";
import { Table, Tag, Button, Space, message } from "antd";
import { FireFilled, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import DeletePost from "./DeletePost";

const { Column } = Table;

const loading = () => {
  message.info("Deleting your post!");
};
const success = () => {
  message.success("Post was successfully deleted!");
};

const error = (error) => {
  message.error(error);
};
const PostsTable = ({ posts, isAuth }) => {
  const [visible, toggleVisible] = useState(false);
  const [selected, setSelected] = useState();

  // const history = useHistory();
  console.log(posts);
  return (
    <>
      {posts.loading && loading()}
      {posts.error && error()}
      {posts.deleted ? success() : null}
      <Table
        className="table fade-in"
        size="small"
        emptyText="No Posts"
        rowKey="id"
        dataSource={posts}
        pagination={{ position: ["bottomCenter"], pageSize: 5 }}
        footer={() => <FireFilled style={{ color: "#8c7343" }} />}
      >
        <Column
          className="table__title-column"
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
              {tags &&
                tags.map((tag) => (
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
                <Button
                  shape="circle"
                  type="danger"
                  icon={<DeleteOutlined />}
                  onClick={() => {
                    console.log(details);
                    setSelected(() => {
                      return posts[
                        findIndex(
                          posts,
                          (post) => post.details.url === details.url
                        )
                      ];
                    });
                    toggleVisible(() => !visible);
                  }}
                />
              </Space>
            )}
          />
        )}
      </Table>
      <DeletePost
        visible={visible}
        post={selected}
        handleClose={() => toggleVisible(false)}
      />
    </>
  );
};

export default PostsTable;
