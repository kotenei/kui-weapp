import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import KComponent from "../../common/component";
import KIcon from "../icon/icon";
import KBadge from "../badge/badge";
import { TabBarItemProps } from "./typing";

const prefixCls = "k-tabbar-item";

class KTabBarItem extends KComponent<TabBarItemProps> {
  public static displayName = "TabBarItem";
  public render() {
    const { iconType, style, dot, badge, title } = this.props;
    return (
      <View className={`${prefixCls}`} style={style} onClick={this.handleClick}>
        <View className={`${prefixCls}__icon`}>
          <KBadge dot={dot} text={badge} color="danger" notwrap={false}>
            {iconType ? <KIcon type={iconType} /> : null}
          </KBadge>
        </View>
        <View className={`${prefixCls}__text`}>{title}</View>
      </View>
    );
  }
  private handleClick = () => {
    const { onChange, id } = this.props;
    if (onChange) {
      onChange(id);
    }
  };
}

export default KTabBarItem;
