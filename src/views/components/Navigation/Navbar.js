import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
  BookOutlined,
  FireFilled,
  FileTextOutlined,
  ContainerOutlined,
} from "@ant-design/icons";

const Navbar = () => {
  const [current, setCurrent] = useState("home");

  return (
    <Menu
      className="navbar"
      theme="dark"
      onClick={({ key }) => setCurrent(key)}
      selectedKeys={[current]}
      mode="horizontal"
    >
      <Menu.Item key="home">
        <Link to="/">
          <FireFilled style={{ color: "#8c7343", margin: 0 }} />
        </Link>
      </Menu.Item>

      <Menu.Item key="posts">
        <Link to="/posts">Posts</Link>
        <FileTextOutlined />
      </Menu.Item>
      <Menu.Item key="archive">
        <Link to="/archive">Archive</Link>
        <ContainerOutlined />
      </Menu.Item>
      <Menu.Item key="projects">
        <Link to="/projects">Projects</Link>
        <BookOutlined />
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
