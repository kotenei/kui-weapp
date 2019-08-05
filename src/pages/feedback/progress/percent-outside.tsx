import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { KProgress } from "kui-weapp";

export default class Demo extends Component {
  render() {
    return (
      <View>
        <KProgress percent={10} color="primary" showText={false} />
        <KProgress percent={40} color="warning" />
        <KProgress percent={100} color="success" status="success" />
        <KProgress percent={80} color="danger" status="error" />
      </View>
    );
  }
}
