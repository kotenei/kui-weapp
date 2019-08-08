import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import KBlock from "../../components/block/index";
import Basic from "./basic";
import Accordion from "./accordion";

const prefixCls = "app-collapse";

export default class Page extends Component {
  config = {
    navigationBarTitleText: "Collapse 折叠面板"
  };

  render() {
    return (
      <View className={prefixCls}>
        <KBlock title="基础用法" bodyPadding={false}>
          <Basic />
        </KBlock>
        <KBlock title="手风琴" bodyPadding={false}>
          <Accordion />
        </KBlock>
      </View>
    );
  }
}
