import React from "react";
import "./ProfileSidebar.css";
import ProfileIntro from './ProfileIntro'
import ProfileFriends from './ProfileFriends'
function ProfileSidebar() {
  return (
    <div className="profileSidebar">
    <ProfileIntro/>
    <ProfileFriends/>
    </div>
  );
}

export default ProfileSidebar;
