# API

```jsx
import { KNavBar } from "kui-weapp";
```

## KNavBar

| 名称               | 类型            | 默认值  | 描述                      |
| ------------------ | --------------- | ------- | ------------------------- |
| renderIcon         | React.ReactNode | -       | 图标                      |
| mode               | string          | 'light' | 模式，可选 'light' 'dark' |
| renderLeftContent  | React.ReactNode | -       | 左侧区域内容              |
| renderRightContent | React.ReactNode | -       | 右侧区域内容              |
| onLeftClick        | () => void      | -       | 左侧点击回调              |
| onRightClick       | () => void      | -       | 右侧点击回调              |
