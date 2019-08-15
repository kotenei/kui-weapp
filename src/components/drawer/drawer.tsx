import Taro from "react";
import { View } from "@tarojs/components";
import classnames from "classnames";
import KComponent from "../../common/component";
import { DrawerProps, DrawerState } from "./typing";
import KMask from "../mask/mask";

const prefixCls = "k-drawer";
const DELAY = 300;

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
      enter: false,
      enterActive: false
    };
  }

  public componentWillReceiveProps(nextProps, nextState) {
    if (nextProps.open !== this.props.open) {
      this.toggle(nextProps.open);
    }
  }

  public render() {
    const { className, position, style, onMaskClick, mask, open } = this.props;
    const { enter, enterActive } = this.state;
    const classString = classnames(
      {
        [prefixCls]: true,
        [`${prefixCls}__${position}`]: true,
        [`${prefixCls}__${position}--enter`]: enter,
        [`${prefixCls}__${position}--enterActive`]: enterActive
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

  private toggle(open = this.props.open) {
    if (open) {
      // this.setState(
      //   {
      //     enter: true
      //   },
      //   () => {
      //     setTimeout(() => {
      //       this.setState({
      //         enterActive: true
      //       });
      //     }, DELAY);
      //   }
      // );
      setTimeout(() => {
        this.setState({
          enter: true
        });
      }, DELAY);
    } else {
      this.setState({
        enter: false
      });
      // this.setState(
      //   {
      //     enterActive: false
      //   },
      //   () => {
      //     setTimeout(() => {
      //       this.setState({
      //         enter: true
      //       });
      //     }, DELAY);
      //   }
      // );
    }
  }
}

export default KDrawer;
