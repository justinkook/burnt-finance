import React from "react";
import "./Chip2.scss";

function Chip2(props: { children: any }) {
  const { children } = props;

  return (
    <button className="frame-2 border-1px-silver">
      <div className="motorcycles-32 valign-text-middle mulish-normal-black-24px">
        {children}
      </div>
    </button>
  );
}

export default Chip2;
