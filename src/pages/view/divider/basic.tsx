import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { KDivider, KRow, KCol } from "kui-weapp";

export default class Demo extends Component {
  render() {
    return (
      <View>
        <KDivider style={{ marginBottom: "10px" }} />
        <KDivider style={{ marginBottom: "10px" }} color="primary" />
        <KDivider style={{ marginBottom: "10px" }} color="info" />
        <KDivider style={{ marginBottom: "10px" }} color="warning" />
        <KDivider style={{ marginBottom: "10px" }} color="danger" />
        <KDivider style={{ marginBottom: "10px" }} color="success" />
      </View>
    );
  }
}
