export interface TransitionProps extends KUI.BaseProps {
  transitionName?: string;
  action?: boolean;
  timeout?: number;
  onClick?: (e?) => void;
}

export interface TransitionState {
  enter?: boolean;
  enterActive?: boolean;
  enterDone?: boolean;
  exit?: boolean;
  exitActive?: boolean;
  exitDone?: boolean;
}
