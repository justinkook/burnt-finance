import React from "react";
import "./CollectionCard.scss";

function CollectionCard(props: {
  bidStatus: any;
  expirationTime: any;
  image: any;
  likes: any;
  favoritesIcon: any;
  title: any;
  amount: any;
  divider: any;
  numberOfImages: any;
  className: any;
}) {
  const {
    bidStatus,
    expirationTime,
    image,
    likes,
    favoritesIcon,
    title,
    amount,
    divider,
    numberOfImages,
    className,
  } = props;

  return (
    <div className={`group-427 ${className || ""}`}>
      <div className="overlap-group1-13">
        <div className="closing-22h-10m-1 mulish-normal-black-14px">
          <span className="span-1 mulish-normal-black-14px">{bidStatus}</span>
          <span className="span-1 mulish-bold-black-14px">
            {expirationTime}
          </span>
        </div>
      </div>
      <div
        className="overlap-group1-14"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="number-8 mulish-normal-white-14px">{likes}</div>
        <button className="favoriteborder-5">
          <div className="overlap-group7-4">
            <img className="vector-10" src="/img/vector@2x.png" />
            <img className="vector-11" src={favoritesIcon} />
          </div>
        </button>
      </div>
      <div className="art-work-title-3 mulish-extra-bold-black-18px">
        {title}
      </div>
      <div className="flex-row-22">
        <div className="x02-eth-2 mulish-extra-bold-sonic-silver-14px">
          {amount}
        </div>
        <img className="line-118-4" src={divider} />
        <div className="address-6 mulish-normal-sonic-silver-14px">
          {numberOfImages}
        </div>
      </div>
    </div>
  );
}

export default CollectionCard;
