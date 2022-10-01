import React from "react";

export default function Circle(props) {
  return (
    <svg
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M36 72C55.8823 72 72 55.8823 72 36C72 16.1177 55.8823 0 36 0C16.1177 0 0 16.1177 0 36C0 55.8823 16.1177 72 36 72Z"
        fill="url(#paint0_linear_1_622)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_622"
          x1="0"
          y1="0"
          x2="71.6976"
          y2="71.6976"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#33D35E" />
          <stop offset="1" stop-color="#2AB6D9" />
        </linearGradient>
      </defs>
    </svg>
  );
}
