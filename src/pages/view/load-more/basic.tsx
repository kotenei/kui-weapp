import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { KLoadMore } from "kui-weapp";

export default class Demo extends Component {
  render() {
    return (
      <View>
        <KLoadMore tip="正在加载" />
        <KLoadMore tip="暂无数据" loading={false} />
        <KLoadMore loading={false} />
      </View>
    );
  }
}
