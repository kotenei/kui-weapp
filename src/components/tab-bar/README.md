# API

```jsx
import { KTabBar, KTabBarItem } from 'kui-weapp;
```

<!-- ## KTabBar

| 名称        | 类型   | 默认值    | 描述       |
| ----------- | ------ | --------- | ---------- |
| activeColor | string | '#2196f3' | 选中后颜色 | -->

## KTabBarItem

| 名称     | 类型                    | 默认值 | 描述           |
| -------- | ----------------------- | ------ | -------------- |
| code     | string                  | -      | 编号           |
| badge    | number\|string          | -      | 圆点里面的字符 |
| dot      | boolean                 | -      | 是否显示圆点   |
| iconType | string                  | -      | 图标           |
| selected | boolean                 | -      | 是否选中       |
| title    | string                  | -      | 标题           |
| onChange | (code?: string) => void | -      | 选中时回调     |
