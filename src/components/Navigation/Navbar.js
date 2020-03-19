import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import { Menu } from "antd";
import { BookOutlined, FireFilled, SearchOutlined } from "@ant-design/icons";

export default class App extends Component {
  state = {
    current: "home"
  };

  handleClick = e => {
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <Menu
        className="navbar"
        theme="dark"
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item className="navbar__home" key="home">
          <FireFilled style={{ color: "#8c7343" }} />
          <Link to="/">Grossly Incandescent</Link>
        </Menu.Item>
        <Menu.Item key="sun">
          Search
          <SearchOutlined />
        </Menu.Item>
        <Menu.Item key="cool">
          <Link to="/post">Posts</Link>
          <BookOutlined />
        </Menu.Item>
      </Menu>
    );
  }
}
