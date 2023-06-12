import { Component } from "solid-js";

import { Icon } from "@/utils/Icon";

const SoundIcon: Component<Icon> = ({
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
      d="M11.3333 7.33325L7.99992 9.99992H5.33325V13.9999H7.99992L11.3333 16.6666V7.33325Z"
      stroke={color}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16.7134 7.28662C17.9632 8.53681 18.6654 10.2322 18.6654 12C18.6654 13.7677 17.9632 15.4631 16.7134 16.7133M14.3601 9.63995C14.985 10.265 15.3361 11.1127 15.3361 11.9966C15.3361 12.8805 14.985 13.7282 14.3601 14.3533"
      stroke={color}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default SoundIcon;
