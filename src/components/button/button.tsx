import Taro, { PureComponent } from "@tarojs/taro";
import { Button } from "@tarojs/components";
import classnames from "classnames";
import { ButtonProps } from "./typing";

const prefixCls = "k-button";

class KButton extends PureComponent<ButtonProps> {
  static defaultProps = {
    disabled: false
  };

  public componentDidMount() {}

  public render() {
    const { disabled, color, className } = this.props;
    const classString = classnames(
      {
        [prefixCls]: true,
        [`${prefixCls}--${color}`]: !!color
        // [`${prefixCls}--${size}`]: !!size,
        // [`${prefixCls}--active`]: !!active,
        // [`${prefixCls}--disabled`]: !!disabled,
        // [`${prefixCls}--full`]: !!full
      },
      className
    );

    return (
      <Button className={classString} disabled={disabled}>
        {this.props.children}
      </Button>
    );
  }
}

export default KButton;
