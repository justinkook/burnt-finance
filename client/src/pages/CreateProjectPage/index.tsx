import React from "react";
import Header from "../../components/Header";
import BackButton from "../../components/BackButton";
import "./CreateProjectPage.scss";

function CreateProjectPage(props: any) {
  const {
    motorcycles,
    motorcycles2,
    motorcycles3,
    motorcycles4,
    text1,
    overlapGroup2,
    dropdownicon,
    nft,
    overlapGroup3,
    vector3,
    x,
    fundraising,
    overlapGroup4,
    line35,
    goBack,
    feelTheFreedom,
    rectangle745,
    headerProps,
    goBackProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="createprojectpage screen">
        <div className="overlap-group-4">
          <div className="motorcycles valign-text-middle mulish-bold-black-32px">
            {motorcycles}
          </div>
          <p className="motorcycles-1 mulish-normal-sonic-silver-14px">
            {motorcycles2}
          </p>
          <p className="motorcycles-2 mulish-normal-sonic-silver-14px">
            {motorcycles3}
          </p>
          <p className="motorcycles-3 mulish-normal-sonic-silver-14px">
            {motorcycles4}
          </p>
          <p className="text-8 mulish-normal-black-16px">{text1}</p>
          <Header
            x={headerProps.x}
            dropdownicon={headerProps.dropdownicon}
            className={headerProps.className}
          />
          <BackButton
            vector3={goBackProps.vector3}
            line35={goBackProps.line35}
            text={goBackProps.text}
          />
          <div className="nf-ts">
            <div
              className="overlap-group-3"
              style={{ backgroundImage: `url(${overlapGroup2})` }}
            >
              <img className="rectangle-7" src={dropdownicon} />
              <div className="nft mulish-extra-bold-black-haze-18px">{nft}</div>
            </div>
          </div>
          <div className="fundraising">
            <div
              className="overlap-group-3"
              style={{ backgroundImage: `url(${overlapGroup3})` }}
            >
              <img className="rectangle-7" src={vector3} />
              <div className="fundraising-1 mulish-extra-bold-black-haze-18px">
                {x}
              </div>
              <div className="feel-the-freedom mulish-normal-blaze-orange-14px">
                {fundraising}
              </div>
            </div>
          </div>
          <div className="synthetics">
            <div
              className="overlap-group-3"
              style={{ backgroundImage: `url(${overlapGroup4})` }}
            >
              <img className="rectangle-7" src={line35} />
              <div className="synthetics-1 mulish-extra-bold-black-haze-18px">
                {goBack}
              </div>
              <div className="feel-the-freedom-1 mulish-normal-blaze-orange-14px">
                {feelTheFreedom}
              </div>
            </div>
          </div>
          <img className="create-project-container" src={rectangle745} />
        </div>
      </div>
    </div>
  );
}

export default CreateProjectPage;
