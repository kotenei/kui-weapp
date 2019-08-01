export interface TabBarProps extends KUI.BaseProps {
  activeColor?: string;
}

export interface TabBarState {
  activeIndex?: string[];
}

export interface TabBarItemProps extends KUI.BaseProps {
  id?: string;
  badge?: number | string;
  dot?: boolean;
  iconType:  string;
  selected?: boolean;
  title?: string;
  onChange?: (id?: string) => void;
}
