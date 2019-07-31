import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import classnames from "classnames";
import KComponent from "../../common/component";
import { CardHeaderProps } from "./typing";

const prefixCls = "k-card-header";

class KCardHeader extends KComponent<CardHeaderProps> {
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
        <View className={`${prefixCls}__title`}>{this.props.children}</View>
        <View className={`${prefixCls}__extra`}>{extra}</View>
      </View>
    );
  }
}

export default KCardHeader;
