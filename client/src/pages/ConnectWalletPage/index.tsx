import React from "react";
import BackButton from "../../components/BackButton";
import "./ConnectWalletPage.scss";

function ConnectWalletPage(props: any) {
  const {
    sideImage,
    connectYourWallet,
    spanText,
    spanText2,
    toolTip,
    DPpPMU,
    metamaskLogo,
    torusLogo,
    portisLogo,
    walletconnectLogo,
    metamask,
    torus,
    portis,
    walletConnect,
    divider1,
    divider2,
    divider3,
    divider4,
    divider5,
    accordionBlack,
    showMore,
    text2,
    bluetintmask,
    backButtonProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="connectwalletpage screen">
        <div className="overlap-group">
          <img className="side-image" src={sideImage} />
          <div className="avatar"></div>
          <BackButton
            vector3={backButtonProps.vector3}
            line35={backButtonProps.line35}
            text={backButtonProps.text}
          />
          <div className="connect-your-wallet valign-text-middle mulish-bold-black-32px">
            {connectYourWallet}
          </div>
          <p className="text-1 mulish-normal-black-16px">
            <span className="span mulish-normal-black-16px">{spanText}</span>
            <span className="span mulish-extra-bold-black-16px">
              {spanText2}
            </span>
          </p>
          <div
            className="tool-tip"
            style={{ backgroundImage: `url(${toolTip})` }}
          >
            <div className="x">{DPpPMU}</div>
          </div>
          <img className="meta-mask-logo" src={metamaskLogo} />
          <img className="torus-logo" src={torusLogo} />
          <img className="portis-logo" src={portisLogo} />
          <img className="wallet-connect-logo" src={walletconnectLogo} />
          <div className="meta-mask mulish-bold-black-18px">{metamask}</div>
          <div className="torus mulish-bold-black-18px">{torus}</div>
          <div className="portis mulish-bold-black-18px">{portis}</div>
          <div className="wallet-connect mulish-bold-black-18px">
            {walletConnect}
          </div>
          <img className="divider-1" src={divider1} />
          <img className="divider-2" src={divider2} />
          <img className="divider-3" src={divider3} />
          <img className="divider-4" src={divider4} />
          <img className="divider-5" src={divider5} />
          <div className="show-more-button">
            <div
              className="accordion-black"
              style={{ backgroundImage: `url(${accordionBlack})` }}
            ></div>
            <div className="show-more mulish-bold-black-14px">{showMore}</div>
          </div>
          <p className="text-2 mulish-normal-quick-silver-14px">{text2}</p>
          <img className="blue-tint-mask" src={bluetintmask} />
        </div>
      </div>
    </div>
  );
}

export default ConnectWalletPage;
