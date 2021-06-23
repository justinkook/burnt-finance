import React from "react";
import Group932 from "../Group932";
import "./Desktop31.css";

function Desktop31(props) {
  const {
    maskGroup,
    motorcycles,
    spanText,
    spanText2,
    toolTip,
    ixv9eH,
    ellipse92,
    ellipse93,
    ellipse94,
    ellipse95,
    motorcycles2,
    motorcycles3,
    motorcycles4,
    motorcycles5,
    line16,
    line17,
    line18,
    line19,
    line20,
    accordionBlack,
    showMore,
    text2,
    rectangle753,
    group932Props,
  } = props;

  return (
    <div class="container-center-horizontal">
      <div className="desktop-31 screen">
        <div className="overlap-group-2">
          <img className="mask-group" src={maskGroup} />
          <div className="ellipse-2-5"></div>
          <Group932
            vector3={group932Props.vector3}
            line35={group932Props.line35}
            goBack={group932Props.goBack}
          />
          <div className="motorcycles-4 valign-text-middle mulish-bold-black-32px">
            {motorcycles}
          </div>
          <p className="text-12 mulish-normal-black-16px">
            <span className="span mulish-normal-black-16px">{spanText}</span>
            <span className="span mulish-extra-bold-black-16px">
              {spanText2}
            </span>
          </p>
          <div
            className="tool-tip"
            style={{ backgroundImage: `url(${toolTip})` }}
          >
            <div className="x-5">{ixv9eH}</div>
          </div>
          <img className="ellipse-92" src={ellipse92} />
          <img className="ellipse-93" src={ellipse93} />
          <img className="ellipse-94" src={ellipse94} />
          <img className="ellipse-95" src={ellipse95} />
          <div className="motorcycles-5 mulish-bold-black-18px">
            {motorcycles2}
          </div>
          <div className="motorcycles-6 mulish-bold-black-18px">
            {motorcycles3}
          </div>
          <div className="motorcycles-7 mulish-bold-black-18px">
            {motorcycles4}
          </div>
          <div className="motorcycles-8 mulish-bold-black-18px">
            {motorcycles5}
          </div>
          <img className="line-16" src={line16} />
          <img className="line-17" src={line17} />
          <img className="line-18" src={line18} />
          <img className="line-19" src={line19} />
          <img className="line-20" src={line20} />
          <div className="group-927-4">
            <div
              className="accordion-black-8"
              style={{ backgroundImage: `url(${accordionBlack})` }}
            ></div>
            <div className="show-more mulish-bold-black-14px">{showMore}</div>
          </div>
          <p className="text-13 mulish-normal-quick-silver-14px">{text2}</p>
          <img className="rectangle-753-1" src={rectangle753} />
        </div>
      </div>
    </div>
  );
}

export default Desktop31;
