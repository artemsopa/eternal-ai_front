import { Component } from "solid-js";

import { Icon } from "@/utils/Icon";

const ShareIcon: Component<Icon> = ({
  width = "24",
  height = "24",
  color = "#9999A6",
}) => (
  <svg
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.66675 12V17.3333C6.66675 17.687 6.80722 18.0261 7.05727 18.2761C7.30732 18.5262 7.64646 18.6667 8.00008 18.6667H16.0001C16.3537 18.6667 16.6928 18.5262 16.9429 18.2761C17.1929 18.0261 17.3334 17.687 17.3334 17.3333V12"
      stroke={color}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14.6666 7.99992L11.9999 5.33325L9.33325 7.99992"
      stroke={color}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 5.33325V13.9999"
      stroke={color}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default ShareIcon;
