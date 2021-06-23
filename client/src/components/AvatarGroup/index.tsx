import React from "react";
import Avatar from "../Avatar";
import "./AvatarGroup.scss";

function AvatarGroup(props: { name: any; position: any }) {
  const { name, position } = props;

  return (
    <div className="group-639">
      <Avatar />
      <div className="group-638-3">
        <img className="melvin-1" src={name} />
        <img className="owner" src={position} />
      </div>
    </div>
  );
}

export default AvatarGroup;
