import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import KBlock from "../../components/block/index";
import Basic from "./basic";
import Icons from "./icon";
import HideNumber from './hide-number';
import Number from './number';
import Pointer from './pointer';

const prefixCls = "app-pagination";

export default class Page extends Component {
  config = {
    navigationBarTitleText: "Pagination 分页"
  };

  render() {
    return (
      <View className={prefixCls}>
        <KBlock title="基础用法">
          <Basic />
        </KBlock>
        <KBlock title="带图标和文字">
          <Icons />
        </KBlock>
        <KBlock title="隐藏数值">
          <HideNumber />
        </KBlock>
        <KBlock title="只显示数值" >
          <Number />
        </KBlock>
        <KBlock title="显示点" >
          <Pointer />
        </KBlock>
      </View>
    );
  }
}
