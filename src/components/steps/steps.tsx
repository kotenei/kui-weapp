import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import classnames from "classnames";
import KComponent from "../../common/component";
import { StepsProps } from "./typing";

const prefixCls = "k-steps";

class Steps extends KComponent<StepsProps> {
  public static defaultProps = {
    alignCenter: true,
    current: 0,
    direction: "horizontal",
  };
  public render() {
    const { direction, alignCenter, className, size, style } = this.props;
    const classString = classnames(
      {
        [prefixCls]: true,
        [`${prefixCls}--${direction}`]: true,
        [`${prefixCls}--center`]: alignCenter && direction !== "vertical",
        [`${prefixCls}--${size}`]: !!size
      },
      className
    );
    return (
      <View className={classString} style={style}>
        {this.props.children}
      </View>
    );
  }
}

export default Steps;
