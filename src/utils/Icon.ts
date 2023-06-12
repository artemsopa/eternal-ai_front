import { JSX } from "solid-js";

export interface Icon {
  width?: string;
  height?: string;
  color?: string;
  onClick?: JSX.EventHandlerUnion<SVGSVGElement, MouseEvent>;
}
