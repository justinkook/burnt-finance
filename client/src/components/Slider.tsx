import React from "react";

function Slider(props: any) {
  const { className } = props;

  return (
    <div className={`slider ${className || ""}`}>
      <div className="ellipse-4"></div>
    </div>
  );
}

export default Slider;
