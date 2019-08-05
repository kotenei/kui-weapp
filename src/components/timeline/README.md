# API

```jsx
import { KTimeline, KTimelineItem } from "kui-weapp";
```

## KTimelineItem

| 名称      | 类型            | 默认值       | 描述                                                           |
| --------- | --------------- | ------------ | -------------------------------------------------------------- |
| color     | string          | 'primary'    | 颜色风格，可选值 'primary' 'info' 'success' 'warning' 'danger' |
| dot       | boolean         | 是否显示圆点 | 圆点                                                           |
| renderDot | React.ReactNode | -            | 圆点内容                                                       |
| last      | boolean         | false        | 是否最后一项                                                   |
