import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import KBlock from "../../components/block/index";
import Basic from "./basic";

const prefixCls = "app-nav-bar";

export default class Page extends Component {
  config = {
    navigationBarTitleText: "NavBar 导航栏"
  };

  render() {
    return (
      <View className={prefixCls}>
        <KBlock title="基础用法">
          <Basic />
        </KBlock>
      </View>
    );
  }
}
