import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import classnames from "classnames";
import KComponent from "../../common/component";
import { ActionSheetProps, ActionSheetState, Action } from "./typing";
import KActionSheetItem from "./action-sheet-item";
import KDrawer from "../drawer/drawer";

const prefixCls = "k-actionsheet";

class KActionSheet extends KComponent<ActionSheetProps, ActionSheetState> {
  public static defaultProps = {
    actions: [],
    show: false,
    showCancel: false,
    cancelText: "取消",
    maskClose: true
  };

  public renderItems() {
    const { actions } = this.props;
    let items = [];
    if (actions && actions.length > 0) {
      actions.map((item: Action, index: number) => {
        return (
          <KActionSheetItem
            key={index}
            index={index}
            prefixCls={prefixCls}
            text={item.text}
            loading={item.loading}
            disabled={item.disabled}
            onClick={this.onSelect}
          />
        );
      });
    }
    return items;
  }

  public render() {
    const {
      cancelText,
      className,
      style,
      show,
      showCancel,
      title
    } = this.props;
    const classString = classnames(
      {
        [prefixCls]: true
      },
      className
    );
    return (
      <KDrawer position="bottom" open={show}>
        <View className={classString} style={style}>
          {title && <View className={`${prefixCls}__header`}>{title}</View>}
          <View className={`${prefixCls}__content`}>
            {this.renderItems()}
            {this.props.children}
          </View>
          {showCancel && (
            <View className={`${prefixCls}__cancel`}>
              <View className={`${prefixCls}__item`} onClick={this.onCancel}>
                {cancelText}
              </View>
            </View>
          )}
        </View>
      </KDrawer>
    );
  }

  private onCancel = () => {};

  private onSelect = () => {};
}

export default KActionSheet;
