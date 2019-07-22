import Taro from "@tarojs/taro";
import { Text } from "@tarojs/components";
import classnames from "classnames";
import KComponent from "../../common/component";
import { IconProps } from "./typing";

export default class KIcon extends KComponent<IconProps> {
  public static displayName = "Icon";
  public static defaultProps = {
    prefixCls: "k-icon"
  };
  public render() {
    const {
      className,
      color,
      type,
      style,
      fontSize,
      onClick
    } = this.props;

    const prefixCls = this.props.prefixCls || "k-icon";

    const classString = classnames(
      {
        [prefixCls]: true,
        [`${prefixCls}-${type}`]: !!type,
        [`${prefixCls}-check-circle`]: true,
        [`${prefixCls}--${color}`]: !!color,
      },
      className
    );
    const _style = {
      fontSize,
      ...style
    };
    return <Text className={classString} style={_style} onClick={onClick} />;
  }
}
