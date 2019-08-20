import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import classnames from "classnames";
import KComponent from "../../common/component";
import { ActionSheetItemProps } from "./typing";
import KIcon from '../icon/icon';
import KLoading from '../loading/loading';

class KActionSheetItem extends KComponent<ActionSheetItemProps> {
  public render() {
    const { prefixCls, disabled, loading, text } = this.props;
    return (
      <View
        className={classnames({
          [`${prefixCls}__item`]: true,
          [`${prefixCls}__item--disabled`]: !!disabled
        })}
        onClick={this.onClick}
      >
        {text && !loading && (
          <View className={`${prefixCls}__text`}>{text}</View>
        )}
        {loading && <KLoading className={`${prefixCls}__loading`}/>}
      </View>
    );
  }

  private onClick = () => {
    const { index, onClick, disabled } = this.props;
    if (disabled) {
      return;
    }
    if (onClick) {
      onClick(index);
    }
  };
}

export default KActionSheetItem;
