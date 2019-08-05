import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import KBlock from "../../components/block/index";
import Basic from "./basic";
import Line from "./line";

const prefixCls = "app-tag";

export default class Page extends Component {
  config = {
    navigationBarTitleText: "Tag 标签"
  };

  render() {
    return (
      <View className={prefixCls}>
        <KBlock title="基础用法">
          <Basic />
        </KBlock>
        <KBlock title="线框">
          <Line />
        </KBlock>
      </View>
    );
  }
}
