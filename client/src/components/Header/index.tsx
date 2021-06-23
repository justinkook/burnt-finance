import React from "react";
import Group4543 from "../Group4543";
import "./Header.css";

function Header(props: any) {
  const { rectangle722, className, group4543Props } = props;

  return (
    <div className={`header ${className || ""}`}>
      <div className="ellipse-2"></div>
      <Group4543>{group4543Props.children}</Group4543>
      <img className="rectangle-722" src={rectangle722} />
    </div>
  );
}

export default Header;
