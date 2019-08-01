import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import classnames from "classnames";
import KComponent from "../../common/component";
import { TabBarProps, TabBarState } from "./typing";

const prefixCls = "k-tabbar";

class KTabBar extends KComponent<TabBarProps, TabBarState> {
  public static defaultProps = {
    activeColor: "#2196f3"
  };
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: []
    };
  }
  //   public renderContent() {
  //     const { activeColor } = this.props;
  //     // return React.Children.map(children, (child: any, index) => {
  //     //   if (child && child.type && child.type.displayName === "TabBarItem") {
  //     //     const { selected, style, id } = child.props;
  //     //     const _style = { ...style, color: selected && activeColor };
  //     //     return React.cloneElement(child, {
  //     //       ...child.props,
  //     //       id: id || index,
  //     //       style: _style
  //     //     });
  //     //   }
  //     //   return null;
  //     // });
  //     return this.props.children;
  //   }
  public render() {
    const { className, style } = this.props;
    const classString = classnames(
      {
        [prefixCls]: true
      },
      className
    );
    return (
      <View className={classString} style={style}>
        {/* {this.renderContent()} */}
        {this.props.children}
      </View>
    );
  }
}

export default KTabBar;
