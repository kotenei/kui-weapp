import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { KLoading } from "kui-weapp";

export default class Demo extends Component {
  render() {
    return (
      <View>
        <KLoading size="sm" color="warning" />
        <KLoading color="danger" />
        <KLoading size="lg" color="success" />
      </View>
    );
  }
}
