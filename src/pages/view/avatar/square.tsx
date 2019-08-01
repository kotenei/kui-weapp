import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { KAvatar, KIcon } from "kui-weapp";

export default class Demo extends Component {
  render() {
    return (
      <View>
        <KAvatar renderIcon={<KIcon type="calendar" />} square/>
        <KAvatar square color="danger" iconType="folder" />
        <KAvatar color="primary" square>LS</KAvatar>
        <KAvatar src="https://avatars2.githubusercontent.com/u/3725164?s=460&v=4" square/>
      </View>
    );
  }
}
