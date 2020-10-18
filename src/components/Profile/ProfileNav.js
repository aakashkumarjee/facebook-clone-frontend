import React from "react";
import "./ProfileNav.css";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SearchIcon from "@material-ui/icons/Search";
import EditIcon from "@material-ui/icons/Edit";
import VisibilityIcon from "@material-ui/icons/Visibility";
function ProfileNav() {
  return (
    <div className="profileNav">
      <div className="profileNavContainer">
        <div className="profileNavOptions">
          <div className="profileNavOption">
            <h3>Timeline</h3>
          </div>
          <div className="profileNavOption">
            <h3>About</h3>
          </div>
          <div className="profileNavOption">
            <h3>Friends</h3>
          </div>
          <div className="profileNavOption">
            <h3>Photos</h3>
          </div>
          <div className="profileNavOption">
            <h3>More</h3>
          </div>
        </div>
        <div className="profileNavButtons">
          <div className="profileNavButton">
            <EditIcon />
            <span>Edit Profile</span>
          </div>
          <div className="profileNavButton">
            <VisibilityIcon />
          </div>
          <div className="profileNavButton">
            <SearchIcon />
          </div>
          <div className="profileNavButton">
            <MoreHorizIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileNav;
