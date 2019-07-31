import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import classnames from "classnames";
import KComponent from "../../common/component";
import { CellGroupProps } from "./typing";

const prefixCls = "k-cell-group";

class KCellGroup extends KComponent<CellGroupProps> {
  public static defaultProps = {
    border: false
  };

  public render() {
    const { border, className } = this.props;
    const classString = classnames(
      {
        [prefixCls]: true,
        [`${prefixCls}--border`]: !!border
      },
      className
    );
    return <View className={classString}>{this.props.children}</View>;
  }
}

export default KCellGroup;
