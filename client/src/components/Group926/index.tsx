import React from "react";
import "./Group926.css";

function Group926(props) {
  const { numberOfCopies, number, line125, className } = props;

  return (
    <div className={`group-926 ${className || ""}`}>
      <div className="number-of-copies mulish-bold-black-14px">
        {numberOfCopies}
      </div>
      <div className="number-4 mulish-light-black-14px">{number}</div>
      <img className="line-125-12" src={line125} />
    </div>
  );
}

export default Group926;
