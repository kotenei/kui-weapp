import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import KBlock from "../../components/block/index";
import Basic from "./basic";
import Size from "./size";
import IconButton from "./icon";
import "./index.scss";

const prefixCls = "app-button";

export default class Page extends Component {
  config = {
    navigationBarTitleText: "Button 按钮"
  };

  render() {
    return (
      <View className={prefixCls}>
        <KBlock title="基础用法">
          <Basic />
        </KBlock>
        <KBlock title="尺寸">
          <Size />
        </KBlock>
        <KBlock title="图标">
          <IconButton />
        </KBlock>
      </View>
    );
  }
}
