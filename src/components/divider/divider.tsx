import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import classnames from "classnames";
import KComponent from "../../common/component";
import { DividerProps } from "./typing";

const prefixCls = "k-divider";

class KDivider extends KComponent<DividerProps> {
  public render() {
    const { className, color, vertical, style } = this.props;
    const classString = classnames(
      {
        [prefixCls]: true,
        [`${prefixCls}--${color}`]: !!color,
        [`${prefixCls}--vertical`]: !!vertical
      },
      className
    );

    return <View className={`${classString}`} style={style} />;
  }
}

export default KDivider;
