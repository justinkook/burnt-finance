import React from "react";
import "./ProductSideNav.scss";

function ProductSideNav(props: {
  info: any;
  owners: any;
  history: any;
  bids: any;
}) {
  const { info, owners, history, bids } = props;

  return (
    <div className="group-644">
      <div className="info mulish-bold-black-14px">{info}</div>
      <div className="rectangle-744"></div>
      <div className="group-644-item mulish-bold-quick-silver-14px">
        {owners}
      </div>
      <div className="history mulish-bold-quick-silver-14px">{history}</div>
      <div className="group-644-item mulish-bold-quick-silver-14px">{bids}</div>
    </div>
  );
}

export default ProductSideNav;
