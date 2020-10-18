import { Avatar } from "@material-ui/core";
import React from "react";
import "./Story.css";
function Story({ image, profileSrc, title }) {
  return (
    <div className="story" style={{ backgroundImage: `url(${image})` }}>
      <Avatar src={profileSrc} className="storyAvatar" />
      <h4>{title}</h4>
    </div>
  );
}

export default Story;
