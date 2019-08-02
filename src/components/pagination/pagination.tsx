import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import classnames from "classnames";
import KComponent from "../../common/component";
import KButton from "../button/button";
import { PaginationProps, PaginationState } from "./typing";

const prefixCls = "k-pagination";

class KPagination extends KComponent<PaginationProps, PaginationState> {
  public static defaultProps = {
    total: 0,
    mode: "button",
    locale: {
      prevText: "上一页",
      nextText: "下一页"
    }
  };
  constructor(props) {
    super(props);
    this.state = {
      current: props.current || 1
    };
  }
  public renderNumber() {
    const { current } = this.state;
    const { total } = this.props;
    return (
      <View>
        <Text className={`${prefixCls}__current`}>{current}</Text>/
        <Text>{total}</Text>
      </View>
    );
  }
  public renderPointer() {
    const { total } = this.props;
    const { current } = this.state;
    const items: any = [];
    let dots = null;
    if (total) {
      for (let i = 0; i < total; i++) {
        items.push(current === i + 1 ? `${prefixCls}__dot--current` : "");
      }
      dots = items.map(i => {
        return <View key={i} className={`${prefixCls}__dot ${i}`} />;
      });
    }

    return dots;
  }
  public render() {
    const { className, mode, locale, simple, total } = this.props;
    const { current } = this.state;
    const classString = classnames(
      {
        [prefixCls]: true
      },
      className
    );
    return (
      <View className={classString}>
        <View className={`${prefixCls}__prev`}>
          {mode === "button" && (
            <KButton
              size="lg"
              disabled={current === 1}
              onClick={this.handlePrevClick}
            >
              {locale && locale.prevText}
              {this.props.renderPrev}
            </KButton>
          )}
        </View>
        <View className={`${prefixCls}__middle`}>
          {mode !== "pointer" && !simple && this.renderNumber()}
          {mode === "pointer" && this.renderPointer()}
        </View>
        <View className={`${prefixCls}__next`}>
          {mode === "button" && (
            <KButton
              size="lg"
              disabled={current === total}
              onClick={this.handleNextClick}
            >
              {locale && locale.nextText}
              {this.props.renderNext}
            </KButton>
          )}
        </View>
      </View>
    );
  }

  private handlePrevClick = () => {
    const { current } = this.state;
    const { onChange } = this.props;
    let pageNumber = current - 1;
    if (pageNumber <= 0) {
      pageNumber = 1;
    }
    if (!("current" in this.props)) {
      this.setState({
        current: pageNumber
      });
    }
    if (onChange) {
      onChange(pageNumber);
    }
  };

  private handleNextClick = () => {
    const { current } = this.state;
    const { onChange, total } = this.props;
    let pageNumber = current + 1;
    if (pageNumber > total) {
      pageNumber = total;
    }
    if (!("current" in this.props)) {
      this.setState({
        current: pageNumber
      });
    }
    if (onChange) {
      onChange(pageNumber);
    }
  };
}

export default KPagination;
