import React from "react";
import "./PreviewCard.scss";

function PreviewCard(props: {
  preview: any;
  cryptoWheel: any;
  auction: any;
  line118: any;
  address: any;
  noBidYet: any;
}) {
  const { preview, cryptoWheel, auction, line118, address, noBidYet } = props;

  return (
    <div className="preview-card">
      <div className="preview mulish-bold-black-14px">{preview}</div>
      <div className="rectangle-704"></div>
      <div className="crypto-wheel">{cryptoWheel}</div>
      <div className="flex-row-6">
        <div className="auction">{auction}</div>
        <img className="line-118" src={line118} />
        <div className="address mulish-normal-quick-silver-14px">{address}</div>
      </div>
      <div className="no-bid-yet mulish-normal-quick-silver-14px">
        {noBidYet}
      </div>
    </div>
  );
}

export default PreviewCard;
