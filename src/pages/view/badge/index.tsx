import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import KBlock from "../../components/block/index";
import Basic from "./basic";
import Dot from "./dot";

const prefixCls = "app-badge";

export default class Page extends Component {
  config = {
    navigationBarTitleText: "Badge 徽章"
  };

  render() {
    return (
      <View className={prefixCls}>
        <KBlock title="基础用法">
          <View>
            <Basic />
          </View>

          <View style={{ marginTop: "30px" }}>
            <Dot />
          </View>
        </KBlock>
      </View>
    );
  }
}
