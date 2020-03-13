import React, { Component } from "react";
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
        style={{
          boxShadow:
            "0 3px 6px -4px rgba(0, 0, 0, 1), 0 6px 16px 0 rgba(0, 0, 0, 0.3), 0 9px 28px 8px rgba(0, 0, 0, 0.05)"
        }}
        className="navbar"
        theme="dark"
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="mail">
          <MailOutlined />
          Navigation One
        </Menu.Item>
        <Menu.Item key="cool">
          <MailOutlined />
          Navigation One
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
