import Taro, { Component } from "@tarojs/taro";
import { KCard, KCardHeader, KCardBody, KCardFooter } from "kui-weapp";

export default class Demo extends Component {
  render() {
    return (
      <KCard full>
        <KCardHeader extra="extra header content">This is title</KCardHeader>
        <KCardBody>This is content of `Card`</KCardBody>
        <KCardFooter extra="extra footer content">footer content</KCardFooter>
      </KCard>
    );
  }
}
