import { Component } from "solid-js";

import { Icon } from "@/utils/Icon";

const XIcon: Component<Icon> = ({ onClick }) => (
  <svg
    onClick={onClick}
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.9492 1.04883L1.04972 10.9483"
      stroke="white"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M1.05078 1.04883L10.9503 10.9483"
      stroke="white"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default XIcon;
