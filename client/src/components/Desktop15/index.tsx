import React from "react";
import Header from "../Header";
import Group932 from "../Group932";
import "./Desktop15.css";

function Desktop15(props: any) {
  const {
    motorcycles,
    motorcycles2,
    motorcycles3,
    motorcycles4,
    text1,
    overlapGroup2,
    rectangle745,
    nft,
    overlapGroup3,
    rectangle747,
    fundraising,
    feelTheFreedom,
    overlapGroup4,
    rectangle732,
    synthetics,
    feelTheFreedom2,
    rectangle753,
    headerProps,
    group932Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-15 screen">
        <div className="overlap-group-4">
          <div className="motorcycles-9 valign-text-middle mulish-bold-black-32px">
            {motorcycles}
          </div>
          <p className="motorcycles-10 mulish-normal-sonic-silver-14px">
            {motorcycles2}
          </p>
          <p className="motorcycles-11 mulish-normal-sonic-silver-14px">
            {motorcycles3}
          </p>
          <p className="motorcycles-12 mulish-normal-sonic-silver-14px">
            {motorcycles4}
          </p>
          <p className="text-14 mulish-normal-black-16px">{text1}</p>
          <Header
            rectangle722={headerProps.rectangle722}
            className={headerProps.className}
            group4543Props={headerProps.group4543Props}
          />
          <Group932
            vector3={group932Props.vector3}
            line35={group932Props.line35}
            goBack={group932Props.goBack}
          />
          <div className="get-started-button">
            <div
              className="overlap-group-3"
              style={{ backgroundImage: `url(${overlapGroup2})` }}
            >
              <img className="rectangle-7" src={rectangle745} />
              <div className="nft mulish-extra-bold-black-haze-18px">{nft}</div>
            </div>
          </div>
          <div className="get-started-button-1">
            <div
              className="overlap-group-3"
              style={{ backgroundImage: `url(${overlapGroup3})` }}
            >
              <img className="rectangle-7" src={rectangle747} />
              <div className="fundraising mulish-extra-bold-black-haze-18px">
                {fundraising}
              </div>
              <div className="feel-the-freedom mulish-normal-blaze-orange-14px">
                {feelTheFreedom}
              </div>
            </div>
          </div>
          <div className="get-started-button-2">
            <div
              className="overlap-group-3"
              style={{ backgroundImage: `url(${overlapGroup4})` }}
            >
              <img className="rectangle-7" src={rectangle732} />
              <div className="synthetics mulish-extra-bold-black-haze-18px">
                {synthetics}
              </div>
              <div className="feel-the-freedom-1 mulish-normal-blaze-orange-14px">
                {feelTheFreedom2}
              </div>
            </div>
          </div>
          <img className="rectangle-753-2" src={rectangle753} />
        </div>
      </div>
    </div>
  );
}

export default Desktop15;
