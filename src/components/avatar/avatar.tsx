import Taro from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import classnames from "classnames";
import KComponent from "../../common/component";
import KIcon from "../icon/icon";
import { AvatarProps } from "./typing";

const prefixCls = "k-avatar";

class KAvatar extends KComponent<AvatarProps> {
  public static defaultProps = {
    size: "md",
    square: false
  };
  public render() {
    const { color, iconType, square, size, src, style } = this.props;
    const classString = classnames({
      [prefixCls]: true,
      [`${prefixCls}--${color}`]: !!color,
      [`${prefixCls}--${size}`]: !!size,
      [`${prefixCls}--square`]: !!square
    });
    return (
      <View className={classString} style={style}>
        {src ? <Image src={src} mode="aspectFit" /> : this.props.children}
        {iconType ? <KIcon type={iconType} /> : this.props.renderIcon}
      </View>
    );
  }
}

export default KAvatar;
