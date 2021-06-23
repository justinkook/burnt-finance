import React from "react";
import Group935 from "../Group935";
import "./Desktop42.css";

function Desktop42(props) {
  const {
    overlapGroup6,
    motorcycles,
    uiCloseLargeBlack,
    text7,
    callContractMethod,
    text8,
    group935Props,
  } = props;

  return (
    <div class="container-center-horizontal">
      <div className="desktop-42 screen">
        <div className="overlap-group">
          <Group935 {...group935Props} />
          <div className="rectangle-753"></div>
          <div className="group-960">
            <div
              className="overlap-group6"
              style={{ backgroundImage: `url(${overlapGroup6})` }}
            >
              <div className="flex-row">
                <div className="motorcycles valign-text-middle mulish-bold-black-32px">
                  {motorcycles}
                </div>
                <div
                  className="ui-close-large-black"
                  style={{ backgroundImage: `url(${uiCloseLargeBlack})` }}
                ></div>
              </div>
              <p className="text-7 mulish-bold-black-14px">{text7}</p>
              <img className="call-contract-method" src={callContractMethod} />
              <div className="group-3">
                <div className="overlap-group1">
                  <div className="text-8 mulish-extra-bold-white-16px">
                    {text8}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Desktop42;
