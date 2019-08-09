import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { KCollapse, KCollapsePanel } from "kui-weapp";

const text = `
A dog is a type of domesticated animal.
Known for its loyalty and faithfulness,
it can be found as a welcome guest in many households across the world.
`;

export default class Demo extends Component {
  render() {
    const data = [
      {
        code: "1",
        header: "This is panel header 1",
        content: text
      },
      {
        code: "2",
        header: "This is panel header 2",
        content: text
      },
      {
        code: "3",
        header: "This is panel header 3",
        content: text
      }
    ];
    return <KCollapse data={data} accordion />;
  }
}
