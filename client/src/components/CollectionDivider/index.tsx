import React from "react";
import "./CollectionDivider.scss";

function CollectionDivider(props: { className?: any }) {
  const { className } = props;

  return (
    <div className={`carousel-indicator ${className || ""}`}>
      <div className="rectangle-732-1"></div>
    </div>
  );
}

export default CollectionDivider;
