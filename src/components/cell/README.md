# API

```jsx
import { KCell, KCellGroup } from "kui-weapp";
```

## KCell

| 名称           | 类型            | 默认值 | 描述                                |
| -------------- | --------------- | ------ | ----------------------------------- |
| border         | boolean         | true   | 是否显示边框                        |
| disabled       | boolean         | false  | 是否禁用                            |
| title          | string          | -      | 标题                                |
| label          | string          | -      | 副标题                              |
| value          | string          | -      | 描述                                |
| renderValue    | React.ReactNode | -      | 描述输出子组件                      |
| left           | string          | -      | 左侧内容                            |
| right          | string          | -      | 右侧内容                            |
| to             | string          | -      | 路由地址                            |
| url            | string          | -      | 跳转地址                            |
| showArrow      | boolean         | false  | 是否显示箭头                        |
| arrowDirection | string          | -      | 箭头方向 'left' 'right' 'up' 'down' |
| large          | boolean         | -      | 是否大尺寸                          |
| onClick        | () => void      | -      | 点击时回调                          |

## KCellGroup

| 名称   | 类型    | 默认值 | 描述         |
| ------ | ------- | ------ | ------------ |
| border | boolean | true   | 是否显示边框 |
