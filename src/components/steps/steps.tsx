import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import classnames from "classnames";
import KComponent from "../../common/component";
import { StepsProps } from "./typing";

const prefixCls = "k-steps";

class Steps extends KComponent<StepsProps> {
  public static defaultProps = {
    alignCenter: true,
    current: 0,
    direction: "horizontal",
    showNumber: true
  };
  // public renderSteps() {
  //   const { children, status } = this.props;
  //   const items: any = [];
  //   const nextErrs: any = [];
  //   const current = this.props.current || 0;

  //   //   React.Children.map(children, (child: any, index: number) => {
  //   //     if (!child || !child.type || child.type.displayName !== 'Step') {
  //   //       return null;
  //   //     }
  //   //     const childStatus = child.props.status;
  //   //     let newStatus = 'wait';
  //   //     if (index < current) {
  //   //       newStatus = 'finish';
  //   //     }
  //   //     if (index === current) {
  //   //       newStatus = 'process';
  //   //     }
  //   //     if (status && index === current) {
  //   //       newStatus = status;
  //   //     }
  //   //     if (status === 'error' && current === index && index > 0) {
  //   //       nextErrs.push(index - 1);
  //   //     }
  //   //     newStatus = childStatus ? childStatus : newStatus;
  //   //     items.push(
  //   //       React.cloneElement(child, {
  //   //         key: index,
  //   //         prefixCls,
  //   //         index,
  //   //         ...this.props,
  //   //         ...child.props,
  //   //         status: newStatus,
  //   //       }),
  //   //     );
  //   //   });

  //   //   if (nextErrs.length > 0) {
  //   //     nextErrs.forEach(index => {
  //   //       const child = items[index];
  //   //       items[index] = React.cloneElement(child, {
  //   //         ...child.props,
  //   //         nextError: true,
  //   //       });
  //   //     });
  //   //   }

  //   return <View>asdf</View>;
  // }
  public render() {
    const { direction, alignCenter, className, size, style } = this.props;
    const classString = classnames(
      {
        [prefixCls]: true,
        [`${prefixCls}--${direction}`]: true,
        [`${prefixCls}--center`]: alignCenter && direction !== "vertical",
        [`${prefixCls}--${size}`]: !!size
      },
      className
    );
    return (
      <View className={classString} style={style}>
        {this.props.children}
      </View>
    );
  }
}

export default Steps;
