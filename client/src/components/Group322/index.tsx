import React from "react";
import "./Group322.css";

function Group322(props) {
  const { children, className } = props;

  return (
    <div className={`group-3-7-1 ${className || ""}`}>
      <div className="overlap-group3-14">
        <div className="buy-now mulish-extra-bold-white-16px">{children}</div>
      </div>
    </div>
  );
}

export default Group322;
