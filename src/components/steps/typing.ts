export interface StepsProps extends KUI.BaseProps {
  alignCenter?: boolean;
  current?: number;
  direction?: "horizontal" | "vertical";
  status?: "wait" | "process" | "finish" | "error";
  size?: "sm";
  showNumber?: boolean;
  iconInner?: boolean;
}

export interface StepProps extends StepsProps {
  prefixCls?: string;
  index?: number;
  iconType?: string;
  renderTitle?: React.ReactNode;
  renderDescription?: React.ReactNode;
  nextError?: boolean;
}
