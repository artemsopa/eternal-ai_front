import { Component } from "solid-js";

import { Icon } from "@/utils/Icon";

const InstagramIcon: Component<Icon> = ({
  width = "14",
  height = "14",
  color = "white",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.9448 2H7.94482C5.1834 2 2.94482 4.23858 2.94482 7V17C2.94482 19.7614 5.1834 22 7.94482 22H17.9448C20.7062 22 22.9448 19.7614 22.9448 17V7C22.9448 4.23858 20.7062 2 17.9448 2Z"
      stroke={color}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16.945 11.37C17.0684 12.2022 16.9263 13.0522 16.5388 13.799C16.1513 14.5458 15.5382 15.1514 14.7866 15.5297C14.0351 15.9079 13.1835 16.0396 12.3528 15.9059C11.5221 15.7723 10.7548 15.3801 10.1599 14.7852C9.56494 14.1902 9.17275 13.4229 9.03909 12.5922C8.90542 11.7615 9.03708 10.9099 9.41535 10.1584C9.79361 9.40685 10.3992 8.79374 11.146 8.40624C11.8928 8.01874 12.7428 7.87658 13.575 8C14.4239 8.12588 15.2099 8.52146 15.8167 9.1283C16.4236 9.73515 16.8191 10.5211 16.945 11.37Z"
      stroke={color}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18.4448 6.5H18.4548"
      stroke={color}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default InstagramIcon;
