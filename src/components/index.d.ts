export type StateTypes = "info" | "success" | "warning" | "danger";

export type SizeTypes = "xs" | "sm" | "md" | "lg";

export type ColorTypes = "primary" | StateTypes;

interface BaseProps {
  className?: string;
  children?: React.ReactChildren;
  style?: React.CSSProperties;
}

export as namespace KUI;
