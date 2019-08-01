import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import KBlock from "../../components/block/index";
import Basic from "./basic";
import Size from "./size";
import Square from "./square";

const prefixCls = "app-avatar";

export default class Page extends Component {
  config = {
    navigationBarTitleText: "Avatar 头像"
  };

  render() {
    return (
      <View className={prefixCls}>
        <KBlock title="基础用法">
          <Basic />
        </KBlock>
        <KBlock title="方形">
          <Square />
        </KBlock>
        <KBlock title="尺寸">
          <Size />
        </KBlock>
      </View>
    );
  }
}
