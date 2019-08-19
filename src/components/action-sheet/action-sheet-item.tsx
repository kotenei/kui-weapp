import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import classnames from "classnames";
import KComponent from "../../common/component";
import { ActionSheetItemProps } from "./typing";
import KIcon from '../icon/icon';

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
        {loading && <KIcon className={`${prefixCls}__loading`} type="loading" />}
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
