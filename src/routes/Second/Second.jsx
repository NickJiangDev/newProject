import React from "react";
import { NavBar, Icon, Button } from "antd-mobile";

export default class Second extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    document.title = "Second";
  }
  render() {
    return <div>Second</div>;
  }
}
