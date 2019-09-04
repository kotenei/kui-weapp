import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { KSteps, KStep, KIcon } from "kui-weapp";

export default class Demo extends Component {
  render() {
    return (
      <KSteps >
        <KStep
          renderTitle={<View>第一步</View>}
          renderDescription={<View>这里是描述</View>}
          index={0}
          status="finish"
          iconType="user"
        />
        <KStep
          renderTitle={<View>第二步</View>}
          renderDescription={<View>这里是描述</View>}
          index={1}
          status="process"
          iconType="idcard"
        />
        <KStep
          renderTitle={<View>第三步</View>}
          renderDescription={<View>这里是描述</View>}
          index={2}
          last
          iconType="github-fill"
        />
      </KSteps>
    );
  }
}
