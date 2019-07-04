import Taro, { PureComponent } from "@tarojs/taro";

export default class KComponent<P = {}, S = {}> extends PureComponent<P, S> {
  static options = {
    addGlobalClass: true
  };
}
