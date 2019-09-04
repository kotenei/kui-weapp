export interface StepsProps extends KUI.BaseProps {
  alignCenter?: boolean;
  direction?: "horizontal" | "vertical";
  size?: "sm";
  iconInner?: boolean;
}

export interface StepProps extends StepsProps {
  prefixCls?: string;
  index?: number;
  iconType?: string;
  num?: number;
  renderTitle?: React.ReactNode;
  renderDescription?: React.ReactNode;
  nextError?: boolean;
  showNumber?: boolean;
  last?: boolean;
  status?: "wait" | "process" | "finish" | "error";
}
