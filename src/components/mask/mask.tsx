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
    this.state = {
      closing: false,
      closed: false
    };
  }

  public componentWillReceiveProps(nextProps, nextState) {
    if (this.props.show !== nextProps.show) {
      this.toggle(nextProps.show);
    }
  }

  public render() {
    const { className, style, show, zIndex, timeout } = this.props;
    const _style = { zIndex, ...style };
    return (
      show && (
        <View
          className={classnames(
            {
              [prefixCls]: true
            },
            className
          )}
          style={_style}
        />
      )
    );
  }

  private toggle = (show = this.props) => {
    const { timeout } = this.props;
    if (show) {
    } else {
    }
  };
}

export default KMask;
