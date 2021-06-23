import React from "react";
import "./Header.scss";

function Header(props: { x: any; dropdownicon: any; className?: any }) {
  const { x, dropdownicon, className } = props;

  return (
    <div className={`header ${className || ""}`}>
      <div className="avatar-1"></div>
      <div className="close-icon-1">
        <div className="overlap-group3-2 border-1px-silver">
          <div className="x-1 mulish-extra-bold-black-16px">{x}</div>
        </div>
      </div>
      <img className="dropdown-icon" src={dropdownicon} />
    </div>
  );
}

export default Header;
