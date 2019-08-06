import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import classnames from "classnames";
import KComponent from "../../common/component";
import { CollapseProps, CollapseState } from "./typing";
import KIcon from "../icon/icon";

const prefixCls = "k-collapse";

class KCollapse extends KComponent<CollapseProps, CollapseState> {
  public static defaultProps = {
    defaultActiveIds: []
  };

  //   public static getDerivedStateFromProps(nextProps, nextState) {
  //     if ('activeIds' in nextProps) {
  //       return {
  //         activeIds: nextProps.activeIds,
  //       };
  //     }
  //     return null;
  //   }

  public state = {
    activeIds: this.props.activeIds || this.props.defaultActiveIds
  };
  public render() {
    // const { className } = this.props;
    // const { activeIds } = this.state;
    // const classString = classnames(
    //   {
    //     [prefixCls]: true
    //   },
    //   className
    // );
    console.log(this.parent)
    return (
      <View >
        {/* {React.Children.map(children, (child: any, index) => {
          if (!child || !child.type || child.type.displayName !== 'CollapsePanel') {
            return null;
          }
          return React.cloneElement(child, {
            ...child.props,
            activeIds,
            onClick: this.handleChange,
          });
        })} */}
        {this.props.children}
      </View>
    );
  }
  //   private handleChange = id => {
  //     const { onChange, accordion } = this.props;
  //     const { activeIds } = this.state;
  //     const newActiveIds = accordion ? [] : activeIds ? [...activeIds] : [];

  //     if (!('activeIds' in this.props)) {
  //       const index = activeIds ? activeIds.indexOf(id) : -1;
  //       if (index === -1) {
  //         newActiveIds.push(id);
  //       } else {
  //         newActiveIds.splice(index, 1);
  //       }
  //       this.setState({
  //         activeIds: newActiveIds,
  //       });
  //     }

  //     if (onChange) {
  //       onChange(id);
  //     }
  //   };
}

export default KCollapse;
