import { Avatar } from "@material-ui/core";
import React from "react";
import "./ProfileTop.css";
function ProfileTop() {
  return (
    <div className="profileTop">
      <div className="profileTopContainer">
        <div className="coverArea">
          <div className="coverImage"></div>
        </div>
        <div className="profileTopBio">
          <div className="profilePic">
            <div className="profilePicContainer">
              <img
                src="https://media.geeksforgeeks.org/auth/profile/6efe2n3hzsirt0dh5oam"
                alt=""
              />
            </div>
          </div>
          <div className="name">
            <h1>Akash Kumar</h1>
          </div>
          <div className="addBio">
            <p>Get Info</p>
          </div>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}

export default ProfileTop;
