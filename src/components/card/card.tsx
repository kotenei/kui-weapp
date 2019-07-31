import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import classnames from "classnames";
import KComponent from "../../common/component";
import { CardProps } from "./typing";

const prefixCls = "k-card";

class KCard extends KComponent<CardProps> {
  public render() {
    const { full, className } = this.props;
    const classString = classnames(
      {
        [prefixCls]: true,
        [`${prefixCls}--full`]: !!full
      },
      className
    );
    return <View className={classString}>{this.props.children}</View>;
  }
}

export default KCard;
