import Taro  from "@tarojs/taro";
import { View } from "@tarojs/components";
import { iconList } from "../../../components/icon/icon-list";
import { KIcon } from "kui-weapp";
import KComponent from "../../../common/component";

export default class Demo extends KComponent {
  renderIcons() {
    return iconList.map(key => {
      return (
        <View className="icon-item" key={key}>
          <KIcon className="icon" type={key} />
          <View className="icon-text">{key}</View>
        </View>
      );
    });
  }
  render() {
    return <View className={"icon-list"}>{this.renderIcons()}</View>;
  }
}
