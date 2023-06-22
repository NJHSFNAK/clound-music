import React, { Component } from "react";

interface IProps {
  name: string;
  age: number;
}

interface IState {
  msg: string;
}

// 泛型传入两个参数，第一个是props的类型，第二个是state的类型
export default class index extends Component<IProps, IState> {
  name = "aaa";
  state = {
    msg: "heelo world"
  };
  getData() {
    console.log("12312312");
  }
  componentDidMount(): void {
    console.log("componentDidMount");
    this.getData();
  }
  render() {
    const { msg } = this.state;
    return (
      <div>
        {this.props.name}---{msg}--{this.name}
      </div>
    );
  }
}
