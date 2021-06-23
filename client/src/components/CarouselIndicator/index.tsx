import React from "react";
import "./CarouselIndicator.css";

function CarouselIndicator(props) {
  const { className } = props;

  return (
    <div className={`carousel-indicator ${className || ""}`}>
      <div className="rectangle-732-1"></div>
    </div>
  );
}

export default CarouselIndicator;
