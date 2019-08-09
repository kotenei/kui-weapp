export interface CollapseProps extends KUI.BaseProps {
  activeCodes?: string[];
  defaultActiveCodes?: string[];
  accordion?: boolean;
  data?: CollapseData[];
  onChange?: (code: string) => void;
}

export interface CollapseState {
  activeCodes?: string[];
}

export interface CollapsePanelProps extends KUI.BaseProps {
  border?: boolean;
  code: string;
  iconType?: string;
  header?: string;
  renderHeader?: React.ReactNode;
  last?: boolean;
  open?: boolean;
  disabled?: boolean;
  onClick?: (code: string) => void;
}

export interface CollapsePanelState {
  height?: any;
}

export interface CollapseData {
  code: string;
  header?: string;
  disabled?: boolean;
  iconType?: string;
  content?: string;
}
