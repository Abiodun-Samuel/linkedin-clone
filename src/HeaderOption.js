import React from "react";
import { Avatar } from "@mui/material";
import "./HeaderOption.css";

function HeaderOption({ avatar, Icon, title }) {
  return (
    <div className="headeroption">
      {Icon && <Icon className="headeroption_icon" />}
      {avatar && <Avatar className="headeroption_icon" src={avatar} />}
      <h3 className="headeroption_title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
