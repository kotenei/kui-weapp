import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import classnames from "classnames";
import KComponent from "../../common/component";
import { ProgressProps } from "./typing";
import KIcon from "../icon/icon";

interface ProgressLineProps extends ProgressProps {
  prefixCls: string;
}

class KProgressLine extends KComponent<ProgressLineProps> {
  public renderText() {
    const {
      prefixCls,
      textInside,
      showText,
      indeterminate,
      percent
    } = this.props;
    if (textInside || !showText || indeterminate) {
      return null;
    }

    return <View className={`${prefixCls}__text`}>{`${percent}%`}</View>;
  }
  public renderInner() {
    const {
      prefixCls,
      textInside,
      percent,
      indeterminate,
      showText,
      nativeColor
    } = this.props;
    if (indeterminate) {
      return null;
    }
    const innerText = textInside && showText && (
      <Text className={`${prefixCls}__innerText`}>{percent}%</Text>
    );
    return (
      <View
        className={classnames({
          [`${prefixCls}__inner`]: true
        })}
        style={{ width: `${percent}%`, background: nativeColor }}
      >
        {innerText}
      </View>
    );
  }
  public renderIndeterminate() {
    const { indeterminate, prefixCls, nativeColor } = this.props;
    if (!indeterminate) {
      return;
    }
    const firstClass = classnames({
      [`${prefixCls}__inner`]: true,
      [`${prefixCls}__inner--indeterminate1`]: true
    });
    const secondClass = classnames({
      [`${prefixCls}__inner`]: true,
      [`${prefixCls}__inner--indeterminate2`]: true
    });
    return (
      <View>
        <View className={firstClass} style={{ background: nativeColor }} />
        <View className={secondClass} style={{ background: nativeColor }} />
      </View>
    );
  }
  public render() {
    const { prefixCls, strokeWidth, showText, indeterminate } = this.props;
    const classString = classnames({
      [`${prefixCls}__bar`]: true,
      [`${prefixCls}__bar--hideText`]: !showText || indeterminate
    });
    return (
      <View>
        <View className={classString}>
          <View
            className={`${prefixCls}__outer`}
            style={{ height: strokeWidth + "px" }}
          >
            {this.renderInner()}
            {this.renderIndeterminate()}
          </View>
        </View>
        {this.renderText()}
      </View>
    );
  }
}

export default KProgressLine;
