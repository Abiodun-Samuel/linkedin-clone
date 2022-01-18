import { Avatar } from "@mui/material";
import React from "react";
import InputOptions from "./InputOptions";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";
import "./post.css";

const Post = ({ name, description, message, photoUrl }) => {
  return (
    <div className="post">
      <div className="post_header">
        <Avatar></Avatar>
        <div className="post_info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div> 
      </div>
      <div className="post_body">
        <p>{message}</p>
      </div>
      <div className="post_buttons">
        <InputOptions Icon={ThumbUpAltRoundedIcon} title="Like" color="gray" />
        <InputOptions Icon={ThumbUpAltRoundedIcon} title="Like" color="gray" />
        <InputOptions Icon={ThumbUpAltRoundedIcon} title="Like" color="gray" />
        <InputOptions Icon={ThumbUpAltRoundedIcon} title="Like" color="gray" />
      </div>
    </div>
  );
};

export default Post;
