import Taro, { Component } from "@tarojs/taro";
import { KTimeline, KTimelineItem, KIcon } from "kui-weapp";

export default class Demo extends Component {
  render() {
    return (
      <KTimeline>
        <KTimelineItem>2012</KTimelineItem>
        <KTimelineItem color="info">2013</KTimelineItem>
        <KTimelineItem color="success">2014</KTimelineItem>
        <KTimelineItem color="warning">2015</KTimelineItem>
        <KTimelineItem
          color="danger"
          dot
          renderDot={<KIcon type="time-circle" style={{ fontSize: "20px" }} />}
          last
        >
          2016
        </KTimelineItem>
      </KTimeline>
    );
  }
}
