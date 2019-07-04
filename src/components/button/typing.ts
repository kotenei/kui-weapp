export interface ButtonProps extends KUI.BaseProps {
  color?: KUI.ColorTypes;
  icon?: string;
  disabled?: boolean;
  active?: boolean;
  size?: KUI.SizeTypes;
  onClick?: () => void;
}
