import React from "react";

function ArrowIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='40'
      height='40'
      fill='none'
      viewBox='0 0 40 40'
    >
      <path
        fill='#000'
        stroke='#000'
        strokeWidth='2'
        d='M22.183 14.834l-8.073.137-.006-.342 11.066-.189.188 11.066-.342.006-.138-8.074-.041-2.414-1.678 1.736-9.034 9.348-.24-.232 9.034-9.347 1.678-1.736-2.414.04z'
      ></path>
    </svg>
  );
}

export default React.memo(ArrowIcon);