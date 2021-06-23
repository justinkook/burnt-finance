import React from "react";
import FavoriteBorder from "../FavoriteBorder";
import "./Group4274.css";

function Group4274(props) {
  const {
    number,
    artWorkTitle,
    x02Eth,
    line118,
    address,
    className,
    favoriteBorderProps,
  } = props;

  return (
    <div className={`group-1 ${className || ""}`}>
      <div className="overlap-group-11">
        <div className="number-12 mulish-normal-black-14px">{number}</div>
        <FavoriteBorder vector2={favoriteBorderProps.vector2} />
      </div>
      <div className="art-work-title-1 mulish-extra-bold-black-18px">
        {artWorkTitle}
      </div>
      <div className="flex-row-39">
        <div className="x02-eth-1 mulish-extra-bold-sonic-silver-14px">
          {x02Eth}
        </div>
        <img className="line-118-4" src={line118} />
        <div className="address-7 mulish-normal-sonic-silver-14px">
          {address}
        </div>
      </div>
    </div>
  );
}

export default Group4274;
