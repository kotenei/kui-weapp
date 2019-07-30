import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { KAlert } from "kui-weapp";

export default class Demo extends Component {
  render() {
    return (
      <View>
        <KAlert
          state="info"
          title="Info Text"
          description="Info Description Info Description Info Description Info Description Info Description Info Description Info Description"
          onClose={this.handleClose}
        />
        <KAlert
          state="success"
          title="Success Text"
          closeText="OK"
          description="Success Description Success Description Success Description Success Description Success Description Success Description Success Description"
          onClose={this.handleOK}
        />
        <KAlert
          state="warning"
          title="Warning Text"
          description="Warning Description Warning Description Warning Description Warning Description Warning Description Warning Description Warning Description"
          onClose={this.handleClose}
        />
        <KAlert
          state="danger"
          title="Danger Text"
          description="Danger Description Danger Description Danger Description Danger Description Danger Description Danger Description Danger Description"
          onClose={this.handleClose}
        />
      </View>
    );
  }
  handleClose = () => {
    return true;
  };
  handleOK = () => {
    return true;
  };
}
