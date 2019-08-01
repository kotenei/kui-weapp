import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { KNavBar, KIcon } from "kui-weapp";

export default class Demo extends Component {
  render() {
    return (
      <View>
        <KNavBar
          renderIcon={<KIcon type="left" />}
          renderRightContent={<KIcon type="search" />}
          style={{marginBottom:'20px'}}
        >
          标题
        </KNavBar>
        <KNavBar
          mode="dark"
          renderIcon={<KIcon type="left" />}
          renderLeftContent={<View>返回</View>}
          renderRightContent={<KIcon type="search" />}
        >
          标题
        </KNavBar>
      </View>
    );
  }
}
