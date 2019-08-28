import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import KBlock from "../../components/block/index";
import Basic from "./basic";

const prefixCls = "app-steps";

export default class Page extends Component {
  config = {
    navigationBarTitleText: "Steps 步骤条"
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
