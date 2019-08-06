import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import classnames from "classnames";
import KComponent from "../../common/component";
import { CollapsePanelProps } from "./typing";
import KCell from "../cell/cell";
import KIcon from "../icon/icon";

const prefixCls = "k-collapse-panel";

class KCollapsePanel extends KComponent<CollapsePanelProps> {
  public static defaultProps = {
    activeIds: [],
    disabled: false,
    border: true
  };
  private contentElement: HTMLDivElement;
  // public renderBody(isShow) {
  //   const { children } = this.props;
  //   return (
  //     <Transition
  //       in={isShow}
  //       timeout={300}
  //       appear
  //       onEnter={this.handleEnter}
  //       onEntering={this.handleEntering}
  //       onEntered={this.handleEntered}
  //       onExit={this.handleExit}
  //       onExiting={this.handleExiting}
  //     >
  //       {state => {
  //         return (
  //           <View
  //             className={classnames({
  //               [`${prefixCls}__body`]: true,
  //             })}
  //             ref={this.handleRef}
  //           >
  //             <View className={`${prefixCls}__inner`}>{children}</View>
  //           </View>
  //         );
  //       }}
  //     </Transition>
  //   );
  // }
  public render() {
    const { activeIds, id, header, disabled, icon, border } = this.props;
    const isShow = activeIds ? activeIds.indexOf(id) > -1 : false;
    const classString = classnames({
      [prefixCls]: true,
      [`${prefixCls}--border`]: !!border
    });
    return (
      <View className={classString}>
        {/* <KCell
            className={classnames({
              [`${prefixCls}__header`]: true,
              [`${prefixCls}__header--disabled`]: disabled,
            })}
            onClick={this.handleClick}
            title={header}
            showArrow={!icon}
            value={icon ? typeof icon === 'string' ? <KIcon type={icon} /> : icon : null}
            arrowDirection={isShow ? 'down' : 'right'}
          /> */}

        {/* {this.renderBody(isShow)} */}
        {this.props.children}
      </View>
    );
  }

  private handleClick = () => {
    const { onClick, id, disabled } = this.props;
    if (disabled) {
      return;
    }
    if (onClick) {
      onClick(id);
    }
  };

  private handleRef = (element: HTMLDivElement) => {
    this.contentElement = element;
  };

  private handleEnter = (node, isAppearing) => {
    node.style.height = "0px";
  };

  private handleEntering = (node, isAppearing) => {
    node.style.height = this.getContentHeight() + "px";
  };

  private handleEntered = (node, isAppearing) => {
    node.style.height = "auto";
  };

  private handleExit = node => {
    node.style.height = this.getContentHeight() + "px";
    // tslint:disable-next-line:no-unused-expression
    node.offsetHeight;
  };

  private handleExiting = node => {
    node.style.height = "0px";
  };

  private getContentHeight = (): number => {
    const el = this.contentElement;
    return el ? el.offsetHeight || el.clientHeight || el.scrollHeight : 0;
  };
}

export default KCollapsePanel;
