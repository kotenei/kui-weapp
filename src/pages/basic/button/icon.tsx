import Taro, { Component } from "@tarojs/taro";
import { KButton } from "kui-weapp";

export default class Demo extends Component {
  render() {
    return (
      <div>
        <KButton icon="search">Search</KButton>
        <KButton icon="loading">Loading</KButton>
      </div>
    );
  }
}
