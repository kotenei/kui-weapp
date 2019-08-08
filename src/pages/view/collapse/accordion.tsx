import Taro, { Component } from "@tarojs/taro";
import { KCollapse, KCollapsePanel } from "kui-weapp";

const text = `
A dog is a type of domesticated animal.
Known for its loyalty and faithfulness,
it can be found as a welcome guest in many households across the world.
`;

const data = [
  {
    code: "1",
    header: "This is panel header 1",
    renderContent: text
  },
  {
    code: "2",
    header: "This is panel header 2",
    renderContent: text
  },
  {
    code: "3",
    header: "This is panel header 3",
    renderContent: text
  }
];

export default class Demo extends Component {
  render() {
    return <KCollapse data={data} accordion />;
  }
}
