import Taro from "@tarojs/taro";
import { Button } from "@tarojs/components";
import classnames from "classnames";
import { ButtonProps } from "./typing";
import KComponent from "../../common/component";
import KIcon from "../icon/icon";

const prefixCls = "k-button";

class KButton extends KComponent<ButtonProps> {
  static defaultProps = {
    disabled: false
  };

  public render() {
    const {
      color,
      size,
      active,
      disabled,
      full,
      className,
      icon,
      style
    } = this.props;
    const classString = classnames(
      {
        [prefixCls]: true,
        [`${prefixCls}--${color}`]: !!color,
        [`${prefixCls}--${size}`]: !!size,
        [`${prefixCls}--active`]: !!active,
        [`${prefixCls}--disabled`]: !!disabled,
        [`${prefixCls}--full`]: !!full
      },
      className
    );

    return (
      <Button className={classString} disabled={disabled} style={style} onClick={this.props.onClick}>
        {icon ? <KIcon type={icon}  /> : null}
        {this.props.children}
      </Button>
    );
  }
}

export default KButton;
