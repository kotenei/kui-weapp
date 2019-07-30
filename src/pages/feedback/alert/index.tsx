import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import KBlock from "../../components/block/index";
import Basic from "./basic";
// import Vertical from "./vertical";
// import "./index.scss";

const prefixCls = "app-loading";

export default class Page extends Component {
  config = {
    navigationBarTitleText: "Alert 告警提示"
  };

  render() {
    return (
      <View className={prefixCls}>
        <KBlock title="基础用法">
          <Basic />
        </KBlock>
        {/* <KBlock title="自定义颜色">
          <Color />
        </KBlock>
        <KBlock title="尺寸">
          <Size />
        </KBlock>
        <KBlock title="加载提示">
          <Tip />
        </KBlock>
        <KBlock title="垂直方向">
          <Vertical />
        </KBlock> */}
      </View>
    );
  }
}
