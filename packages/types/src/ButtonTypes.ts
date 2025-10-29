export type ButtonType = {
  action?: () => void;
  className?: string;
  color?: "primary" | "gray" | "white";
  darkText?: boolean;
  disabled?: boolean;
  download?: boolean;
  external?: boolean;
  link?: string;
  size?: "small" | "medium" | "large";
  style?: "primary" | "secondary" | "tertiary";
  text: string;
  type?: "button" | "submit";
};
