import React from "react";
import Header from "../../components/Header";
import BackButton from "../../components/BackButton";
import Slider from "../../components/Slider";
import PreviewCard from "../../components/PreviewCard";
import "./CreateNFTPage.scss";

function CreateNFTPage(props: any) {
  const {
    createMyNft,
    uploadFile,
    text1,
    chooseFile,
    vector3,
    line35,
    place,
    eGCryptoWheel,
    line125,
    description,
    optional,
    eGLoremIpsum,
    line1252,
    royalties,
    number,
    text2,
    line1253,
    numberOfCopies,
    number2,
    line1254,
    accordionBlack,
    addProperty,
    chooseCollection,
    overlapGroup4,
    accordionBlack2,
    newCollection,
    putOnSale,
    text3,
    createItem,
    middivider,
    headerProps,
    goBackProps,
    goBackProps2,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="createnftpage screen">
        <div className="overlap-group2-1">
          <Header x={headerProps.x} dropdownicon={headerProps.dropdownicon} />
          <div className="create-my-nft valign-text-middle mulish-bold-black-32px">
            {createMyNft}
          </div>
          <BackButton
            vector3={goBackProps.vector3}
            line35={goBackProps.line35}
            text={goBackProps.text}
          />
        </div>
        <div className="flex-row-1">
          <div className="flex-col">
            <div className="upload-file mulish-bold-black-14px">
              {uploadFile}
            </div>
            <div className="overlap-group-2">
              <p className="text-5 mulish-bold-quick-silver-14px">{text1}</p>
              <div className="choose-file">
                <div className="choose-file-1">{chooseFile}</div>
                <div className="group-206-1">
                  <div className="overlap-group3-1">
                    <img className="vector-3-3" src={vector3} />
                    <img className="line-35-3" src={line35} />
                  </div>
                </div>
              </div>
            </div>
            <div className="name">
              <div className="place mulish-bold-black-14px">{place}</div>
              <div className="eg-crypto-wheel mulish-normal-quick-silver-14px">
                {eGCryptoWheel}
              </div>
              <img className="line-125" src={line125} />
            </div>
            <div className="description">
              <div className="flex-row-2">
                <div className="description-1 mulish-bold-black-14px">
                  {description}
                </div>
                <div className="optional mulish-normal-quick-silver-14px">
                  {optional}
                </div>
              </div>
              <div className="eg-lorem-ipsum mulish-normal-quick-silver-14px">
                {eGLoremIpsum}
              </div>
              <img className="line-125" src={line1252} />
            </div>
            <div className="flex-row-3">
              <div className="royalties">
                <div className="flex-row-4">
                  <div className="flex-col-1">
                    <div className="royalties-1 mulish-bold-black-14px">
                      {royalties}
                    </div>
                    <div className="number mulish-light-black-14px">
                      {number}
                    </div>
                  </div>
                  <div className="text-6 mulish-light-black-14px">{text2}</div>
                </div>
                <img className="line-125-1" src={line1253} />
              </div>
              <div className="number-of-copies">
                <div className="number-of-copies-1 mulish-bold-black-14px">
                  {numberOfCopies}
                </div>
                <div className="number-1 mulish-light-black-14px">
                  {number2}
                </div>
                <img className="line-125-1" src={line1254} />
              </div>
            </div>
            <div className="add-property-button">
              <div
                className="accordion-black-1"
                style={{ backgroundImage: `url(${accordionBlack})` }}
              ></div>
              <div className="add-property mulish-bold-black-14px">
                {addProperty}
              </div>
            </div>
            <div className="choose-collection mulish-bold-black-14px">
              {chooseCollection}
            </div>
            <div className="new-collection">
              <div
                className="overlap-group4"
                style={{ backgroundImage: `url(${overlapGroup4})` }}
              >
                <div
                  className="accordion-black-2"
                  style={{ backgroundImage: `url(${accordionBlack2})` }}
                ></div>
                <div className="new-collection-1">{newCollection}</div>
              </div>
            </div>
            <div className="overlap-group1-3">
              <div className="flex-col-2">
                <div className="put-on-sale mulish-bold-black-14px">
                  {putOnSale}
                </div>
                <p className="text-7 mulish-normal-sonic-silver-12px">
                  {text3}
                </p>
              </div>
              <Slider />
            </div>
            <div className="create-item-button">
              <div className="overlap-group5">
                <div className="create-item mulish-extra-bold-white-16px">
                  {createItem}
                </div>
              </div>
            </div>
          </div>
          <div className="flex-row-5">
            <img className="mid-divider" src={middivider} />
            <PreviewCard
              preview={goBackProps2.preview}
              cryptoWheel={goBackProps2.cryptoWheel}
              auction={goBackProps2.auction}
              line118={goBackProps2.line118}
              address={goBackProps2.address}
              noBidYet={goBackProps2.noBidYet}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateNFTPage;
