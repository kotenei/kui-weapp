import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { KActionSheet, KButton } from "kui-weapp";

export default class Demo extends Component {
  state = {
    show: false
  };
  handleShow = () => {
    this.setState({ show: true });
  };
  handleHide = () => {
    this.setState({ show: false });
  };
  handleSelect = selected => {
    this.handleHide();
  };
  render() {
    const { show } = this.state;
    return (
      <View>
        <KButton onClick={this.handleShow}>弹出ActionSheet</KButton>
        <KActionSheet
          show={show}
          actions={[
            { text: "选项" },
            { text: "禁用选项", disabled: true },
            { text: "加载中", loading: true }
          ]}
          onSelect={this.handleSelect}
          onCancel={this.handleHide}
        />
      </View>
    );
  }
}
