import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import classnames from "classnames";
import KComponent from "../../common/component";
import { CellProps } from "./typing";
import KIcon from "../icon/icon";

const prefixCls = "k-cell";

class KCell extends KComponent<CellProps> {
  public static displayName = "Cell";
  public static defaultProps = {
    border: true,
    disabled: false,
    showArrow: false,
    arrowDirection: "right"
  };

  public renderCellLeft() {
    const { left } = this.props;
    return left && <View className={`${prefixCls}-left`}>{left}</View>;
  }

  public renderCellRight() {
    const { right } = this.props;
    return right && <View className={`${prefixCls}-right`}>{right}</View>;
  }

  public renderCellMiddle() {
    const { title, label, value, showArrow, arrowDirection } = this.props;
    return (
      <View
        className={classnames({
          [`${prefixCls}-middle`]: true
        })}
        onClick={this.handleClick}
      >
        {title || label ? (
          <View className={`${prefixCls}-middle__text`}>
            <View className={`${prefixCls}-middle__title`}>{title}</View>
            {label && (
              <View className={`${prefixCls}-middle__label`}>{label}</View>
            )}
          </View>
        ) : null}

        <View className={`${prefixCls}-middle__value`}>
          {value}
          {this.props.renderValue}
          {showArrow ? <KIcon type={arrowDirection || "right"} /> : null}
        </View>
      </View>
    );
  }

  public render() {
    const { className, border, large, disabled } = this.props;
    const classString = classnames(
      {
        [prefixCls]: true,
        [`${prefixCls}--lg`]: !!large,
        [`${prefixCls}--border`]: !!border,
        [`${prefixCls}--borderless`]: !border,
        [`${prefixCls}--disabled`]: !!disabled
      },
      className
    );
    return (
      <View className={classString}>
        {this.renderCellLeft()}

        <View className={`${prefixCls}__link`} onClick={this.onClickMiddle}>
          {this.renderCellMiddle()}
        </View>

        {this.renderCellRight()}
      </View>
    );
  }

  private onClickMiddle = e => {
    const { to, url } = this.props;
    if (to) {
      Taro.navigateTo({
        url: to
      });
    } else if (url) {
      Taro.redirectTo({
        url
      });
    }
  };

  private handleClick = e => {
    const { onClick, disabled } = this.props;
    if (disabled) {
      return;
    }
    if (onClick) {
      onClick();
    }
  };
}

export default KCell;
