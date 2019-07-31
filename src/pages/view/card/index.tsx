import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import KBlock from "../../components/block/index";
import Basic from "./basic";
import Full from "./full";

const prefixCls = "app-card";

export default class Page extends Component {
  config = {
    navigationBarTitleText: "Card 卡片"
  };

  render() {
    return (
      <View className={prefixCls}>
        <KBlock title="基础用法">
          <Basic />
        </KBlock>
        <KBlock title="通栏" bodyPadding={false}>
          <Full />
        </KBlock>
      </View>
    );
  }
}
