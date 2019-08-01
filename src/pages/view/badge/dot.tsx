import Taro, { Component } from "@tarojs/taro";
import { Text } from "@tarojs/components";
import { KBadge } from "kui-weapp";

export default class Demo extends Component {
  render() {
    return (
      <View>
        <KBadge
          dot
          color="danger"
          notwrap={false}
          style={{ marginRight: "20px" }}
        >
          <Text
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "4px",
              background: "#eee",
              display: "inline-block"
            }}
          />
        </KBadge>
        <KBadge text={11} overflowCount={10} notwrap={false}>
          <Text
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "4px",
              background: "#eee",
              display: "inline-block"
            }}
          />
        </KBadge>
      </View>
    );
  }
}
