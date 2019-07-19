import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import classnames from "classnames";
import KComponent from "../../common/component";
import { NavBarProps } from "./typing";

const prefixCls = "k-navbar";

class NavBar extends KComponent<NavBarProps> {
  public static defaultProps = {
    mode: "light"
  };
  public render() {
    const {
      children,
      className,
      style,
      mode,
      leftContent,
      rightContent,
      icon
    } = this.props;
    const classString = classnames(
      {
        [prefixCls]: true,
        [`${prefixCls}--${mode}`]: !!mode
      },
      className
    );
    return (
      <View className={classString} style={style}>
        <View className={`${prefixCls}__left`} onClick={this.onLeftClick}>
          <Text className={`${prefixCls}__icon`}>{icon}</Text>
          {leftContent}
        </View>
        <View className={`${prefixCls}__middle`}>{children}</View>
        <View className={`${prefixCls}__right`} onClick={this.onRightClick}>
          {rightContent}
        </View>
      </View>
    );
  }
  private onLeftClick = () => {
    const { onLeftClick } = this.props;
    if (onLeftClick) {
      onLeftClick();
    }
  };
  private onRightClick = () => {
    const { onRightClick } = this.props;
    if (onRightClick) {
      onRightClick();
    }
  };
}

export default NavBar;
