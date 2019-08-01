import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { KAvatar, KIcon } from "kui-weapp";

export default class Demo extends Component {
  render() {
    return (
      <View>
        <View style={{ marginBottom: "10px" }}>
          <KAvatar renderIcon={<KIcon type="calendar" />} size="sm" />
          &nbsp;
          <KAvatar renderIcon={<KIcon type="calendar" />} />
          &nbsp;
          <KAvatar renderIcon={<KIcon type="calendar" />} size="lg" />
          &nbsp;
        </View>
        <View style={{ marginBottom: "10px" }}>
          <KAvatar
            src="https://avatars2.githubusercontent.com/u/3725164?s=460&v=4"
            size="sm"
          >
            LS
          </KAvatar>
          &nbsp;
          <KAvatar src="https://avatars2.githubusercontent.com/u/3725164?s=460&v=4">
            LS
          </KAvatar>
          &nbsp;
          <KAvatar
            src="https://avatars2.githubusercontent.com/u/3725164?s=460&v=4"
            size="lg"
          >
            LS
          </KAvatar>
          &nbsp;
        </View>
        <View style={{ marginBottom: "10px" }}>
          <KAvatar color="primary" square size="sm">
            LS
          </KAvatar>
          &nbsp;
          <KAvatar color="primary" square>
            LS
          </KAvatar>
          &nbsp;
          <KAvatar color="primary" square size="lg">
            LS
          </KAvatar>
          &nbsp;
        </View>
      </View>
    );
  }
}
