import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import classnames from "classnames";
import KComponent from "../../common/component";
import KIcon from "../icon/icon";
import KBadge from "../badge/badge";
import { TabBarItemProps } from "./typing";
import "./host.scss";

const prefixCls = "k-tabbar-item";

class KTabBarItem extends KComponent<TabBarItemProps> {
  public static displayName = "TabBarItem";
  public render() {
    const {
      className,
      iconType,
      style,
      dot,
      badge,
      title,
      selected
    } = this.props;
    const classString = classnames(
      {
        [prefixCls]: true,
        [`${prefixCls}--active`]: !!selected
      },
      className
    );

    return (
      <View className={classString} style={style} onClick={this.onItemClick}>
        <View className={`${prefixCls}__icon`}>
          <KBadge dot={dot} text={badge} color="danger" notwrap={false}>
            {iconType ? <KIcon type={iconType} /> : null}
          </KBadge>
        </View>
        <View className={`${prefixCls}__text`}>{title}</View>
      </View>
    );
  }
  private onItemClick = () => {
    const { onChange, code } = this.props;
    if (onChange) {
      onChange(code);
    }
  };
}

export default KTabBarItem;
