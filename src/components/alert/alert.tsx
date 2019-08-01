import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import classnames from "classnames";
import KIcon from "../icon/icon";
import KComponent from "../../common/component";
import { AlertState, AlertProps } from "./typing";

const prefixCls = "k-alert";

class KAlert extends KComponent<AlertProps, AlertState> {
  public static defaultProps = {
    showIcon: true,
    closable: true
  };

  public state = {
    closed: false,
    closing: false
  };

  private renderIcon() {
    const { showIcon, state, description } = this.props;
    let iconType;
    switch (state) {
      case "info":
        iconType = "info-circle-fill";
        break;
      case "success":
        iconType = "check-circle-fill";
        break;
      case "warning":
        iconType = "warning-circle-fill";
        break;
      case "danger":
        iconType = "close-circle-fill";
        break;
    }

    if (showIcon && iconType) {
      return (
        <KIcon
          type={iconType}
          className={classnames({
            [`${prefixCls}__icon`]: true,
            [`${prefixCls}__icon--lg`]: !!description
          })}
        />
      );
    }

    return <View />;
  }

  public render() {
    const {
      title,
      description,
      closable,
      closeText,
      state,
      className,
      style
    } = this.props;
    const { closing, closed } = this.state;

    const classString = classnames(
      {
        [prefixCls]: true,
        [`${prefixCls}--${state}`]: !!state,
        [`${prefixCls}--active`]: !closing
      },
      className
    );

    return (
      !closed && (
        <View className={classString} style={style}>
          {this.renderIcon()}
          <View className={`${prefixCls}__content`}>
            <View className={`${prefixCls}__title`}>{title}</View>
            {description ? (
              <View className={`${prefixCls}__description`}>{description}</View>
            ) : null}
            {closable && !closeText ? (
              <KIcon
                type="close"
                className={`${prefixCls}__close`}
                onClick={this.onClose}
              />
            ) : null}
            {closeText ? (
              <View
                className={`${prefixCls}__closetext`}
                onClick={this.onClose}
              >
                {closeText}
              </View>
            ) : null}
          </View>
        </View>
      )
    );
  }

  private onClose = () => {
    const { closable, onClose } = this.props;
    if (!closable) {
      return;
    }
    if (typeof onClose === "function" && onClose() !== false) {
      this.setState(
        {
          closing: true
        },
        () => {
          setTimeout(() => {
            this.setState({
              closed: true
            });
          }, 300);
        }
      );
    }
  };
}

export default KAlert;
