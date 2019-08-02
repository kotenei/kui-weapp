import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { KDivider, KRow, KCol } from "kui-weapp";

export default class Demo extends Component {
  render() {
    return (
      <View>
        <KRow>
          <KCol gutter={16} style={{ height: "150px" }}>
            <KDivider vertical />
          </KCol>
          <KCol gutter={16} style={{ height: "150px" }}>
            <KDivider vertical color="primary" />
          </KCol>
          <KCol gutter={16} style={{ height: "150px" }}>
            <KDivider vertical color="info" />
          </KCol>
          <KCol gutter={16} style={{ height: "150px" }}>
            <KDivider vertical color="warning" />
          </KCol>
          <KCol gutter={16} style={{ height: "150px" }}>
            <KDivider vertical color="danger" />
          </KCol>
          <KCol gutter={16} style={{ height: "150px" }}>
            <KDivider vertical color="success" />
          </KCol>
        </KRow>
      </View>
    );
  }
}
