import React from "react";
import "./Group930.css";

function Group930(props) {
  const { children, className } = props;

  return (
    <div className={`group-930 ${className || ""}`}>
      <div className="overlap-group5">
        <div className="create-item mulish-extra-bold-white-16px">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Group930;
