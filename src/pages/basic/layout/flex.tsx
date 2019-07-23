import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { KRow, KCol } from "kui-weapp";
import KComponent from "../../../common/component";

export default class Demo extends KComponent {
  render() {
    return (
      <View>
        <h4>start</h4>
        <KRow justify="start">
          <KCol span={4} className="dark">
            <View className="gutter-box">col-4</View>
          </KCol>
          <KCol span={4} className="light">
            <View className="gutter-box">col-4</View>
          </KCol>
          <KCol span={4} className="dark">
            <View className="gutter-box">col-4</View>
          </KCol>
          <KCol span={4} className="light">
            <View className="gutter-box">col-4</View>
          </KCol>
        </KRow>
        <h4>center</h4>
        <KRow justify="center">
          <KCol span={4} className="dark">
            <View className="gutter-box">col-4</View>
          </KCol>
          <KCol span={4} className="light">
            <View className="gutter-box">col-4</View>
          </KCol>
          <KCol span={4} className="dark">
            <View className="gutter-box">col-4</View>
          </KCol>
          <KCol span={4} className="light">
            <View className="gutter-box">col-4</View>
          </KCol>
        </KRow>
        <h4>end</h4>
        <KRow justify="end">
          <KCol span={4} className="dark">
            <View className="gutter-box">col-4</View>
          </KCol>
          <KCol span={4} className="light">
            <View className="gutter-box">col-4</View>
          </KCol>
          <KCol span={4} className="dark">
            <View className="gutter-box">col-4</View>
          </KCol>
          <KCol span={4} className="light">
            <View className="gutter-box">col-4</View>
          </KCol>
        </KRow>
        <h4>Space Around</h4>
        <KRow justify="space-around">
          <KCol span={4} className="dark">
            <View className="gutter-box">col-4</View>
          </KCol>
          <KCol span={4} className="light">
            <View className="gutter-box">col-4</View>
          </KCol>
          <KCol span={4} className="dark">
            <View className="gutter-box">col-4</View>
          </KCol>
          <KCol span={4} className="light">
            <View className="gutter-box">col-4</View>
          </KCol>
        </KRow>
        <h4>Space Between</h4>
        <KRow justify="space-between">
          <KCol span={4} className="dark">
            <View className="gutter-box">col-4</View>
          </KCol>
          <KCol span={4} className="light">
            <View className="gutter-box">col-4</View>
          </KCol>
          <KCol span={4} className="dark">
            <View className="gutter-box">col-4</View>
          </KCol>
          <KCol span={4} className="light">
            <View className="gutter-box">col-4</View>
          </KCol>
        </KRow>
      </View>
    );
  }
}
