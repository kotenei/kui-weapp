import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { KTag } from "kui-weapp";

export default class Demo extends Component {
  render() {
    return (
      <View>
        <KTag line>default</KTag>
        <KTag closable line onClose={this.handleClose}>
          closable
        </KTag>
        <KTag closable color="primary" line onClose={this.handleClose}>
          primary
        </KTag>
        <KTag closable color="info" line onClose={this.handleClose}>
          info
        </KTag>
        <KTag closable color="success" onClose={this.handleClose} line>
          success
        </KTag>
        <KTag closable color="warning" line onClose={this.handleClose}>
          warning
        </KTag>
        <KTag closable color="danger" line onClose={this.handleClose}>
          danger
        </KTag>
      </View>
    );
  }
  handleClose = () => {
    return true;
  };
}
