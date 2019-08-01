export type NavBarMode = "light" | "dark";

export interface NavBarProps extends KUI.BaseProps {
  renderIcon?: React.ReactNode;
  mode?: NavBarMode;
  renderLeftContent?: React.ReactNode | string;
  renderRightContent?: React.ReactNode | string;
  onLeftClick?: () => void;
  onRightClick?: () => void;
}
