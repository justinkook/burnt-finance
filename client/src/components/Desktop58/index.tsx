import React from "react";
import Group935 from "../Group935";
import "./Desktop58.css";

function Desktop58(props: any) {
  const {
    overlapGroup6,
    uiCloseLargeBlack,
    uploadFile,
    vector3,
    motorcycles2,
    group925Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-58 screen">
        <div className="overlap-group-18">
          <Group935 {...group925Props} />
          <div className="rectangle-753-5"></div>
          <div className="group-960-1">
            <div
              className="overlap-group6-3"
              style={{ backgroundImage: `url(${overlapGroup6})` }}
            >
              <div
                className="ui-close-large-black-2"
                style={{ backgroundImage: `url(${uiCloseLargeBlack})` }}
              ></div>
              <div className="motorcycles-50 valign-text-middle mulish-bold-black-32px">
                {uploadFile}
              </div>
              <img className="you-have-create-in-my-item-page" src={vector3} />
              <div className="group-959">
                <div className="overlap-group1-18">
                  <div className="check-it-out mulish-extra-bold-white-16px">
                    {motorcycles2}
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

export default Desktop58;
