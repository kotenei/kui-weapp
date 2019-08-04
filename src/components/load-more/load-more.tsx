import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import classnames from "classnames";
import KComponent from "../../common/component";
import { LoadMoreProps } from "./typing";
import KLoading from "../loading/loading";

const prefixCls = "k-loadmore";

export default class KLoadMore extends KComponent<LoadMoreProps> {
  public static defaultProps = {
    loading: true
  };
  public render() {
    const { className, full, tip, loading, style } = this.props;
    const classString = classnames(
      {
        [prefixCls]: true,
        [`${prefixCls}--line`]: !loading,
        [`${prefixCls}--dot`]: !loading && !tip,
        [`${prefixCls}--full`]: !!full
      },
      className
    );
    return (
      <View className={classString} style={style}>
        {loading ? <KLoading size="sm" /> : null}
        <View className={`${prefixCls}__tip`}>
          {tip}
          {this.props.renderTip}
        </View>
      </View>
    );
  }
}
