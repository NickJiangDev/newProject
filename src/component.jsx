import React from "react";
import { NavBar, Icon, Button } from "antd-mobile";
import s from "./Component.less";

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
      <div className={s.back}>
        {/* <div className="icon" /> */}
        <p>Nick Jiang's Blog</p>
        <small>Talk is cheap, show me your code.</small>
        {/* <Button type="primary">123</Button> 测试 global 样式修改*/}
      </div>
    );
  }
}
