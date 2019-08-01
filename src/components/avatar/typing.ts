export interface AvatarProps extends KUI.BaseProps {
  iconType?: string;
  square?: boolean;
  size?: "lg" | "md" | "sm";
  color?: KUI.ColorTypes;
  src?: string;
  renderIcon?: React.ReactNode;
}
