import React from "react";
import ProfileNav from "./ProfileNav";
import ProfileTop from "./ProfileTop";
import ProfileContent from "./ProfileContent";
import "./Profile.css";
const Profile = (props) => {
  const fun = () => {
    console.log(props);
  };
  fun();
  return (
    <div className="profile">
      <div className="profileTopCard">
        <ProfileTop />
        <ProfileNav />
      </div>
      <ProfileContent />
    </div>
  );
};

export default Profile;
