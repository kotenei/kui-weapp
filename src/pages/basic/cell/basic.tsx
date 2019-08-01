import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { KCellGroup, KCell, KIcon } from "kui-weapp";

export default class Demo extends Component {
  render() {
    return (
      <KCellGroup border>
        <KCell  title="这是标题" value="描述文字"/>
        <KCell
          title="这是标题"
          value="默认显示icon"
          label="这是副标题"
          showArrow
        />
        <KCell title="箭头方向" showArrow arrowDirection="up" />
        <KCell title="自定义Icon" renderValue={<KIcon type="search" />} />
        <KCell title="路由跳转" showArrow to="/pages/basic/layout/index" border={false}/>
        {/* <KCell title="链接跳转" showArrow url="http://www.baidu.com" border={false} /> */}
      </KCellGroup>
    );
  }
}
