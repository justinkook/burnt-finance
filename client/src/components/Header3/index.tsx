import React from "react";
import "./Header3.scss";

function Header3(props: {
  searchIcon: any;
  searchPlaceholder: any;
  explore: any;
  community: any;
  learn: any;
  searchLine: any;
  create: any;
  connectWallet: any;
  navBarDivider: any;
}) {
  const {
    searchIcon,
    searchPlaceholder,
    explore,
    community,
    learn,
    searchLine,
    create,
    connectWallet,
    navBarDivider,
  } = props;

  return (
    <div className="header-2">
      <div className="ellipse-2"></div>
      <div className="flex-col-8">
        <div className="flex-row-15">
          <div className="group-204">
            <div className="overlap-group1-11">
              <div className="ellipse-78 border-1-5px-silver"></div>
              <img className="line-67" src={searchIcon} />
            </div>
          </div>
          <p className="text-9 favoritstd-regular-normal-silver-16px">
            {searchPlaceholder}
          </p>
          <div className="explore mulish-semi-bold-black-16px">{explore}</div>
          <div className="community mulish-semi-bold-black-16px">
            {community}
          </div>
          <div className="learn mulish-semi-bold-black-16px">{learn}</div>
          <img className="line-1" src={searchLine} />
          <div className="group-3-1">
            <div className="overlap-group2-6">
              <div className="create mulish-extra-bold-white-16px">
                {create}
              </div>
            </div>
          </div>
          <div className="group-454-1">
            <div className="overlap-group3-4 border-1px-silver">
              <img className="vector-5" src="/img/vector@2x.svg" />
              <div className="connect-wallet mulish-extra-bold-black-16px">
                {connectWallet}
              </div>
            </div>
          </div>
        </div>
        <img className="line-117" src={navBarDivider} />
      </div>
    </div>
  );
}

export default Header3;
