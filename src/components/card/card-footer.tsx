import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import classnames from "classnames";
import KComponent from "../../common/component";
import { CardFooterProps } from "./typing";

const prefixCls = "k-card-footer";

class KCardFooter extends KComponent<CardFooterProps> {
  public render() {
    const { className, extra } = this.props;
    const classString = classnames(
      {
        [prefixCls]: true
      },
      className
    );
    return (
      <View className={classString}>
        <View className={`${prefixCls}__content`}>{this.props.children}</View>
        <View className={`${prefixCls}__extra`}>{extra}</View>
      </View>
    );
  }
}

export default KCardFooter;
