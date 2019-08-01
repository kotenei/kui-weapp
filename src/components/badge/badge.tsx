import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import classnames from "classnames";
import KComponent from "../../common/component";
import { BadgeProps } from "./typing";

const prefixCls = "k-badge";

class KBadge extends KComponent<BadgeProps> {
  public static defaultProps = {
    color: "primary",
    dot: false,
    overflowCount: 99,
    notwrap: true
  };
  public renderText() {
    const { dot, overflowCount, text } = this.props;

    if (dot) {
      return <Text className={`${prefixCls}__sup ${prefixCls}__dot`} />;
    }

    if (text !== undefined && text !== null) {
      let content = text;
      if (typeof text === "number") {
        if (overflowCount !== undefined && text > overflowCount) {
          content = overflowCount + "+";
        }
      }
      return (
        <View className={`${prefixCls}__sup ${prefixCls}__text`}>
          {content}
        </View>
      );
    }

    return null;
  }
  public render() {
    const { className, color, notwrap, style } = this.props;
    const classString = classnames(
      {
        [prefixCls]: true,
        [`${prefixCls}--${color}`]: !!color,
        [`${prefixCls}--notwrap`]: notwrap
      },
      className
    );
    return (
      <View className={classString} style={style}>
        {this.props.children}
        {this.renderText()}
      </View>
    );
  }
}

export default KBadge;
