import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { KTag } from "kui-weapp";

export default class Demo extends Component {
  render() {
    return (
      <View>
        <KTag>default</KTag>
        <KTag closable onClose={this.handleClose}>
          closable
        </KTag>
        <KTag closable color="primary" onClose={this.handleClose}>
          primary
        </KTag>
        <KTag closable color="info" onClose={this.handleClose}>
          info
        </KTag>
        <KTag closable color="success" onClose={this.handleClose}>
          success
        </KTag>
        <KTag closable color="warning" onClose={this.handleClose}>
          warning
        </KTag>
        <KTag closable color="danger" onClose={this.handleClose}>
          danger
        </KTag>
      </View>
    );
  }
  handleClose = () => {
    return true;
  };
}
