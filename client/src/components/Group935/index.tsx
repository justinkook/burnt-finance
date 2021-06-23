import React from "react";
import Header from "../Header";
import Group932 from "../Group932";
import Group3 from "../Group3";
import Group923 from "../Group923";
import Group924 from "../Group924";
import Group925 from "../Group925";
import Group926 from "../Group926";
import Group927 from "../Group927";
import Group641 from "../Group641";
import Group713 from "../Group713";
import Group749 from "../Group749";
import Group930 from "../Group930";
import "./Group935.css";

function Group935(props) {
  const {
    motorcycles,
    uploadFile,
    text1,
    chooseCollection,
    putOnSale,
    text4,
    instantSalePrice,
    text52,
    text3,
    text6,
    line126,
    preview,
    cryptoWheel,
    auction,
    line118,
    address,
    noBidYet,
    headerProps,
    group932Props,
    group3Props,
    group923Props,
    group924Props,
    group925Props,
    group926Props,
    group927Props,
    group641Props,
    group749Props2,
    group930Props,
  } = props;

  return (
    <div className="group-935">
      <div className="overlap-group1-1">
        <Header
          rectangle722={headerProps.rectangle722}
          group4543Props={headerProps.group4543Props}
        />
        <div className="motorcycles-1 valign-text-middle mulish-bold-black-32px">
          {motorcycles}
        </div>
        <Group932
          vector3={group932Props.vector3}
          line35={group932Props.line35}
          goBack={group932Props.goBack}
        />
      </div>
      <div className="flex-row-1">
        <div className="flex-col">
          <div className="upload-file mulish-bold-black-14px">{uploadFile}</div>
          <div className="overlap-group2 border-1px-alto">
            <p className="text-1 mulish-bold-quick-silver-14px">{text1}</p>
            <Group3>{group3Props.children}</Group3>
          </div>
          <Group923
            place={group923Props.place}
            eGCryptoWheel={group923Props.eGCryptoWheel}
            line125={group923Props.line125}
          />
          <Group924
            description={group924Props.description}
            optional={group924Props.optional}
            eGLoremIpsum={group924Props.eGLoremIpsum}
            line125={group924Props.line125}
          />
          <div className="flex-row-2">
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
          <div className="choose-collection mulish-bold-black-14px">
            {chooseCollection}
          </div>
          <Group641
            overlapGroup4={group641Props.overlapGroup4}
            accordionBlack={group641Props.accordionBlack}
            newCollection={group641Props.newCollection}
          />
          <div className="group-929">
            <div className="flex-col-1">
              <div className="put-on-sale mulish-bold-black-14px">
                {putOnSale}
              </div>
              <p className="text mulish-normal-sonic-silver-12px">{text4}</p>
              <div className="instant-sale-price mulish-bold-black-14px">
                {instantSalePrice}
              </div>
              <p className="text mulish-normal-sonic-silver-12px">{text52}</p>
              <div className="text-3 mulish-bold-black-14px">{text3}</div>
              <p className="text mulish-normal-sonic-silver-12px">{text6}</p>
            </div>
            <div className="flex-col-2">
              <Group713 />
              <Group749 />
              <Group749 className={group749Props2.className} />
            </div>
          </div>
          <Group930>{group930Props.children}</Group930>
        </div>
        <div className="flex-row-3">
          <img className="line-126" src={line126} />
          <div className="group-449">
            <div className="preview mulish-bold-black-14px">{preview}</div>
            <div className="rectangle-704"></div>
            <div className="crypto-wheel mulish-extra-bold-quick-silver-18px">
              {cryptoWheel}
            </div>
            <div className="flex-row-4">
              <div className="auction mulish-extra-bold-quick-silver-14px">
                {auction}
              </div>
              <img className="line-118" src={line118} />
              <div className="address mulish-normal-quick-silver-14px">
                {address}
              </div>
            </div>
            <div className="no-bid-yet mulish-normal-quick-silver-14px">
              {noBidYet}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Group935;
