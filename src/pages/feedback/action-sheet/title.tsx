import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { KActionSheet, KButton } from "kui-weapp";

export default class Demo extends Taro.Component {
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
        <KButton onClick={this.handleShow}>弹出带标题ActionSheet</KButton>
        <KActionSheet
          title="标题"
          show={show}
          onSelect={this.handleSelect}
          onCancel={this.handleHide}
        >
          <View style={{ padding: "20px", textAlign: "left" }}>内容</View>{" "}
        </KActionSheet>
      </View>
    );
  }
}
