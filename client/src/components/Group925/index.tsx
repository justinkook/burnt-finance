import React from "react";
import "./Group925.css";

function Group925(props) {
  const { royalties, number, text2, line125, className } = props;

  return (
    <div className={`group-925 ${className || ""}`}>
      <div className="flex-row-13">
        <div className="flex-col-6">
          <div className="royalties mulish-bold-black-14px">{royalties}</div>
          <div className="number mulish-light-black-14px">{number}</div>
        </div>
        <div className="text-2-1 mulish-light-black-14px">{text2}</div>
      </div>
      <img className="line-125-8" src={line125} />
    </div>
  );
}

export default Group925;
