import React from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar, IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
function RightNav() {
  return (
    <div className="rightNav">
      <Link to= "/profile">
      <div className="navProfile">
        <Avatar src = "https://media.geeksforgeeks.org/auth/profile/6efe2n3hzsirt0dh5oam"/>
        <h4>Akash Kumar</h4>
      </div>
      </Link>
      <IconButton>
        <AddCircleIcon />
      </IconButton>
      <IconButton>
        <ChatBubbleIcon />
      </IconButton>
      <IconButton>
        <NotificationsIcon />
      </IconButton>
      <Link to="/login">
      <IconButton>
        <ExitToAppIcon />
      </IconButton></Link>
    </div>
  );
}

export default RightNav;
