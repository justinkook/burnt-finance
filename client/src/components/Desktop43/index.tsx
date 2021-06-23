import React from "react";
import Header from "../Header";
import Group932 from "../Group932";
import Group923 from "../Group923";
import Group924 from "../Group924";
import Group925 from "../Group925";
import Group926 from "../Group926";
import Group927 from "../Group927";
import Group641 from "../Group641";
import Group749 from "../Group749";
import Group930 from "../Group930";
import "./Desktop43.css";

function Desktop43(props) {
  const {
    motorcycles,
    uploadFile,
    text1,
    chooseFile,
    vector3,
    line35,
    chooseCollection,
    putOnSale,
    text3,
    line126,
    preview,
    cryptoWheel,
    auction,
    line118,
    address,
    noBidYet,
    headerProps,
    group932Props,
    group923Props,
    group924Props,
    group925Props,
    group926Props,
    group927Props,
    group641Props,
    group926Props2,
    group930Props,
  } = props;

  return (
    <div class="container-center-horizontal">
      <div className="desktop-43 screen">
        <div className="overlap-group2-2">
          <Header
            rectangle722={headerProps.rectangle722}
            group4543Props={headerProps.group4543Props}
          />
          <div className="motorcycles-3 valign-text-middle mulish-bold-black-32px">
            {motorcycles}
          </div>
          <Group932
            vector3={group932Props.vector3}
            line35={group932Props.line35}
            goBack={group932Props.goBack}
          />
        </div>
        <div className="flex-row-17">
          <div className="flex-col-10">
            <div className="upload-file-2 mulish-bold-black-14px">
              {uploadFile}
            </div>
            <div className="overlap-group-1 border-1px-alto">
              <p className="text-9 mulish-bold-quick-silver-14px">{text1}</p>
              <div className="group-944">
                <div className="choose-file-2 mulish-extra-bold-blaze-orange-14px">
                  {chooseFile}
                </div>
                <div className="group-206-6">
                  <div className="overlap-group3-10">
                    <img className="vector-3-6" src={vector3} />
                    <img className="line-35-6" src={line35} />
                  </div>
                </div>
              </div>
            </div>
            <Group923
              place={group923Props.place}
              eGCryptoWheel={group923Props.eGCryptoWheel}
              line125={group923Props.line125}
              className={group923Props.className}
            />
            <Group924
              description={group924Props.description}
              optional={group924Props.optional}
              eGLoremIpsum={group924Props.eGLoremIpsum}
              line125={group924Props.line125}
              className={group924Props.className}
            />
            <div className="flex-row-18">
              <Group925
                royalties={group925Props.royalties}
                number={group925Props.number}
                text2={group925Props.text2}
                line125={group925Props.line125}
              />
              <Group926
                numberOfCopies={group926Props.numberOfCopies}
                number={group926Props.number}
                line125={group926Props.line125}
              />
            </div>
            <Group927
              accordionBlack={group927Props.accordionBlack}
              addProperty={group927Props.addProperty}
              className={group927Props.className}
            />
            <div className="choose-collection-2 mulish-bold-black-14px">
              {chooseCollection}
            </div>
            <Group641
              overlapGroup4={group641Props.overlapGroup4}
              accordionBlack={group641Props.accordionBlack}
              newCollection={group641Props.newCollection}
              className={group641Props.className}
            />
            <div className="overlap-group1-6">
              <div className="flex-col-11">
                <div className="put-on-sale-2 mulish-bold-black-14px">
                  {putOnSale}
                </div>
                <p className="text-11 mulish-normal-sonic-silver-12px">
                  {text3}
                </p>
              </div>
              <Group749 className={group926Props2.className} />
            </div>
            <Group930 className={group930Props.className}>
              {group930Props.children}
            </Group930>
          </div>
          <div className="flex-row-19">
            <img className="line-126-2" src={line126} />
            <div className="group-449-2">
              <div className="preview-2 mulish-bold-black-14px">{preview}</div>
              <div className="rectangle-704-2"></div>
              <div className="crypto-wheel-2 mulish-extra-bold-quick-silver-18px">
                {cryptoWheel}
              </div>
              <div className="flex-row-20">
                <div className="auction-2 mulish-extra-bold-quick-silver-14px">
                  {auction}
                </div>
                <img className="line-118-2" src={line118} />
                <div className="address-2 mulish-normal-quick-silver-14px">
                  {address}
                </div>
              </div>
              <div className="no-bid-yet-2 mulish-normal-quick-silver-14px">
                {noBidYet}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Desktop43;
