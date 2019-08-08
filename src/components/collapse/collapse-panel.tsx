import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import classnames from "classnames";
import KComponent from "../../common/component";
import { CollapsePanelProps, CollapsePanelState } from "./typing";
import KCell from "../cell/cell";
import KIcon from "../icon/icon";
import { querySelector } from "../../common/utils";

const prefixCls = "k-collapse-panel";

class KCollapsePanel extends KComponent<
  CollapsePanelProps,
  CollapsePanelState
> {
  public static defaultProps = {
    disabled: false,
    border: true,
    open: false,
    last: false
  };

  public constructor(props) {
    super(props);
    this.state = {
      height: 0
    };
  }

  private _isCompleted: boolean = false;
  private _orgHeight: number = 0;

  public componentWillMount() {
    this.toggle();
  }

  public componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.props.open) {
      this.toggle();
    }
  }

  public renderBody() {
    const { height } = this.state;
    const style = {
      height: this._isCompleted ? height + "px" : ""
    };
    return (
      <View
        className={classnames({
          [`${prefixCls}__body`]: true
        })}
        style={style}
      >
        <View className={`${prefixCls}__inner`}>{this.props.children}</View>
      </View>
    );
  }

  public render() {
    const { header, disabled, iconType, border, open, last } = this.props;
    const classString = classnames({
      [prefixCls]: true,
      [`${prefixCls}--border`]: !!border,
      [`${prefixCls}--last`]:  !!last
    });
    let icon = iconType && <KIcon type={iconType} />;
    return (
      <View className={classString}>
        <KCell
          className={classnames({
            [`${prefixCls}__header`]: true,
            [`${prefixCls}__header--disabled`]: disabled
          })}
          onClick={this.onClick}
          title={header}
          showArrow={!iconType}
          renderValue={icon}
          arrowDirection={open ? "down" : "right"}
        />

        {this.renderBody()}
      </View>
    );
  }

  private onClick = () => {
    const { onClick, code, disabled } = this.props;
    if (disabled) {
      return;
    }
    if (onClick) {
      onClick(code);
    }
  };

  private toggle() {
    querySelector(this.$scope, `.${prefixCls}__body`, 0).then(rect => {
      const { open } = this.props;
      const height = parseInt(rect[0].height);
      if (!this._orgHeight) {
        this._orgHeight = height;
        this._isCompleted = true;
      }
      this.setState({
        height: open ? this._orgHeight : 0
      });
    });
  }
}

export default KCollapsePanel;
