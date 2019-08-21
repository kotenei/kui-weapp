export interface IconProps extends KUI.BaseProps {
  prefixCls?: string;
  value?: string;
  fontSize?: number;
  type: string;
  color?: KUI.ColorTypes;
  spin?:boolean;
  onClick?: () => void;
}
