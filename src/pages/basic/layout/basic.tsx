import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { KRow, KCol } from "kui-weapp";

export default class Demo extends Component {
  render() {
    return (
      <View>
        <KRow >
          <KCol span={12}>
            <View className="gutter-box">col-12</View>
          </KCol>
          <KCol span={12}>
            <View className="gutter-box">col-12</View>
          </KCol>
        </KRow>
        {/* <KRow>
          <KCol span={8}>
            <View className="gutter-box">col-8</View>
          </KCol>
          <KCol span={8}>
            <View className="gutter-box">col-8</View>
          </KCol>
          <KCol span={8}>
            <View className="gutter-box">col-8</View>
          </KCol>
        </KRow>
        <KRow>
          <KCol span={6}>
            <View className="gutter-box">col-6</View>
          </KCol>
          <KCol span={6}>
            <View className="gutter-box">col-6</View>
          </KCol>
          <KCol span={6}>
            <View className="gutter-box">col-6</View>
          </KCol>
          <KCol span={6}>
            <View className="gutter-box">col-6</View>
          </KCol>
        </KRow> */}
      </View>
    );
  }
}
