import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import KBlock from "../../components/block/index";
import Basic from "./basic";
import IconSteps from "./icon";
import Status from './status';
import Vertical from './vertical';

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
        <KBlock title="自定义图标">
          <IconSteps />
        </KBlock>
        <KBlock title="运行步骤错误">
          <Status />
        </KBlock>
        <KBlock title="垂直步骤条">
          <Vertical />
        </KBlock>
      </View>
    );
  }
}
