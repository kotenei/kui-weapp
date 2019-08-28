import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { KSteps, KStep } from "kui-weapp";

export default class Demo extends Component {
  render() {
    return (
      <KSteps current={1} status="process">
        <KStep renderTitle={<View>第一步</View>} renderDescription={<View>这里是描述</View>} />
        <KStep renderTitle={<View>第二步</View>} renderDescription={<View>这里是描述</View>} />
        <KStep renderTitle={<View>第三步</View>} renderDescription={<View>这里是描述</View>} />
      </KSteps>
    );
  }
}
