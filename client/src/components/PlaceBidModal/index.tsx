import React from "react";
import "./PlaceBidModal.scss";

function PlaceBidModal(props: any) {
  const {
    rectangle703,
    number,
    enterBid,
    place,
    iconMaterialNavigateNext,
    iconMaterialNavigateNext2,
    motorcycles,
    motorcycles2,
    uiCloseLargeBlack,
    subtotal,
    serviceFee,
    totalText,
    subtotal2,
    serviceFee2,
    totalText2,
    placeABid,
    line23,
    feelTheFreedom,
    cryptoWheel30Smoked,
    byMelvin,
    line24,
    line25,
    quantityText,
    address,
    to2,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="bid-modal screen">
        <div className="overlap-group-5">
          <img className="rectangle-703" src={rectangle703} />
          <div className="group-918">
            <div className="overlap-group1-5">
              <div className="number-2">{number}</div>
            </div>
          </div>
          <div className="group-920">
            <div className="overlap-group2-2">
              <div className="enter-bid">{enterBid}</div>
              <div className="place-1">{place}</div>
            </div>
          </div>
          <img
            className="icon-material-navigate-next"
            src={iconMaterialNavigateNext}
          />
          <img
            className="icon-material-navigate-next-1"
            src={iconMaterialNavigateNext2}
          />
          <div className="motorcycles-4 valign-text-middle mulish-bold-black-32px">
            {motorcycles}
          </div>
          <p className="motorcycles-5 mulish-bold-black-12px">{motorcycles2}</p>
          <div
            className="ui-close-large-black"
            style={{ backgroundImage: `url(${uiCloseLargeBlack})` }}
          ></div>
          <div className="details">
            <div className="flex-row-7">
              <div className="flex-col-3">
                <div className="subtotal mulish-normal-black-14px">
                  {subtotal}
                </div>
                <div className="service-fee mulish-normal-black-14px">
                  {serviceFee}
                </div>
                <div className="total mulish-bold-black-12px">{totalText}</div>
              </div>
              <div className="flex-col-4">
                <div className="title mulish-bold-ebony-clay-12px">
                  {subtotal2}
                </div>
                <div className="title-1 mulish-bold-ebony-clay-12px">
                  {serviceFee2}
                </div>
                <div className="title-2">{totalText2}</div>
              </div>
            </div>
            <div className="group-3">
              <div className="overlap-group1-6">
                <div className="place-a-bid">{placeABid}</div>
              </div>
            </div>
          </div>
          <img className="line-23" src={line23} />
          <div className="group-919">
            <div className="rectangle-704-1"></div>
            <div className="flex-col-5">
              <div className="feel-the-freedom-2 mulish-black-blaze-orange-14px">
                {feelTheFreedom}
              </div>
              <img
                className="crypto-wheel-30-smoked"
                src={cryptoWheel30Smoked}
              />
              <img className="by-melvin" src={byMelvin} />
            </div>
          </div>
          <img className="line-24" src={line24} />
          <img className="line-25" src={line25} />
          <div className="to mulish-bold-black-12px">{quantityText}</div>
          <div className="address-1 mulish-normal-sonic-silver-12px">
            {address}
          </div>
          <div className="to-1 mulish-bold-black-12px">{to2}</div>
        </div>
      </div>
    </div>
  );
}

export default PlaceBidModal;
