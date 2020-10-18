import { Avatar } from "@material-ui/core";
import React from "react";
import "./Contact.css";
function Contact({ profilePic, name }) {
  return (
    <div className="contact">
      <Avatar src={profilePic} className="contactImage" />
      <h3>{name}</h3>
    </div>
  );
}

export default Contact;
