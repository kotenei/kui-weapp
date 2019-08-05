import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import KBlock from "../../components/block/index";
import Indeterminate from "./indeterminate";
import PercentInside from './percent-inside';
import PercentOutside from './percent-outside';

const prefixCls = "app-progress";

export default class Page extends Component {
  config = {
    navigationBarTitleText: "Progress 进度条"
  };

  render() {
    return (
      <View className={prefixCls}>
        <KBlock title="线形进度条 — 不确定进度" >
          <Indeterminate />
        </KBlock>
        <KBlock title="线形进度条 — 百分比外显" >
          <PercentOutside />
        </KBlock>
        <KBlock title="线形进度条 — 百分比内显" >
          <PercentInside />
        </KBlock>
      </View>
    );
  }
}
