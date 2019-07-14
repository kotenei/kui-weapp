import Taro, { Component } from "@tarojs/taro";
import {View} from '@tarojs/components';
import { KButton } from "kui-weapp";

export default class Demo extends Component {
  render() {
    return (
      <View>
        <KButton>default</KButton>
        &nbsp;&nbsp;
        <KButton color="primary">primary</KButton>
        &nbsp;&nbsp;
        <KButton color="info">info</KButton>
        &nbsp;&nbsp;
        <KButton color="success">success</KButton>
        &nbsp;&nbsp;
        <KButton color="warning">warning</KButton>
        &nbsp;&nbsp;
        <KButton color="danger" >danger</KButton>
        &nbsp;&nbsp;
        <KButton disabled>disabled</KButton>
      </View>
    );
  }
}
