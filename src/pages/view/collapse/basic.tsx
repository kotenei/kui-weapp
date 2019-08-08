import Taro, { Component } from "@tarojs/taro";
import { KCollapse, KCollapsePanel } from "kui-weapp";

const text = `
A dog is a type of domesticated animal.
Known for its loyalty and faithfulness,
it can be found as a welcome guest in many households across the world.
`;

export default class Demo extends Component {
  state = {
    activeCodes: []
  };
  render() {
    const { activeCodes } = this.state;
    return (
      <KCollapse>
        <KCollapsePanel
          header="This is panel header 1"
          code="1"
          open={activeCodes.indexOf("1") > -1}
          onClick={this.handleClick}
        >
          {text}
        </KCollapsePanel>
        <KCollapsePanel
          header="This is panel header 2"
          code="2"
          open={activeCodes.indexOf("2") > -1}
          onClick={this.handleClick}
        >
          {text}
        </KCollapsePanel>
        <KCollapsePanel
          header="This is panel header 3"
          code="3"
          open={activeCodes.indexOf("3") > -1}
          last
          disabled
          onClick={this.handleClick}
        >
          {text}
        </KCollapsePanel>
      </KCollapse>
    );
  }
  handleClick = code => {
    const { activeCodes } = this.state;
    const newactiveCodes = activeCodes ? [...activeCodes] : [];
    const index = activeCodes ? activeCodes.indexOf(code) : -1;

    if (index === -1) {
      newactiveCodes.push(code);
    } else {
      newactiveCodes.splice(index, 1);
    }
    this.setState({
      activeCodes: newactiveCodes
    });
  };
}
