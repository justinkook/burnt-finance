import React from "react";
import "./TripleDotsIcon.scss";

function TripleDotsIcon(props: { className?: string }) {
  const { className } = props;

  return (
    <button className={`menu ${className || ""}`}>
      <div className="ellipse-86"></div>
      <div className="ellipse-8"></div>
      <div className="ellipse-8"></div>
    </button>
  );
}

export default TripleDotsIcon;
