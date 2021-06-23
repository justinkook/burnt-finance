import React from "react";
import "./Group3.css";

function Group3(props: any) {
  const { children } = props;

  return (
    <div className="group-3-1">
      <div className="overlap-group3-8">
        <div className="sign-up-button border-1px-black"></div>
        <div className="choose-file mulish-extra-bold-black-14px">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Group3;
