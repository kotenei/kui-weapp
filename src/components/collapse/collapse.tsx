import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import classnames from "classnames";
import KComponent from "../../common/component";
import KCollapsePanel from "./collapse-panel";
import { CollapseProps, CollapseState } from "./typing";

const prefixCls = "k-collapse";

class KCollapse extends KComponent<CollapseProps, CollapseState> {
  public static defaultProps = {
    defaultActiveCodes: [],
    data: []
  };
  public state = {
    activeCodes: this.props.activeCodes || this.props.defaultActiveCodes
  };

  renderData() {
    const { data } = this.props;
    const { activeCodes } = this.state;

    let content =
      data &&
      data.map((item, index) => {
        return (
          <KCollapsePanel
            key={item.code}
            code={item.code}
            disabled={item.disabled}
            header={item.header}
            iconType={item.iconType}
            last={data.length - 1 === index}
            open={activeCodes && activeCodes.indexOf(item.code) > -1}
            onClick={this.onPanelClick}
          >
            {item.renderContent}
          </KCollapsePanel>
        );
      });
    return content;
  }

  public render() {
    const { className, style, data } = this.props;
    const classString = classnames(
      {
        [prefixCls]: true
      },
      className
    );
    return (
      <View className={classString} style={style}>
        {data && data.length > 0 ? this.renderData() : this.props.children}
      </View>
    );
  }

  private onPanelClick = id => {
    const { onChange, accordion } = this.props;
    const { activeCodes } = this.state;
    const newactiveCodes = accordion ? [] : activeCodes ? [...activeCodes] : [];
    if (!("activeCodes" in this.props)) {
      const index = activeCodes ? activeCodes.indexOf(id) : -1;
      if (index === -1) {
        newactiveCodes.push(id);
      } else {
        newactiveCodes.splice(index, 1);
      }
      this.setState({
        activeCodes: newactiveCodes
      });
    }

    if (onChange) {
      onChange(id);
    }
  };
}

export default KCollapse;
