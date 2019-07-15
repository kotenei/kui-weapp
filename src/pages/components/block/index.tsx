import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import classnames from "classnames";
import "./style.scss";

const prefixCls = "app-block";

const Block = props => {
  const { title, bodyPadding } = props;
  let padding = true;
  if (typeof bodyPadding === "boolean") {
    padding = bodyPadding;
  }
  return (
    <View className={prefixCls}>
      {title && <Text className={`${prefixCls}-title`}>{title}</Text>}
      <View
        className={classnames({
          [`${prefixCls}-body`]: true,
          [`${prefixCls}-body--padding`]: padding
        })}
      >
        {props.children}
      </View>
    </View>
  );
};

export default Block;
