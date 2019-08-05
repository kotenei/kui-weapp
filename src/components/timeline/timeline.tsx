import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import KComponent from "../../common/component";

const prefixCls = "k-timeline";

class KTimeline extends KComponent<any> {
  public render() {
    const { className, style } = this.props;
    return (
      <View className={`${prefixCls} ${className}`} style={style}>
        {this.props.children}
      </View>
    );
  }
}

export default KTimeline;
