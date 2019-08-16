import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { KDrawer, KButton } from "kui-weapp";

const BUTTON_STYLE = {
  marginBottom: "10px"
};

export default class Demo extends Component {
  state = {
    position: "left",
    open: false
  };
  render() {
    const { open, position } = this.state;
    return (
      <View>
        <KButton
          onClick={this.handleClick.bind(this, "left")}
          full
          style={BUTTON_STYLE}
        >
          左边弹出
        </KButton>

        <KButton
          onClick={this.handleClick.bind(this, "right")}
          full
          style={BUTTON_STYLE}
        >
          右边弹出
        </KButton>

        <KButton
          onClick={this.handleClick.bind(this, "top")}
          full
          style={BUTTON_STYLE}
        >
          顶部弹出
        </KButton>

        <KButton
          onClick={this.handleClick.bind(this, "bottom")}
          full
          style={BUTTON_STYLE}
        >
          底部弹出
        </KButton>

        <KDrawer
          position={position}
          delay={300}
          open={open}
          onMaskClick={this.handleClose}
        >
          <View style={{ margin: "20px" }}>
            <View style={{ marginBottom: "20px" }}>这里是内容</View>
            <KButton onClick={this.handleClose}>点击关闭</KButton>
          </View>
        </KDrawer>
      </View>
    );
  }
  handleClick = position => {
    this.setState({
      open: true,
      position
    });
  };
  handleClose = () => {
    this.setState({
      open: false
    });
  };
}
