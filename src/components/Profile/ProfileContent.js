import React from "react";
import "./ProfileContent.css";
import ProfileSidebar from "./ProfileSidebar";
import ProfileFeed from "./ProfileFeed";
function ProfileContent() {
  return (
    <div className="profileContent">
      <div className="tempContent">
      <ProfileSidebar />
      <ProfileFeed />
      </div>
    </div>
  );
}

export default ProfileContent;
