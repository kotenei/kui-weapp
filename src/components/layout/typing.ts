export type AlignTypes = "top" | "middle" | "bottom";

export type JustifyTypes =
  | "start"
  | "end"
  | "center"
  | "space-around"
  | "space-between";

export interface RowProps extends KUI.BaseProps {
  align?: AlignTypes;
  gutter?: number;
  justify?: JustifyTypes;
}

export interface ColProps extends KUI.BaseProps {
  gutter?: number;
  offset?: number;
  span?: number;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
}
