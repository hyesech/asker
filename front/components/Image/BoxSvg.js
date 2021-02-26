import React from 'react';

const BoxSvg = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.93 5.63V5.61L13.94 0.63C13.78 0.26 13.42 0 13 0H3C2.58 0 2.22 0.26 2.07 0.63L0.08 5.61L0.07 5.63C0.03 5.74 0 5.87 0 6V15C0 15.55 0.45 16 1 16H15C15.55 16 16 15.55 16 15V6C16 5.87 15.97 5.74 15.93 5.63ZM6 10H10C10.55 10 11 9.55 11 9C11 8.45 10.55 8 10 8H6C5.45 8 5 8.45 5 9C5 9.55 5.45 10 6 10ZM12.32 2H9V5H13.52L12.32 2ZM3.68 2H7V5H2.48L3.68 2ZM2 14H14V7H2V14Z"
    />
  </svg>
);

export default BoxSvg;
