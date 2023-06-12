import { Component } from "solid-js";

import { Icon } from "@/utils/Icon";

const MenuIcon: Component<Icon> = ({ onClick }) => (
  <svg
    onClick={onClick}
    width="36"
    height="18"
    viewBox="0 0 36 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6 0H36V2H6V0Z" fill="white" />
    <path d="M6 16H36V18H6V16Z" fill="white" />
    <path d="M0 8H30V10H0V8Z" fill="white" />
  </svg>
);

export default MenuIcon;
