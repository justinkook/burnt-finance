import React from "react";
import "./FavoriteBorder.css";

function FavoriteBorder(props: any) {
  const { vector2, className } = props;

  return (
    <div className={`favoriteborder-3 ${className || ""}`}>
      <div className="overlap-group2-9">
        <img className="vector-7" src="/img/vector@2x.png" />
        <img className="vector-8" src={vector2} />
      </div>
    </div>
  );
}

export default FavoriteBorder;
