import React from 'react';

const NewSvg = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" {...props}>
    <circle
      cx="7.55096"
      cy="7.72778"
      r="6"
      fill="#0346F2"
      stroke="white"
      strokeWidth="2"
    />
    <circle cx="7.55096" cy="7.72778" r="1" fill="white" />
  </svg>
);

export default NewSvg;
