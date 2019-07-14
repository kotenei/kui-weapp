import Taro, { PureComponent } from "@tarojs/taro";
import { View ,Text} from "@tarojs/components";
import classnames from "classnames";
import { NavBarProps } from "./typing";
import "./style.scss";

const prefixCls = "k-navbar";

class NavBar extends PureComponent<NavBarProps> {
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
        <View className={`${prefixCls}__left`} onClick={this.handleLeftClick}>
          <Text className={`${prefixCls}__icon`}>{icon}</Text>
          {leftContent}
        </View>
        <View className={`${prefixCls}__middle`}>{children}</View>
        <View className={`${prefixCls}__right`} onClick={this.handleRightClick}>
          {rightContent}
        </View>
      </View>
    );
  }
  private handleLeftClick = () => {
    const { onLeftClick } = this.props;
    if (onLeftClick) {
      onLeftClick();
    }
  };
  private handleRightClick = () => {
    const { onRightClick } = this.props;
    if (onRightClick) {
      onRightClick();
    }
  };
}

export default NavBar;
