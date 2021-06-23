import React from "react";
import "./Group923.css";

function Group923(props) {
  const { place, eGCryptoWheel, line125, className } = props;

  return (
    <div className={`group-923 ${className || ""}`}>
      <div className="place mulish-bold-black-14px">{place}</div>
      <div className="eg-crypto-wheel mulish-normal-quick-silver-14px">
        {eGCryptoWheel}
      </div>
      <img className="line-125" src={line125} />
    </div>
  );
}

export default Group923;
