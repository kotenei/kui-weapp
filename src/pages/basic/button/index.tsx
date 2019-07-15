import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
// import Page from '../../components/Page';
// import Header from '../../components/Header';
import KBlock from "../../components/block/index";
import Basic from "./basic";
// import Size from "./Size";
// import Group from "./Group";
// import Icon from "./Icon";
import "./index.scss";

const prefixCls = "app-button";

export default class Page extends Component {
  config = {
    navigationBarTitleText: "Button 按钮"
  };

  render() {
    // const header = <Header goBack>Button 按钮</Header>;
    return (
      <View className={prefixCls}>
        <KBlock title="基础用法">
          <Basic />
        </KBlock>
      </View>
    );
  }
}
