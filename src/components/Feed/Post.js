import { Avatar } from "@material-ui/core";
import React from "react";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NearMeIcon from "@material-ui/icons/NearMe";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExpandMoreOutlined from "@material-ui/icons/ExpandMoreOutlined";
import "./Post.css";
function Post({ profilePic, username, image, timestamp, message }) {
  return (
    <div className="post">
      <div className="postTop">
        <Avatar src={profilePic} className="postAvatar" />
        <div className="postTopInfo">
          <h3>{username}</h3>
          <p>Timestamp</p>
        </div>
      </div>
      <div className="postBottom">
        <p>{message}</p>
      </div>
      <div className="postImage">
        <img src={image} alt="" />
      </div>
      <div className="postOptions">
        <div className="postOption">
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className="postOption">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div className="postOption">
          <NearMeIcon />
          <p>Share</p>
        </div>
        <div className="postOption">
          <AccountCircleIcon />
          <ExpandMoreOutlined />
        </div>
      </div>
    </div>
  );
}

export default Post;
