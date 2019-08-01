import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { KTabBar, KTabBarItem } from "kui-weapp";

export default class Demo extends Component {
  state = {
    activeId: "1"
  };
  handleChange = id => {
    this.setState({
      activeId: id
    });
  };
  render() {
    const { activeId } = this.state;
    return (
      <View>
        <KTabBar>
          <KTabBarItem
            id="1"
            iconType="android"
            title="Android"
            selected={activeId === "1"}
            onChange={this.handleChange}
          />
          <KTabBarItem
            id="2"
            iconType="apple"
            title="Apple"
            dot
            selected={activeId === "2"}
            onChange={this.handleChange}
          />
          <KTabBarItem
            id="3"
            iconType="weibo"
            title="weibo"
            badge={20}
            selected={activeId === "3"}
            onChange={this.handleChange}
          />
          <KTabBarItem
            id="4"
            iconType="taobao"
            title="taobao"
            badge="new"
            selected={activeId === "4"}
            onChange={this.handleChange}
          />
        </KTabBar>
      </View>
    );
  }
}
