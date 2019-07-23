import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { KRow, KCol } from "kui-weapp";
import KComponent from "../../../common/component";

export default class Demo extends KComponent {
  render() {
    return (
      <View>
        <KRow>
          <KCol span={12} className="dark">
            <View className="gutter-box">col-12</View>
          </KCol>
          <KCol span={12} className="light">
            <View className="gutter-box">col-12</View>
          </KCol>
        </KRow>
        <KRow>
          <KCol span={8} className="dark">
            <View className="gutter-box">col-8</View>
          </KCol>
          <KCol span={8} className="light">
            <View className="gutter-box">col-8</View>
          </KCol>
          <KCol span={8} className="dark">
            <View className="gutter-box">col-8</View>
          </KCol>
        </KRow>
        <KRow>
          <KCol span={6} className="dark">
            <View className="gutter-box">col-6</View>
          </KCol>
          <KCol span={6} className="light">
            <View className="gutter-box">col-6</View>
          </KCol>
          <KCol span={6} className="dark">
            <View className="gutter-box">col-6</View>
          </KCol>
          <KCol span={6} className="light">
            <View className="gutter-box">col-6</View>
          </KCol>
        </KRow>
      </View>
    );
  }
}
