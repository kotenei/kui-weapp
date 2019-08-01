import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { KBadge } from "kui-weapp";

export default class Demo extends Component {
  render() {
    return (
      <View>
        <KBadge color="primary" text={101} overflowCount={99} />
        <KBadge color="info" text={10} />
        <KBadge color="success" text={10} />
        <KBadge color="warning" text={10} />
        <KBadge color="danger" text={10} />
      </View>
    );
  }
}
