import React from "react";
import FavoriteBorder from "../FavoriteBorder";
import "./Group435.css";

function Group435(props) {
  const {
    number,
    artWorkTitle,
    x02Eth,
    line118,
    address,
    favoriteBorderProps,
  } = props;

  return (
    <div className="group-449-3">
      <div className="overlap-group7-4">
        <div className="number-17 mulish-normal-black-14px">{number}</div>
        <FavoriteBorder vector2={favoriteBorderProps.vector2} />
      </div>
      <div className="art-work-title-6 mulish-extra-bold-black-18px">
        {artWorkTitle}
      </div>
      <div className="flex-row-47">
        <div className="x02-eth-5 mulish-extra-bold-sonic-silver-14px">
          {x02Eth}
        </div>
        <img className="line-118-9" src={line118} />
        <div className="address-12 mulish-normal-sonic-silver-14px">
          {address}
        </div>
      </div>
    </div>
  );
}

export default Group435;
