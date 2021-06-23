import React from "react";
import "./Group32.css";

function Group32(props) {
  const { children } = props;

  return (
    <div className="group-3-8">
      <div className="overlap-group1-10">
        <div className="place-a-bid">{children}</div>
      </div>
    </div>
  );
}

export default Group32;
