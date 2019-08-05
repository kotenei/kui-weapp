import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import classnames from "classnames";
import KIcon from "../icon/icon";
import KComponent from "../../common/component";
import { TagProps, TagState } from "./typing";

const prefixCls = "k-tag";

class KTag extends KComponent<TagProps, TagState> {
  public static defaultProps = {
    closable: false,
    line: false
  };
  constructor(props) {
    super(props);
    this.state = {
      closed: false,
      closing: false
    };
  }
  public render() {
    const { closable, color, line, style } = this.props;
    const { closed, closing } = this.state;
    const classString = classnames({
      [prefixCls]: true,
      [`${prefixCls}--${color}`]: !!color,
      [`${prefixCls}--line`]: !!line,
      [`${prefixCls}--closing`]: closing
    });

    const tag = closed ? null : (
      <View className={classString} style={style}>
        <Text className={`${prefixCls}__text`}>{this.props.children}</Text>
        {closable ? <KIcon type="close" onClick={this.handleClose} /> : null}
      </View>
    );

    return tag;
  }

  private handleClose = () => {
    const { onClose } = this.props;
    if (onClose && onClose() !== false) {
      this.setState(
        {
          closing: true
        },
        () => {
          setTimeout(() => {
            this.setState({
              closed: true
            });
          }, 300);
        }
      );
    }
  };
}

export default KTag;
