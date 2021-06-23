import React from "react";
import Group35 from "../Group35";
import Group454 from "../Group454";
import "./BurntFinanceLandingPage.css";

function BurntFinanceLandingPage(props: any) {
  const {
    maskGroup,
    overlapGroup6,
    rectangle763,
    overlapGroup11,
    overlapGroup4,
    rectangle769,
    overlapGroup10,
    rectangle711,
    rectangle765,
    rectangle770,
    overlapGroup8,
    overlapGroup3,
    rectangle719,
    group987,
    rectangle766,
    maskGroup2,
    image11,
    explore,
    community,
    learn,
    line1,
    rectangle721,
    rectangle753,
    connectWallet,
    getStartedButton,
    getStartedButton2,
    getStartedButton3,
    line22,
    create,
    rectangle722,
    group3Props,
    group3Props2,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="burntfinance-landingpage screen">
        <div className="overlap-group-17">
          <div className="header-8"></div>
          <div className="group-988">
            <div className="flex-col-25">
              <img className="mask-group-3" src={maskGroup} />
              <div
                className="overlap-group-14"
                style={{ backgroundImage: `url(${overlapGroup6})` }}
              ></div>
              <div className="overlap-group-15">
                <img className="rectangle-763" src={rectangle763} />
              </div>
            </div>
            <div className="flex-col-26">
              <div
                className="overlap-group-16"
                style={{ backgroundImage: `url(${overlapGroup11})` }}
              ></div>
              <div
                className="overlap-group-14"
                style={{ backgroundImage: `url(${overlapGroup4})` }}
              ></div>
              <div className="overlap-group-15">
                <img className="rectangle-769" src={rectangle769} />
              </div>
            </div>
            <div className="flex-col-24">
              <div
                className="overlap-group10-1"
                style={{ backgroundImage: `url(${overlapGroup10})` }}
              ></div>
              <img className="rectangle-711" src={rectangle711} />
              <div className="rectangle-717"></div>
            </div>
            <div className="flex-col-24">
              <div className="overlap-group5-4">
                <img className="rectangle-765" src={rectangle765} />
              </div>
              <div className="overlap-group-15">
                <img className="rectangle-770" src={rectangle770} />
              </div>
              <div className="rectangle-718"></div>
            </div>
            <div className="flex-col-27">
              <div
                className="overlap-group-16"
                style={{ backgroundImage: `url(${overlapGroup8})` }}
              ></div>
              <div
                className="overlap-group-14"
                style={{ backgroundImage: `url(${overlapGroup3})` }}
              ></div>
              <img className="rectangle-719" src={rectangle719} />
            </div>
            <div className="flex-col-28">
              <div className="overlap-group2-14">
                <div className="rectangle-714"></div>
                <div
                  className="group-987"
                  style={{ backgroundImage: `url(${group987})` }}
                >
                  <div className="rectangle-759-1"></div>
                </div>
              </div>
              <img className="rectangle-766" src={rectangle766} />
              <div className="overlap-group-15">
                <img className="mask-group-4" src={maskGroup2} />
              </div>
            </div>
          </div>
          <div className="group-989">
            <img className="image-11" src={image11} />
            <div className="explore-3 mulish-semi-bold-black-16px">
              {explore}
            </div>
            <div className="community-3 mulish-semi-bold-black-16px">
              {community}
            </div>
            <div className="learn-3 mulish-semi-bold-black-16px">{learn}</div>
            <img className="line-1-3" src={line1} />
            <Group35>{group3Props.children}</Group35>
            <Group454 connectWallet={group3Props2.connectWallet} />
          </div>
          <img className="rectangle-721" src={rectangle721} />
          <img className="rectangle-753-4" src={rectangle753} />
          <div className="group-2">
            <h1 className="motorcycles-49 valign-text-middle">
              {connectWallet}
            </h1>
            <div className="overlap-group13">
              <img className="get-started-button-4" src={getStartedButton} />
              <img className="get-started-button-5" src={getStartedButton2} />
              <img className="get-started-button-6" src={getStartedButton3} />
            </div>
            <img className="line-22" src={line22} />
            <div className="text-19 mulish-normal-black-16px">{create}</div>
            <div className="group-455">
              <img className="rectangle-722-5" src={rectangle722} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BurntFinanceLandingPage;
