import React from "react";
import "./BackButton.scss";

function BackButton(props: { vector3: any; line35: any; text: any }) {
  const { vector3, line35, text } = props;

  return (
    <div className="go-back-button">
      <div className="back-button">
        <div className="overlap-group1">
          <img className="vector-3" src={vector3} />
          <img className="line-35" src={line35} />
        </div>
      </div>
      <div className="go-back mulish-extra-bold-black-16px">{text}</div>
    </div>
  );
}

export default BackButton;
