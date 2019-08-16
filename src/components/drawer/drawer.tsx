import Taro from "react";
import { View } from "@tarojs/components";
import classnames from "classnames";
import KComponent from "../../common/component";
import { DrawerProps, DrawerState } from "./typing";
import KMask from "../mask/mask";
import KTransition from "../transition/transition";

const prefixCls = "k-drawer";

class KDrawer extends KComponent<DrawerProps, DrawerState> {
  public static defaultProps = {
    mask: true,
    maskClose: true,
    open: false,
    position: "left",
    delay: 0
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  public render() {
    const { className, position, style, onMaskClick, mask, open } = this.props;
    const classString = classnames(
      {
        [prefixCls]: true,
        [`${prefixCls}__${position}`]: true
      },
      className
    );

    return (
      <View>
        <KTransition
          action={open}
          transitionName={`${prefixCls}__${position}`}
          className={classString}
          style={style}
        >
          {this.props.children}
        </KTransition>
        {mask && <KMask show={open} onClick={onMaskClick} />}
      </View>
    );
  }
}

export default KDrawer;
