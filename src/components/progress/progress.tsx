import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import classnames from "classnames";
import KComponent from "../../common/component";
import KProgressLine from "./progress-line";
import { ProgressProps } from "./typing";

const prefixCls = "k-progress";

class KProgress extends KComponent<ProgressProps> {
  public static defaultProps = {
    percent: 0,
    type: "line",
    strokeWidth: 6,
    textInside: false,
    showText: true,
    width: 100,
    indeterminate: false
  };
  public renderContainer() {
    // const { type } = this.props;
    // switch (type) {
    //   case "line":
    //     return <KProgressLine prefixCls={prefixCls} {...this.props} />;
    //   case "circle":
    //     return <ProgressCircle prefixCls={prefixCls} {...this.props} />;
    //   default:
    //     return null;
    // }
    const {
      color,
      type,
      percent,
      status,
      strokeWidth,
      textInside,
      showText,
      width,
      indeterminate,
      text,
      nativeColor
    } = this.props;
    
    return (
      <KProgressLine
        prefixCls={prefixCls}
        color={color}
        type={type}
        percent={percent}
        status={status}
        strokeWidth={strokeWidth}
        textInside={textInside}
        showText={showText}
        width={width}
        indeterminate={indeterminate}
        text={text}
        nativeColor={nativeColor}
      />
    );
  }
  public render() {
    const { type, textInside, className, color } = this.props;
    const classString = classnames(
      {
        [prefixCls]: true,
        [`${prefixCls}--textInside`]: textInside,
        [`${prefixCls}--${type}`]: type !== undefined,
        [`${prefixCls}--${color}`]: !!color
      },
      className
    );

    return <View className={classString}>{this.renderContainer()}</View>;
  }
}

export default KProgress;
