import { Component } from "solid-js";

import { Icon } from "@/utils/Icon";

const FacebookIcon: Component<Icon> = ({
  width = "14",
  height = "14",
  color = "white",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_1_1957)">
      <path
        d="M5.28606 4.71504H3.57178V7.00076H5.28606V13.8579H8.14321V7.00076H10.2244L10.4289 4.71504H8.14321V3.76247C8.14321 3.21676 8.25292 3.00076 8.78035 3.00076H10.4289V0.143616H8.25292C6.19806 0.143616 5.28606 1.04819 5.28606 2.78076V4.71504Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_1_1957">
        <rect
          width="13.7143"
          height="13.7143"
          fill={color}
          transform="translate(0.143066 0.143616)"
        />
      </clipPath>
    </defs>
  </svg>
);

export default FacebookIcon;
