import Taro from "react";
import { View } from "@tarojs/components";
import classnames from "classnames";
import KComponent from "../../common/component";
import { DrawerProps, DrawerState } from "./typing";
import KMask from "../mask/mask";

const prefixCls = "k-drawer";

class KDrawer extends KComponent<DrawerProps, DrawerState> {
  public static defaultProps = {
    mask: true,
    maskClose: true,
    open: false,
    position: "left"
  };

  constructor(props) {
    super(props);
    this.state = {
      open: props.open
    };
  }

  public componentWillReceiveProps(nextProps, nextState) {
    if (nextProps.open !== this.state.open) {
      this.setState({
        open: nextProps.open
      });
    }
  }

  public render() {
    const { className, position, style, onMaskClick, mask } = this.props;
    const { open } = this.state;
    const classString = classnames(
      {
        [prefixCls]: true,
        [`${prefixCls}--${position}`]: true
      },
      className
    );

    return (
      <View>
        <View className={classString} style={style}>
          {this.props.children}
        </View>
        {mask && <KMask show={open} onClick={onMaskClick} />}
      </View>
    );
  }
}

export default KDrawer;
