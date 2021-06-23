import React from "react";

function LandingPage(props: any) {
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
    create,
    connectWallet,
    rectangle721,
    rectangle753,
    motorcycles,
    getStartedButton,
    getStartedButton2,
    getStartedButton3,
    line22,
    text1,
    rectangle722,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="burntfinance-landingpage screen">
        <div className="overlap-group-3">
          <div className="header"></div>
          <div className="group-988">
            <div className="flex-col-1">
              <img className="mask-group" src={maskGroup} />
              <div
                className="overlap-group"
                style={{ backgroundImage: `url(${overlapGroup6})` }}
              ></div>
              <div className="overlap-group-1">
                <img className="rectangle-763" src={rectangle763} />
              </div>
            </div>
            <div className="flex-col-2">
              <div
                className="overlap-group-2"
                style={{ backgroundImage: `url(${overlapGroup11})` }}
              ></div>
              <div
                className="overlap-group"
                style={{ backgroundImage: `url(${overlapGroup4})` }}
              ></div>
              <div className="overlap-group-1">
                <img className="rectangle-769" src={rectangle769} />
              </div>
            </div>
            <div className="flex-col">
              <div
                className="overlap-group10"
                style={{ backgroundImage: `url(${overlapGroup10})` }}
              ></div>
              <img className="rectangle-711" src={rectangle711} />
              <div className="rectangle-717"></div>
            </div>
            <div className="flex-col">
              <div className="overlap-group5">
                <img className="rectangle-765" src={rectangle765} />
              </div>
              <div className="overlap-group-1">
                <img className="rectangle-770" src={rectangle770} />
              </div>
              <div className="rectangle-718"></div>
            </div>
            <div className="flex-col-3">
              <div
                className="overlap-group-2"
                style={{ backgroundImage: `url(${overlapGroup8})` }}
              ></div>
              <div
                className="overlap-group"
                style={{ backgroundImage: `url(${overlapGroup3})` }}
              ></div>
              <img className="rectangle-719" src={rectangle719} />
            </div>
            <div className="flex-col-4">
              <div className="overlap-group2">
                <div className="rectangle-714"></div>
                <div
                  className="group-987"
                  style={{ backgroundImage: `url(${group987})` }}
                >
                  <div className="rectangle-759"></div>
                </div>
              </div>
              <img className="rectangle-766" src={rectangle766} />
              <div className="overlap-group-1">
                <img className="mask-group-1" src={maskGroup2} />
              </div>
            </div>
          </div>
          <div className="group-989">
            <img className="image-11" src={image11} />
            <div className="explore mulish-semi-bold-black-16px">{explore}</div>
            <div className="community mulish-semi-bold-black-16px">
              {community}
            </div>
            <div className="learn mulish-semi-bold-black-16px">{learn}</div>
            <img className="line-1" src={line1} />
            <div className="group-3">
              <div className="overlap-group1">
                <div className="create mulish-extra-bold-white-16px">
                  {create}
                </div>
              </div>
            </div>
            <div className="group-454">
              <div className="overlap-group2-1 border-1px-silver">
                <img className="vector" src="/img/vector@2x.svg" />
                <div className="connect-wallet mulish-extra-bold-black-16px">
                  {connectWallet}
                </div>
              </div>
            </div>
          </div>
          <img className="rectangle-721" src={rectangle721} />
          <img className="rectangle-753" src={rectangle753} />
          <div className="group-2">
            <h1 className="motorcycles valign-text-middle">{motorcycles}</h1>
            <div className="overlap-group13">
              <img className="get-started-button" src={getStartedButton} />
              <img className="get-started-button-1" src={getStartedButton2} />
              <img className="get-started-button-2" src={getStartedButton3} />
            </div>
            <img className="line-22" src={line22} />
            <div className="text-1">{text1}</div>
            <div className="group-455">
              <img className="rectangle-722" src={rectangle722} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
