import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import KBlock from "../../components/block/index";
import Basic from "./basic";
import Vertical from './vertical';

const prefixCls = "app-divider";

export default class Page extends Component {
  config = {
    navigationBarTitleText: "Divider 分隔符"
  };

  render() {
    return (
      <View className={prefixCls}>
        <KBlock title="基础用法">
          <Basic />
        </KBlock>
        <KBlock title="垂直" >
          <Vertical />
        </KBlock>
      </View>
    );
  }
}
