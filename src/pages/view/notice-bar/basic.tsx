import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { KNoticeBar } from "kui-weapp";

const STYLE = {
  marginBottom: "10px"
};

export default class Demo extends Component {
  render() {
    return (
      <View>
        <KNoticeBar style={STYLE}>
          Python之父声援中国程序员996ICU计划，Python要拒绝996公司？
        </KNoticeBar>

        <KNoticeBar mode="link" style={STYLE}>
          Python之父声援中国程序员996ICU计划，Python要拒绝996公司？
        </KNoticeBar>

        <KNoticeBar iconType={"time-circle"} style={STYLE}>
          自定义图标
        </KNoticeBar>

        <KNoticeBar mode="closable" style={STYLE}>
          默认删除图标
        </KNoticeBar>

        <KNoticeBar
          mode="closable"
          renderAction={<Text style={{ color: "#a1a1a1" }}>不再提示</Text>}
          style={STYLE}
          showActionIcon={false}
        >
          自定义操作区内容
        </KNoticeBar>
      </View>
    );
  }
}
