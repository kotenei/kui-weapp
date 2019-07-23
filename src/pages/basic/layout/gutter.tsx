import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { KRow, KCol } from "kui-weapp";
import KComponent from "../../../common/component";

export default class Demo extends KComponent {
  render() {
    return (
      <View>
        <KRow gutter={16}>
          <KCol span={6} gutter={16} className="dark">
            <View className="gutter-box">col-6</View>
          </KCol>
          <KCol span={6} gutter={16}  className="light">
            <View className="gutter-box">col-6</View>
          </KCol>
          <KCol span={6} gutter={16}  className="dark">
            <View className="gutter-box">col-6</View>
          </KCol>
          <KCol span={6} gutter={16}  className="light">
            <View className="gutter-box">col-6</View>
          </KCol>
        </KRow>
      </View>
    );
  }
}
