import React from "react";
import { NavBar, Icon } from "antd-mobile";
import "./Component.css";

export default class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      json: "Hello"
    };
  }
  componentWillMount() {
    this.fetchData();
  }
  async fetchData() {
    try {
      this.setState({ json: "Hello World" });
      const a = await fetch(
        `https://api.coinmarketcap.com/v1/ticker/?limit=10`
      ).then(res => res.json());
    } catch (error) {}
  }
  render() {
    const { jsonData, json } = this.state;
    return (
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => console.log("onLeftClick")}
        rightContent={[
          <Icon key="0" type="search" style={{ marginRight: "16px" }} />,
          <Icon key="1" type="ellipsis" />
        ]}
      >
        NavBar
      </NavBar>
    );
  }
}
