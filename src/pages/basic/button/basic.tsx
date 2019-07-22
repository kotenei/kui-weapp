import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { KButton } from "kui-weapp";

export default class Demo extends Component {
  render() {
    return (
      <View>
        <KButton>default</KButton>
        <KButton color="primary">primary</KButton>
        <KButton color="info">info</KButton>
        <KButton color="success">success</KButton>
        <KButton color="warning">warning</KButton>
        <KButton color="danger">danger</KButton>
        <KButton disabled>disabled</KButton>
      </View>
    );
  }
}
