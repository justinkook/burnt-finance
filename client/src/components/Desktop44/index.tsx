import React from "react";
import Header from "../Header";
import Group932 from "../Group932";
import Group641 from "../Group641";
import Group713 from "../Group713";
import Group923 from "../Group923";
import Group924 from "../Group924";
import Group927 from "../Group927";
import Group925 from "../Group925";
import Group926 from "../Group926";
import Group930 from "../Group930";
import "./Desktop44.css";

function Desktop44(props) {
  const {
    motorcycles,
    line126,
    x,
    cryptoWheel,
    auction,
    line118,
    address,
    noBidYet,
    uploadFile,
    chooseCollection,
    text1,
    goBack,
    vector3,
    line35,
    eGCryptoWheel,
    text2,
    title,
    rectangle722,
    vector32,
    line125,
    line352,
    line127,
    iconMaterialNavigateNext,
    preview,
    instantSalePrice,
    text4,
    newCollection,
    chooseFile,
    putOnSale,
    group713Props3,
    group713Props32,
    group713Props5,
    group713Props2,
    group713Props,
    group7132Props,
    group713Props33,
    group713Props4,
    group713Props52,
    group713Props6,
    group713Props72,
    group7132Props2,
  } = props;

  return (
    <div class="container-center-horizontal">
      <div className="desktop-44 screen">
        <div className="overlap-group-19">
          <Header
            rectangle722={group713Props3.rectangle722}
            group4543Props={group713Props3.group4543Props}
          />
          <div className="motorcycles-51 valign-text-middle mulish-bold-black-32px">
            {motorcycles}
          </div>
          <Group932
            vector3={group713Props32.vector3}
            line35={group713Props32.line35}
            goBack={group713Props32.goBack}
          />
        </div>
        <div className="flex-row-48">
          <img className="line-126-3" src={line126} />
          <div className="group-449-4">
            <div className="preview-3 mulish-bold-black-14px">{x}</div>
            <div className="rectangle-704-4"></div>
            <div className="crypto-wheel-3 mulish-extra-bold-quick-silver-18px">
              {cryptoWheel}
            </div>
            <div className="flex-row-49">
              <div className="auction-3 mulish-extra-bold-quick-silver-14px">
                {auction}
              </div>
              <img className="line-118-10" src={line118} />
              <div className="address-13 mulish-normal-quick-silver-14px">
                {address}
              </div>
            </div>
            <div className="no-bid-yet-3 mulish-normal-quick-silver-14px">
              {noBidYet}
            </div>
          </div>
        </div>
        <div className="upload-file-3 mulish-bold-black-14px">{uploadFile}</div>
        <div className="choose-collection-3 mulish-bold-black-14px">
          {chooseCollection}
        </div>
        <Group641
          overlapGroup4={group713Props5.overlapGroup4}
          accordionBlack={group713Props5.accordionBlack}
          newCollection={group713Props5.newCollection}
          className={group713Props5.className}
        />
        <div className="overlap-group2-15 border-1px-alto">
          <p className="text-26 mulish-bold-quick-silver-14px">{text1}</p>
          <div className="group-944-1">
            <div className="choose-file-3 mulish-extra-bold-blaze-orange-14px">
              {goBack}
            </div>
            <div className="group-206-8">
              <div className="overlap-group3-18">
                <img className="vector-3-8" src={vector3} />
                <img className="line-35-8" src={line35} />
              </div>
            </div>
          </div>
        </div>
        <div className="overlap-group1-19">
          <div className="rectangle-755"></div>
          <div className="rectangle-756"></div>
          <div className="eg-crypto-wheel-4 mulish-normal-quick-silver-14px">
            {eGCryptoWheel}
          </div>
          <p className="text-27 mulish-normal-quick-silver-14px">{text2}</p>
          <div className="title-3">{title}</div>
          <img className="icon-material-navigate-next-2" src={rectangle722} />
          <img className="line-125-16" src={vector32} />
          <img className="line-127" src={line125} />
          <img className="service-fee-25" src={line352} />
          <img className="tip-markdown-sy-ax-is-supported" src={line127} />
          <img
            className="you-will-receive-0-eth-000"
            src={iconMaterialNavigateNext}
          />
          <div className="put-on-sale-3 mulish-bold-black-14px">{preview}</div>
          <div className="instant-sale-price-2 mulish-bold-black-14px">
            {instantSalePrice}
          </div>
          <div className="text-29 mulish-bold-black-14px">{text4}</div>
          <p className="text-30 mulish-normal-sonic-silver-12px">
            {newCollection}
          </p>
          <p className="text-31 mulish-normal-sonic-silver-12px">
            {chooseFile}
          </p>
          <p className="text-32 mulish-normal-sonic-silver-12px">{putOnSale}</p>
          <Group713 className={group713Props2.className} />
          <Group713 className={group713Props.className} />
          <Group713 className={group7132Props.className} />
        </div>
        <Group923
          place={group713Props33.place}
          eGCryptoWheel={group713Props33.eGCryptoWheel}
          line125={group713Props33.line125}
          className={group713Props33.className}
        />
        <Group924
          description={group713Props4.description}
          optional={group713Props4.optional}
          eGLoremIpsum={group713Props4.eGLoremIpsum}
          line125={group713Props4.line125}
          className={group713Props4.className}
        />
        <Group927
          accordionBlack={group713Props52.accordionBlack}
          addProperty={group713Props52.addProperty}
          className={group713Props52.className}
        />
        <Group925
          royalties={group713Props6.royalties}
          number={group713Props6.number}
          text2={group713Props6.text2}
          line125={group713Props6.line125}
          className={group713Props6.className}
        />
        <Group926
          numberOfCopies={group713Props72.numberOfCopies}
          number={group713Props72.number}
          line125={group713Props72.line125}
          className={group713Props72.className}
        />
        <Group930 className={group7132Props2.className}>
          {group7132Props2.children}
        </Group930>
      </div>
    </div>
  );
}

export default Desktop44;
