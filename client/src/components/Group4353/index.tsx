import React from "react";
import FavoriteBorder from "../FavoriteBorder";
import "./Group4353.css";

function Group4353(props) {
  const {
    overlapGroup18,
    number,
    artWorkTitle,
    x02Eth,
    line118,
    address,
    className,
    favoriteBorderProps,
  } = props;

  return (
    <div className={`group-435 ${className || ""}`}>
      <div
        className="overlap-group-13"
        style={{ backgroundImage: `url(${overlapGroup18})` }}
      >
        <div className="number-16 mulish-normal-black-14px">{number}</div>
        <FavoriteBorder vector2={favoriteBorderProps.vector2} />
      </div>
      <div className="art-work-title-5 mulish-extra-bold-black-18px">
        {artWorkTitle}
      </div>
      <div className="flex-row-46">
        <div className="x02-eth-4 mulish-extra-bold-sonic-silver-14px">
          {x02Eth}
        </div>
        <img className="line-118-8" src={line118} />
        <div className="address-11 mulish-normal-sonic-silver-14px">
          {address}
        </div>
      </div>
    </div>
  );
}

export default Group4353;
