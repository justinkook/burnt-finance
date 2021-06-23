import React from "react";
import "./Group924.css";

function Group924(props) {
  const { description, optional, eGLoremIpsum, line125, className } = props;

  return (
    <div className={`group-924 ${className || ""}`}>
      <div className="flex-row-9">
        <div className="description mulish-bold-black-14px">{description}</div>
        <div className="optional mulish-normal-quick-silver-14px">
          {optional}
        </div>
      </div>
      <div className="eg-lorem-ipsum mulish-normal-quick-silver-14px">
        {eGLoremIpsum}
      </div>
      <img className="line-125-4" src={line125} />
    </div>
  );
}

export default Group924;
