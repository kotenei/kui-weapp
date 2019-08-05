import Taro, { Component } from "@tarojs/taro";
import { KProgress } from "kui-weapp";

export default class Demo extends Component {
  render() {
    return <KProgress indeterminate />;
  }
}
