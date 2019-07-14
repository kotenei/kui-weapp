import Taro, { Component } from "@tarojs/taro";
// import Page from '../../components/Page';
// import Header from '../../components/Header';
import KBlock from "../../components/Block";
import Basic from "./basic";
// import Size from "./Size";
// import Group from "./Group";
// import Icon from "./Icon";

const prefixCls = "app-button";

export default class View extends Component {
  config = {
    navigationBarTitleText: "Button 按钮"
  };

  render() {
    // const header = <Header goBack>Button 按钮</Header>;
    return (
      <KBlock title="基础用法">
        <Basic />
      </KBlock>
    );
  }
}
