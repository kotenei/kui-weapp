import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { KLoading } from "kui-weapp";

export default class Demo extends Component {
  render() {
    return (
      <View>
        <KLoading tip="正在加载，请稍后" vertical />
      </View>
    );
  }
}
