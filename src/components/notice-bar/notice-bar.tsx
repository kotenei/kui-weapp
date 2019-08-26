import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import classnames from "classnames";
import KComponent from "../../common/component";
import KIcon from "../icon/icon";
import { NoticeBarProps, NoticeBarState } from "./typing";
import { querySelector } from "../../common/utils";

const prefixCls = "k-noticebar";

class KNoticeBar extends KComponent<NoticeBarProps, NoticeBarState> {
  public static defaultProps = {
    delay: 1,
    iconType: "sound",
    scrollable: true,
    speed: 50,
    showActionIcon: true
  };

  private _duration: number = 5;
  private _wrapWidth: number = 0;
  private _contentWidth: number = 0;

  constructor(props) {
    super(props);
    this.state = {
      closed: false,
      loop: false,
      firstRound: true,
      flag: false
    };
  }

  public componentDidMount() {
    this.measureText();
  }

  public render() {
    const {
      className,
      iconType,
      mode,
      delay,
      scrollable,
      style,
      showActionIcon
    } = this.props;
    const { loop, firstRound, flag, closed } = this.state;
    const classString = classnames(
      {
        [prefixCls]: true
      },
      className
    );
    const contentStyle = {
      paddingLeft: !flag && firstRound ? 0 : this._wrapWidth + "px",
      animationDelay: (firstRound ? delay : 0) + "s",
      animationDuration: this._duration + "s"
    };
    const contentClass = classnames({
      [`${prefixCls}__content`]: true,
      [`${prefixCls}__content--play`]:
        loop && scrollable && firstRound && !flag,
      [`${prefixCls}__content--loop`]: loop && scrollable && !firstRound
    });

    return (
      !closed && (
        <View
          className={classString}
          ref="container"
          style={style}
          onClick={this.onClick}
        >
          <View className={`${prefixCls}__icon`} ref="icon">
            {iconType && <KIcon type={iconType} />}
          </View>
          <View className={`${prefixCls}__wrap`} ref="wrap">
            <View
              className={contentClass}
              ref="content"
              style={contentStyle}
              onAnimationEnd={this.animationEnd}
            >
              {this.props.children}
            </View>
          </View>
          <View
            className={`${prefixCls}__operation`}
            ref="operation"
            onClick={this.onOperationClick}
          >
            {showActionIcon && mode === "closable" && <KIcon type="close" />}
            {showActionIcon && mode === "link" && <KIcon type="right" />}
            {this.props.renderAction}
          </View>
        </View>
      )
    );
  }

  private onClick = () => {
    const { mode, onClick } = this.props;
    if (mode === "link" && onClick) {
      onClick();
    }
  };

  private onOperationClick = () => {
    const { onClick, mode } = this.props;
    if (mode === "closable") {
      this.setState({
        closed: true
      });
      
    }
    if (onClick) {
      onClick();
    }
  };

  private measureText() {
    const { speed } = this.props;
    querySelector(this.$scope, `.${prefixCls}__wrap`).then((rect: any) => {
      this._wrapWidth = parseInt(rect[0].width);
      querySelector(this.$scope, `.${prefixCls}__content`).then(
        (rect1: any) => {
          this._contentWidth = parseInt(rect1[0].width);
          if (this._contentWidth > this._wrapWidth) {
            this._duration = this._contentWidth / (speed || 0);
            this.setState({
              loop: true
            });
          }
        }
      );
    });
  }

  private animationEnd = () => {
    const { speed } = this.props;
    if (!this.state.firstRound) {
      return;
    }
    this._duration = (this._contentWidth + this._wrapWidth) / (speed || 0);
    this.setState(
      {
        flag: true
      },
      () => {
        setTimeout(() => {
          this.setState({
            firstRound: false
          });
        }, 100);
      }
    );
  };
}

export default KNoticeBar;
