import React from "react";
import "./HomePage.scss";

function HomePage(props: any) {
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
    homeimage1,
    image1,
    burntLogo,
    explore,
    community,
    learn,
    navbardivider,
    create,
    linkicon,
    connectWallet,
    hometransparentmask,
    homebluetintmask,
    text62,
    nfts,
    fundraising,
    synthetics,
    homedivider,
    text5,
    rectangle722,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="homepage screen">
        <div className="overlap-group-15">
          <div className="header-4"></div>
          <div className="home-background">
            <div className="flex-col-11">
              <img className="mask-group-2" src={maskGroup} />
              <div
                className="overlap-group-12"
                style={{ backgroundImage: `url(${overlapGroup6})` }}
              ></div>
              <div className="overlap-group-13">
                <img className="rectangle-763" src={rectangle763} />
              </div>
            </div>
            <div className="flex-col-12">
              <div
                className="overlap-group-14"
                style={{ backgroundImage: `url(${overlapGroup11})` }}
              ></div>
              <div
                className="overlap-group-12"
                style={{ backgroundImage: `url(${overlapGroup4})` }}
              ></div>
              <div className="overlap-group-13">
                <img className="rectangle-769" src={rectangle769} />
              </div>
            </div>
            <div className="flex-col-10">
              <div
                className="overlap-group10-1"
                style={{ backgroundImage: `url(${overlapGroup10})` }}
              ></div>
              <img className="rectangle-711" src={rectangle711} />
              <div className="rectangle-717"></div>
            </div>
            <div className="flex-col-10">
              <div className="overlap-group5-3">
                <img className="rectangle-765" src={rectangle765} />
              </div>
              <div className="overlap-group-13">
                <img className="rectangle-770" src={rectangle770} />
              </div>
              <div className="rectangle-718"></div>
            </div>
            <div className="flex-col-13">
              <div
                className="overlap-group-14"
                style={{ backgroundImage: `url(${overlapGroup8})` }}
              ></div>
              <div
                className="overlap-group-12"
                style={{ backgroundImage: `url(${overlapGroup3})` }}
              ></div>
              <img className="rectangle-719" src={rectangle719} />
            </div>
            <div className="flex-col-14">
              <div className="overlap-group2-8">
                <div className="rectangle-714"></div>
                <div
                  className="group-987"
                  style={{ backgroundImage: `url(${group987})` }}
                >
                  <div className="rectangle-759-1"></div>
                </div>
              </div>
              <img className="home-image1" src={homeimage1} />
              <div className="overlap-group-13">
                <img className="image1" src={image1} />
              </div>
            </div>
          </div>
          <div className="nav-bar">
            <img className="burnt-logo" src={burntLogo} />
            <div className="explore-2 mulish-semi-bold-black-16px">
              {explore}
            </div>
            <div className="community-2 mulish-semi-bold-black-16px">
              {community}
            </div>
            <div className="learn-2 mulish-semi-bold-black-16px">{learn}</div>
            <img className="nav-bar-divider-1" src={navbardivider} />
            <button className="create-2">
              <div className="overlap-group1-15">
                <div className="create-3 mulish-extra-bold-white-16px">
                  {create}
                </div>
              </div>
            </button>
            <button className="connect-wallet-3">
              <div className="overlap-group2-9 border-1px-silver">
                <img className="link-icon-1" src={linkicon} />
                <div className="connect-wallet-4 mulish-extra-bold-black-16px">
                  {connectWallet}
                </div>
              </div>
            </button>
          </div>
          <img className="home-transparent-mask" src={hometransparentmask} />
          <img className="home-blue-tint-mask" src={homebluetintmask} />
          <div className="home-center-container">
            <h1 className="text-14 valign-text-middle">{text62}</h1>
            <div className="overlap-group13">
              <img className="nf-ts-1" src={nfts} />
              <img className="fundraising-2" src={fundraising} />
              <img className="synthetics-2" src={synthetics} />
            </div>
            <img className="home-divider" src={homedivider} />
            <div className="text-13 mulish-normal-black-16px">{text5}</div>
            <div className="scroll-down-button">
              <img className="rectangle-722" src={rectangle722} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
