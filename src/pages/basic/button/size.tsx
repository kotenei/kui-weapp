import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { KButton } from "kui-weapp";

export default class Demo extends Component {
  render() {
    return (
      <View>
        <KButton color="primary" size="xs">
          xs button
        </KButton>
        <KButton color="primary" size="sm">
          sm button
        </KButton>
        <KButton color="primary">default</KButton>
        <KButton color="primary" size="lg">
          lg button
        </KButton>
      </View>
    );
  }
}
