import React from "react";
import FavoriteBorder from "../FavoriteBorder";
import "./Group4273.css";

function Group4273(props) {
  const {
    spanText,
    spanText2,
    overlapGroup10,
    number,
    artWorkTitle,
    x02Eth,
    line118,
    address,
    className,
    favoriteBorderProps,
  } = props;

  return (
    <div className={`group-427 ${className || ""}`}>
      <div className="overlap-group1-16">
        <div className="closing-22h-10m-1 mulish-normal-black-14px">
          <span className="span-3 mulish-normal-black-14px">{spanText}</span>
          <span className="span-3 mulish-bold-black-14px">{spanText2}</span>
        </div>
      </div>
      <div
        className="overlap-group1-17"
        style={{ backgroundImage: `url(${overlapGroup10})` }}
      >
        <div className="number-15 mulish-normal-white-14px">{number}</div>
        <FavoriteBorder vector2={favoriteBorderProps.vector2} />
      </div>
      <div className="art-work-title-4 mulish-extra-bold-black-18px">
        {artWorkTitle}
      </div>
      <div className="flex-row-45">
        <div className="x02-eth-3 mulish-extra-bold-sonic-silver-14px">
          {x02Eth}
        </div>
        <img className="line-118-7" src={line118} />
        <div className="address-10 mulish-normal-sonic-silver-14px">
          {address}
        </div>
      </div>
    </div>
  );
}

export default Group4273;
