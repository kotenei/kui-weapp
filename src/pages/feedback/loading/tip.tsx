import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { KLoading } from "kui-weapp";

export default class Demo extends Component {
  render() {
    return (
      <View>
        <KLoading tip="加载中..." />
      </View>
    );
  }
}
