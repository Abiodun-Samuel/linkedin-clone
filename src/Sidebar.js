import { Avatar } from "@mui/material";
import React from "react";
import "./sidebar.css";
import sidebar from "./images/sidebar.jpg";

const Sidebar = () => {
  const recentItem = (topic) => {
    return (
      <div className="sidebar_recentItem">
        <span className="sidebar_hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img src={sidebar} alt="sidebar" />
        <Avatar className="sidebar_avatar" />
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
        {recentItem("Reactjs")}
        {recentItem("Programming")}
        {recentItem("software Enginnering")}
        {recentItem("Design")}
        {recentItem("Developer")}
      </div>
    </div>
  );
};

export default Sidebar;
