import React from "react";
import "./Avatar.scss";

function Avatar(props: { className?: any }) {
  const { className } = props;

  return <div className={`ellipse-89-1 ${className || ""}`}></div>;
}

export default Avatar;
