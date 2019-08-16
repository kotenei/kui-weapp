import Taro from "react";
import { View } from "@tarojs/components";
import classnames from "classnames";
import KComponent from "../../common/component";
import { MaskProps } from "./typing";
import KTransition from "../transition/transition";

const prefixCls = "k-mask";

class KMask extends KComponent<MaskProps> {
  public static defaultProps = {
    show: false,
    zIndex: 800
  };

  constructor(props) {
    super(props);
  }

  public render() {
    const { className, style, show, zIndex, onClick } = this.props;
    const _style = { zIndex, ...style };
    return (
      <KTransition
        className={classnames(
          {
            [prefixCls]: true
          },
          className
        )}
        action={show}
        transitionName="fade"
        style={_style}
        onClick={onClick}
      />
    );
  }
}

export default KMask;
