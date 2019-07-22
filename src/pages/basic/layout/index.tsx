import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import KBlock from "../../components/block/index";
import Basic from "./basic";
import "./index.scss";
import KComponent from "../../../common/component";

const prefixCls = "app-layout";

export default class Page extends KComponent {
  config = {
    navigationBarTitleText: "Layout 布局"
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
