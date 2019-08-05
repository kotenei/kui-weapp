import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import classnames from "classnames";
import KComponent from "../../common/component";
import { TimelineItemProps } from "./typing";

const prefixCls = "k-timeline-item";

class KTimeline extends KComponent<TimelineItemProps> {
  public static defaultProps = {
    color: "primary",
    last: false
  };
  public render() {
    const { className, dot, color, style, last } = this.props;
    const classString = classnames(
      {
        [`${prefixCls}`]: true
      },
      className
    );
    const headClassString = classnames({
      [`${prefixCls}__head`]: true,
      [`${prefixCls}__head--${color}`]: !!color,
      [`${prefixCls}__head--dot`]: !!dot
    });

    return (
      <View className={classString} style={style}>
        <View
          className={classnames({
            [`${prefixCls}__tail`]: true,
            [`${prefixCls}__tail--last`]: last
          })}
        />
        <View className={headClassString}>{this.props.renderDot}</View>
        <View className={`${prefixCls}__content`}>{this.props.children}</View>
      </View>
    );
  }
}

export default KTimeline;
