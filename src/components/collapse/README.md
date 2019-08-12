# API

```jsx
import { KCollapse, KCollapsePanel } from "kui-weapp";
```

<!-- ## KCollapse

| 名称             | 类型                   | 默认值 | 描述                |
| ---------------- | ---------------------- | ------ | ------------------- |
| activeIds        | string[]               | -      | 当前激活面板 ID     |
| defaultActiveIds | string[]               | []     | 初始化时激活面板 ID |
| accordion        | boolean                | -      | 是否手风琴          |
| onChange         | (code: string) => void | -      | 切换面板的回调      | -->

## KCollapsePanel

| 名称         | 类型            | 默认值 | 描述         |
| ------------ | --------------- | ------ | ------------ |
| border       | boolean         | true   | 是否显示边框 |
| code         | string          | -      | 唯一编号     |
| iconType     | string          | -      | 图标         |
| header       | string          | -      | 面板头部内容 |
| renderHeader | React.ReactNode | -      | 面板头部内容 |
| disabled     | boolean         | false  | 是否禁用     |
| last         | boolean         | false  | 是否最后一项 |
| open         | boolean         | false  | 是否打开     |
