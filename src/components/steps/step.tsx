import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import classnames from "classnames";
import KComponent from "../../common/component";
import KIcon from "../icon/icon";
import { StepProps } from "./typing";
import "./host.scss";

class Step extends KComponent<StepProps> {
  public static defaultProps = {
    prefixCls: "k-steps",
    showNumber: true
  };
  public static displayName = "Step";
  public renderIcon() {
    const { iconType, status, index, showNumber } = this.props;
    if (iconType) {
      return <KIcon type={iconType} />;
    }
    if (status === "finish") {
      return <KIcon type="check" />;
    }
    if (status === "error") {
      return <KIcon type="close" />;
    }
    return <View>{showNumber && (index || 0) + 1}</View>;
  }
  public render() {
    const {
      status,
      prefixCls,
      nextError,
      iconType,
      iconInner,
      last
    } = this.props;
    const classString = classnames({
      [`${prefixCls}__step`]: true,
      [`${prefixCls}__step--${status}`]: !!status,
      [`${prefixCls}__step--nextError`]: nextError,
      [`${prefixCls}__step--last`]: !!last
    });
    const classes = classnames({
      [`${prefixCls}__icon`]: true,
      [`${prefixCls}__icon--customize`]: !!iconType && !iconInner
    });

    return (
      <View className={classString}>
        <View className={`${prefixCls}__tail`} />
        <View className={classes}>{this.renderIcon()}</View>
        <View className={`${prefixCls}__content`}>
          <View className={`${prefixCls}__title`}>
            {this.props.renderTitle}
          </View>
          <View className={`${prefixCls}__description`}>
            {this.props.renderDescription}
          </View>
        </View>
      </View>
    );
  }
}

export default Step;
