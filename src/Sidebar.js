import { Avatar } from "@mui/material";
import React from "react";
import "./sidebar.css";
import sidebar from "./images/sidebar.jpg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img src={sidebar} alt="sidebar" />
        <Avatar />
        <h2>abiodun samuel</h2>
        <h4>abio@gmail.com</h4>
      </div>

      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>who viewed you</p>
          <p className="sidebar_statnumber">1234</p>
        </div>

        <div className="sidebar_stat">
          <p>Post view</p>
          <p className="sidebar_statnumber">1234</p>
        </div>
      </div>

      <div className="sidebar_bottom">
        <p>Recent</p>
      </div>
    </div>
  );
};

export default Sidebar;
