import Taro, { Component } from "@tarojs/taro";
import { KPagination } from "kui-weapp";

export default class Demo extends Component {
  render() {
    return <KPagination total={5} mode="number"/>;
  }
}
