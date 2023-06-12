import { Component } from "solid-js";

import { Icon } from "@/utils/Icon";

const AnswerIcon: Component<Icon> = ({ width, height }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 762 276"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M33.2577 34.3067C33.2577 15.3596 48.6173 0 67.5644 0H727.693C746.64 0 762 15.3596 762 34.3067V241.693C762 260.64 746.64 276 727.693 276H67.5643C48.6173 276 33.2577 260.64 33.2577 241.693V187.238C33.2577 178.567 29.9744 170.218 24.0683 163.87L0 138L24.0683 112.13C29.9744 105.782 33.2577 97.4329 33.2577 88.7621V34.3067Z"
      fill="url(#paint0_linear_1_1665)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1_1665"
        x1="762"
        y1="314.559"
        x2="-54.1292"
        y2="-139.827"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#F82D98" />
        <stop offset="1" stop-color="#5833EF" />
      </linearGradient>
    </defs>
  </svg>
);

export default AnswerIcon;
