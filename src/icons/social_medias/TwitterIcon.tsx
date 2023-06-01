import { Component } from "solid-js";

import { Icon } from "@/utils/Icon";

const TwitterIcon: Component<Icon> = ({
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
    <g clip-path="url(#clip0_1_1953)">
      <path
        d="M13.8574 2.7482C13.3528 2.9722 12.8105 3.12306 12.2414 3.19106C12.8225 2.84306 13.2688 2.29163 13.4785 1.63449C12.9351 1.95677 12.3328 2.19106 11.6916 2.31734C11.1791 1.77049 10.4471 1.42877 9.63792 1.42877C7.82135 1.42877 6.4865 3.12363 6.89678 4.88306C4.55907 4.76592 2.48592 3.64592 1.09792 1.94363C0.360781 3.2082 0.715638 4.86249 1.96821 5.7002C1.50764 5.68534 1.07335 5.55906 0.694495 5.3482C0.663638 6.65163 1.59792 7.87106 2.95107 8.14249C2.55507 8.24992 2.12135 8.27506 1.68021 8.19049C2.03792 9.3082 3.07678 10.1213 4.30878 10.1442C3.12592 11.0716 1.63564 11.4859 0.143066 11.3099C1.38821 12.1082 2.86764 12.5739 4.45621 12.5739C9.68021 12.5739 12.6316 8.16192 12.4534 4.20477C13.0031 3.80763 13.4802 3.3122 13.8574 2.7482Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_1_1953">
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

export default TwitterIcon;
