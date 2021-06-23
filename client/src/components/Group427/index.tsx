import React from "react";
import "./Group427.css";

function Group427(props) {
  const {
    number,
    overlapGroup5,
    artWorkTitle,
    x02Eth,
    line118,
    address,
    className,
  } = props;

  return (
    <div className={`group ${className || ""}`}>
      <div className="flex-col-19">
        <div className="overlap-group-8">
          <div className="number-10 mulish-normal-black-14px">{number}</div>
          <div className="favoriteborder-4">
            <div
              className="overlap-group-9"
              style={{ backgroundImage: `url(${overlapGroup5})` }}
            >
              <img className="vector-9" src="/img/vector@2x.png" />
            </div>
          </div>
        </div>
        <div className="art-work-title mulish-extra-bold-black-18px">
          {artWorkTitle}
        </div>
      </div>
      <div className="flex-row-30">
        <div className="x02-eth mulish-extra-bold-sonic-silver-14px">
          {x02Eth}
        </div>
        <img className="line-118-3" src={line118} />
        <div className="address-5 mulish-normal-sonic-silver-14px">
          {address}
        </div>
      </div>
    </div>
  );
}

export default Group427;
