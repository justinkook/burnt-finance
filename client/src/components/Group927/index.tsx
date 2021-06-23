import React from "react";
import "./Group927.css";

function Group927(props) {
  const { accordionBlack, addProperty, className } = props;

  return (
    <div className={`group-927 ${className || ""}`}>
      <div
        className="accordion-black"
        style={{ backgroundImage: `url(${accordionBlack})` }}
      ></div>
      <div className="add-property mulish-bold-black-14px">{addProperty}</div>
    </div>
  );
}

export default Group927;
