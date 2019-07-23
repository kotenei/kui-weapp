import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import classnames from "classnames";
import { ColProps } from "./typing";
import omit from "object.omit";
import KComponent from "../../common/component";

const prefixCls = "k-col";

export default class KCol extends KComponent<ColProps> {
  public static displayName = "Col";
  public static defaultProps = {
    gutter: 0,
    offset: 0
  };
  public render() {
    const { className, offset, span, gutter, style } = this.props;
    let responsiveClasses = {};
    let props = {
      ...omit(this.props, ["children", "className", "offset", "span", "style"])
    };
    const sizes = ["xs", "sm", "md", "lg", "xl", "xxl"];

    sizes.forEach((size: string) => {
      let sizeSpan;
      if (typeof this.props[size] === "number") {
        sizeSpan = this.props[size];
      }
      props = omit(props, [size, "children"]);
      responsiveClasses = {
        ...responsiveClasses,
        [`${prefixCls}-${size}-${sizeSpan}`]: sizeSpan !== undefined
      };
    });
    const classes = classnames(
      {
        [`${prefixCls}`]: true,
        [`${prefixCls}-${span}`]: span !== undefined,
        [`${prefixCls}-offset-${offset}`]: offset !== undefined
      },
      className,
      responsiveClasses
    );

    const _style: any = {};
    if (gutter) {
      _style.paddingLeft = gutter / 2 + "px";
      _style.paddingRight = gutter / 2 + "px";
    }

    return (
      <View className={classes}  style={{ ...style, ..._style }}>
        {this.props.children}
      </View>
    );
  }
}
