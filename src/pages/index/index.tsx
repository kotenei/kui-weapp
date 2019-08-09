import Taro, { Component, Config } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./index.scss";
import { KCollapse, KCollapsePanel, KCell, KCellGroup } from "kui-weapp";

export default class Index extends Component {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: "kui-weapp"
  };

  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  renderContent(items, type) {
    const cells = items.map((item, index) => {
      return (
        <KCell
          key={item.title}
          title={item.title}
          to={`/pages/${type}/${item.name}/index`}
          showArrow
          border={index === items.length - 1 ? false : true}
        />
      );
    });
    return <KCellGroup>{cells}</KCellGroup>;
  }

  render() {
    const { value } = this.state;
    const basic = [
      { title: "Button 按钮", name: "button" },
      { title: "Cell 单元格", name: "cell" },
      { title: "Icon 图标", name: "icon" },
      { title: "Layout 布局", name: "layout" }
    ];
    const view = [
      { title: "Card 卡片", name: "card" },
      { title: "Avatar 头像", name: "avatar" },
      { title: "Badge 徽章", name: "badge" },
      { title: "Collapse 折叠面板", name: "collapse" },
      { title: "Divider 分隔符", name: "divider" },
      { title: "LazyLoad 图片懒加载", name: "lazyload" },
      { title: "LoadMore 加载更多", name: "load-more" },
      { title: "NoticeBar 通告栏", name: "noticebar" },
      { title: "Swipe 轮播", name: "swipe" },
      { title: "Tag 标签", name: "tag" },
      { title: "Timeline 时间轴", name: "timeline" }
    ];
    const navigation = [
      { title: "Drawer 抽屉", name: "drawer" },
      { title: "NavBar 导航栏", name: "navbar" },
      { title: "Pagination 分页", name: "pagination" },
      { title: "Steps 步骤条", name: "steps" },
      { title: "TabBar 标签栏", name: "tab-bar" },
      { title: "Tabs 标签页", name: "tabs" }
    ];
    const feedback = [
      { title: "ActionSheet 动作面板", name: "actionsheet" },
      { title: "Alert 警告提示", name: "alert" },
      { title: "Loading 加载", name: "loading" },
      { title: "Message 消息提示", name: "message" },
      { title: "Modal 对话框", name: "modal" },
      { title: "Progress 进度条", name: "progress" },
      { title: "PullRefresh 拉动刷新", name: "pullrefresh" },
      { title: "SwipeCell 滑动单元格", name: "swipecell" },
      { title: "Toast 轻提示", name: "toast" }
    ];
    const form = [
      { title: "Calendar 日历", name: "calendar" },
      { title: "Checkbox 复选框", name: "checkbox" },
      { title: "DatePicker 日期选择", name: "datepicker" },
      { title: "Input 输入框", name: "input" },
      { title: "InputNumber 数字输入框", name: "input-number" },
      { title: "Picker 选择器", name: "picker" },
      { title: "Radio 单选框", name: "radio" },
      { title: "Rate 评分", name: "rate" },
      { title: "SearchBar 搜索栏", name: "search-bar" },
      { title: "Slider 滑块", name: "slider" },
      { title: "Switch 开关", name: "switch" }
    ];

    return (
      <View className="page app-home">
        <KCollapse>
          <KCollapsePanel
            code="1"
            header="基础组件"
            iconType="layout"
            open={value === "1"}
            onClick={this.onPnaleClick}
          >
            {this.renderContent(basic, "basic")}
          </KCollapsePanel>
          <KCollapsePanel
            code="2"
            header="展示组件"
            iconType="image"
            open={value === "2"}
            onClick={this.onPnaleClick}
          >
            {this.renderContent(view, "view")}
          </KCollapsePanel>
          <KCollapsePanel
            code="3"
            header="导航组件"
            iconType="detail"
            open={value === "3"}
            onClick={this.onPnaleClick}
          >
            {this.renderContent(navigation, "navigation")}
          </KCollapsePanel>
          <KCollapsePanel
            code="4"
            header="反馈组件"
            iconType="check-circle"
            open={value === "4"}
            onClick={this.onPnaleClick}
          >
            {this.renderContent(feedback, "feedback")}
          </KCollapsePanel>
          <KCollapsePanel
            code="5"
            header="表单组件"
            iconType="edit-square"
            open={value === "5"}
            onClick={this.onPnaleClick}
          >
            {this.renderContent(form, "form")}
          </KCollapsePanel>
        </KCollapse>
      </View>
    );
  }

  onPnaleClick = code => {
    let value = code === this.state.value ? "" : code;
    this.setState({
      value
    });
  };
}
