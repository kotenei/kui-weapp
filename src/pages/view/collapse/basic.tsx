import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { KCollapse, KCollapsePanel } from "kui-weapp";

// const Panel = KCollapsePanel;
const text = `
A dog is a type of domesticated animal.
Known for its loyalty and faithfulness,
it can be found as a welcome guest in many households across the world.
`;

export default class Demo extends Component {
  render() {
    return (
      //   <KCollapse>
      //     <Panel header="This is panel header 1" id="1">
      //       <View>{text}</View>
      //     </Panel>
      //     <Panel header="This is panel header 2" id="2">
      //       <View>{text}</View>
      //     </Panel>
      //     <Panel header="This is panel header 3" id="3" disabled>
      //       <View>{text}</View>
      //     </Panel>
      //   </KCollapse>
      //   <KCollapse>
      //     <View>asdf</View>
      //   </KCollapse>
      <KCollapse>
        <KCollapsePanel id="1">{text}</KCollapsePanel>
      </KCollapse>
    );
  }
}
