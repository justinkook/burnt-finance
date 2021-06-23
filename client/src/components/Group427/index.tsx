import React from "react";
import "./Group427.scss";

function Group427(props: {
  number: any;
  vector2: any;
  artWorkTitle: any;
  x02Eth: any;
  line118: any;
  address: any;
  className?: any;
}) {
  const { number, vector2, artWorkTitle, x02Eth, line118, address, className } =
    props;

  return (
    <div className={`group ${className || ""}`}>
      <div className="overlap-group-7">
        <div className="number-4 mulish-normal-black-14px">{number}</div>
        <div className="favoriteborder-1">
          <div className="overlap-group-8">
            <img className="vector-6" src="/img/vector-18@2x.png" />
            <img className="vector-7" src={vector2} />
          </div>
        </div>
      </div>
      <div className="art-work-title mulish-extra-bold-black-18px">
        {artWorkTitle}
      </div>
      <div className="flex-row-16">
        <div className="x02-eth mulish-extra-bold-sonic-silver-14px">
          {x02Eth}
        </div>
        <img className="line-118-1" src={line118} />
        <div className="address-3 mulish-normal-sonic-silver-14px">
          {address}
        </div>
      </div>
    </div>
  );
}

export default Group427;
