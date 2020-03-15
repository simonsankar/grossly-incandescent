import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined
} from "@ant-design/icons";

const { SubMenu } = Menu;

export default class App extends Component {
  state = {
    current: "mail"
  };

  handleClick = e => {
    console.log("click ", e);
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
        <Menu.Item key="2">hello</Menu.Item>
        <Menu.Item key="mail">
          <MailOutlined />
          Navigation One
        </Menu.Item>
        <Menu.Item key="cool">
          <MailOutlined />
          <Link to="/post">Post</Link>
        </Menu.Item>
        <Menu.Item key="fun">
          <MailOutlined />
          Navigation One
        </Menu.Item>
        <Menu.Item key="sun">
          <MailOutlined />
          Navigation One
        </Menu.Item>
      </Menu>
    );
  }
}
