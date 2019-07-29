import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import classnames from "classnames";
import KComponent from "../../common/component";
import { LoadingProps } from "./typing";
import KIcon from "../icon/icon";

const prefixCls = "k-loading";

class KLoading extends KComponent<LoadingProps> {
  public static defaultProps = {
    vertical: false
  };
  public render() {
    const { className, color, tip, vertical, size } = this.props;
    const classString = classnames(
      {
        [prefixCls]: true,
        [`${prefixCls}--${color}`]: !!color,
        [`${prefixCls}--${size}`]: !!size,
        [`${prefixCls}--vertical`]: !!vertical
      },
      className
    );
    return (
      <View className={classString}>
        <View className={`${prefixCls}__circle`}>
          <KIcon
            className={`${prefixCls}__icon`}
            type="loading"
            color={color}
          />
        </View>
        <View className={`${prefixCls}__tip`}>{tip}</View>
      </View>
    );
  }
}

export default KLoading;
