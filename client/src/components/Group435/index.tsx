import React from "react";
import "./Group435.scss";

function Group435(props: {
  overlapGroup18: any;
  number: any;
  vector2: any;
  artWorkTitle: any;
  x02Eth: any;
  line118: any;
  address: any;
  className: any;
}) {
  const {
    overlapGroup18,
    number,
    vector2,
    artWorkTitle,
    x02Eth,
    line118,
    address,
    className,
  } = props;

  return (
    <div className={`group-435 ${className || ""}`}>
      <div
        className="overlap-group-11"
        style={{ backgroundImage: `url(${overlapGroup18})` }}
      >
        <div className="number-9 mulish-normal-black-14px">{number}</div>
        <div className="favoriteborder-6">
          <div className="overlap-group7-5">
            <img className="vector-12" src="/img/vector-4@2x.png" />
            <img className="vector-13" src={vector2} />
          </div>
        </div>
      </div>
      <div className="art-work-title-4 mulish-extra-bold-black-18px">
        {artWorkTitle}
      </div>
      <div className="flex-row-23">
        <div className="x02-eth-3 mulish-extra-bold-sonic-silver-14px">
          {x02Eth}
        </div>
        <img className="line-118-5" src={line118} />
        <div className="address-7 mulish-normal-sonic-silver-14px">
          {address}
        </div>
      </div>
    </div>
  );
}

export default Group435;
