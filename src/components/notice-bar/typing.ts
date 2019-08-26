export type NoticeBarMode = "closable" | "link";

export interface NoticeBarProps extends KUI.BaseProps {
  delay?: number;
  mode?: NoticeBarMode;
  iconType?: string;
  renderAction?: React.ReactNode;
  scrollable?: boolean;
  speed?: number;
  showActionIcon?: boolean;
  onClick?: () => void;
}

export interface NoticeBarState {
  closed?: boolean;
  loop?: boolean;
  firstRound?: boolean;
  flag?: boolean;
}
