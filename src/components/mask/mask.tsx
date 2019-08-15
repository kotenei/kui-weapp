import Taro from "react";
import { View } from "@tarojs/components";
import classnames from "classnames";
import KComponent from "../../common/component";
import { MaskProps } from "./typing";

const prefixCls = "k-mask";

class KMask extends KComponent<MaskProps> {
  public static defaultProps = {
    show: false,
    zIndex: 800,
    timeout: 300
  };

  constructor(props) {
    super(props);
  }

  public render() {
    const { className, style, show, zIndex } = this.props;
    const _style = { zIndex, ...style };
    return (
      <View
        className={classnames(
          {
            [prefixCls]: true,
            [`${prefixCls}--show`]: show
          },
          className
        )}
        style={_style}
      />
    );
  }
}

export default KMask;
