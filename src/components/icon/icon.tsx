import Taro from "@tarojs/taro";
import { Text } from "@tarojs/components";
import classnames from "classnames";
import KComponent from "../../common/component";
import { IconProps } from "./typing";

export default class KIcon extends KComponent<IconProps> {
  public static displayName = "Icon";
  public static defaultProps = {
    prefixCls: "k-icon",
    spin: false
  };
  public render() {
    const {
      className,
      color,
      type,
      style,
      fontSize,
      spin,
      onClick
    } = this.props;

    const prefixCls = this.props.prefixCls || "k-icon";

    const classString = classnames(
      {
        [prefixCls]: true,
        [`${prefixCls}-${type}`]: !!type,
        [`${prefixCls}--${color}`]: !!color,
        [`${prefixCls}--spin`]: !!spin || type === "loading"
      },
      className
    );

    const _style = {
      fontSize: `${fontSize}px`,
      ...style
    };
    return <Text className={classString} style={_style} onClick={onClick} />;
  }
}
