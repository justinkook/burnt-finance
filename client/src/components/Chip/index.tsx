import React from "react";
import "./Chip.scss";

function Chip(props: { children: any }) {
  const { children } = props;

  return (
    <button className="frame-1 border-1px-silver">
      <div className="motorcycles-31 valign-text-middle mulish-normal-black-24px">
        {children}
      </div>
    </button>
  );
}

export default Chip;
