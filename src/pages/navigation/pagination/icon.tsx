import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { KPagination, KIcon } from "kui-weapp";

export default class Demo extends Component {
  render() {
    return (
      <KPagination
        total={5}
        locale={{}}
        renderPrev={
          <View>
            <KIcon type="left" />
            上一步
          </View>
        }
        renderNext={
          <View>
            下一步
            <KIcon type="right" />
          </View>
        }
      />
    );
  }
}
