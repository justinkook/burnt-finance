import React from "react";
import "./Group641.css";

function Group641(props) {
  const { overlapGroup4, accordionBlack, newCollection, className } = props;

  return (
    <div className={`group-641 ${className || ""}`}>
      <div
        className="overlap-group4"
        style={{ backgroundImage: `url(${overlapGroup4})` }}
      >
        <div
          className="accordion-black-4"
          style={{ backgroundImage: `url(${accordionBlack})` }}
        ></div>
        <div className="new-collection mulish-semi-bold-black-12px">
          {newCollection}
        </div>
      </div>
    </div>
  );
}

export default Group641;
