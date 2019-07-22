import Taro from "@tarojs/taro";
import classnames from "classnames";
import { View } from "@tarojs/components";
import { RowProps } from "./typing";
import KComponent from "../../common/component";
import LayoutContext from "./context";

const prefixCls = "k-row";

export default class KRow extends KComponent<RowProps> {
  public static defaultProps = {
    align: "top",
    gutter: 8,
    justify: "start"
  };

  public componentDidMount() {}

  public render() {
    const { align, gutter, justify, className, style } = this.props;
    const gutterStyle = gutter
      ? {
          marginLeft: -gutter / 2,
          marginRight: -gutter / 2
        }
      : null;
    const _style = { ...gutterStyle, ...style };
    const classes = classnames(prefixCls, className, {
      [`${prefixCls}--${justify}`]: !!justify,
      [`${prefixCls}--${align}`]: !!align
    });

    // const cols = Taro.Children.map(this.props.children, (child: any) => {
    //   if (child && child.type && child.type.displayName === "Col") {
    //     if (child.props && gutter !== undefined && gutter > 0) {
    //       return Taro.cloneElement(child, {
    //         style: {
    //           paddingLeft: gutter / 2,
    //           paddingRight: gutter / 2,
    //           ...child.props.style
    //         }
    //       });
    //     }
    //     return child;
    //   }
    //   return null;
    // });

    return (
      <LayoutContext.Provider value={gutter || 0}>
        <View className={classes} style={_style}>
          {this.props.children}
        </View>
      </LayoutContext.Provider>
    );
  }
}
