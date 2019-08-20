import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import KBlock from "../../components/block/index";
import Basic from "./basic";
import Cancel from "./cancel";
import Title from "./title";

const prefixCls = "app-actionsheet";

export default class Page extends Component {
  config = {
    navigationBarTitleText: "ActionSheet 动作面板"
  };

  render() {
    return (
      <View className={prefixCls}>
        <KBlock title="基础用法" >
          <Basic />
        </KBlock>
        <KBlock title="带取消按钮ActionSheet" >
          <Cancel />
        </KBlock>
        <KBlock title="带标题ActionShee" >
          <Title />
        </KBlock>
      </View>
    );
  }
}
