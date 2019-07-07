import Taro from "@tarojs/taro";

export default class KComponent<P = {}, S = {}> extends Taro.Component<P, S> {
  static options = {
    addGlobalClass: true
  };
}
