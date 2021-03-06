import React, { FC } from "react";

interface Props {
  className?: string;
}

const ArrowBarLeftIcon: FC<Props> = ({ className }) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      className={className || "bi-arrow-bar-left"}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M5.854 4.646a.5.5 0 0 0-.708 0l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L3.207 8l2.647-2.646a.5.5 0 0 0 0-.708z"
      />
      <path
        fillRule="evenodd"
        d="M10 8a.5.5 0 0 0-.5-.5H3a.5.5 0 0 0 0 1h6.5A.5.5 0 0 0 10 8zm2.5 6a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 1 0v11a.5.5 0 0 1-.5.5z"
      />
    </svg>
  );
};

export default ArrowBarLeftIcon;
