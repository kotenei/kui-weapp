import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { KProgress } from "kui-weapp";

export default class Demo extends Component {
  render() {
    return (
      <View>
        <KProgress
          percent={10}
          color="primary"
          strokeWidth={20}
          textInside={true}
        />
        <KProgress
          percent={40}
          color="warning"
          strokeWidth={20}
          textInside={true}
        />
        <KProgress
          percent={100}
          color="success"
          strokeWidth={20}
          textInside={true}
        />
        <KProgress
          percent={80}
          color="danger"
          strokeWidth={20}
          textInside={true}
        />
      </View>
    );
  }
}
