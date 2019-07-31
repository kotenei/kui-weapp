import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import classnames from "classnames";
import KComponent from "../../common/component";
import { CardBodyProps } from "./typing";

const prefixCls = "k-card-body";

class KCardBody extends KComponent<CardBodyProps> {
  public render() {
    const { className } = this.props;
    const classString = classnames(
      {
        [prefixCls]: true
      },
      className
    );
    return <View className={classString}>{this.props.children}</View>;
  }
}

export default KCardBody;
