import React from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Avatar, IconButton } from "@material-ui/core";

function RightNav() {
  return (
    <div className="rightNav">
      <div className="navProfile">
        <Avatar src = "https://media.geeksforgeeks.org/auth/profile/6efe2n3hzsirt0dh5oam"/>
        <h4>Akash Kumar</h4>
      </div>
      <IconButton>
        <AddCircleIcon />
      </IconButton>
      <IconButton>
        <ChatBubbleIcon />
      </IconButton>
      <IconButton>
        <NotificationsIcon />
      </IconButton>
      <IconButton>
        <AccountCircleIcon />
      </IconButton>
    </div>
  );
}

export default RightNav;
