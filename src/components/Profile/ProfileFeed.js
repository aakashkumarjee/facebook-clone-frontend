import React from "react";
import "./ProfileFeed.css";
import Post from "../Feed/Post";
function ProfileFeed() {
  return (
    <div className="profileFeed">
      <Post
        message="This Works"
        username="aakashkumarjee"
        timestamp="new timestamp"
        image="https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        profilePic="https://avatars3.githubusercontent.com/u/36076849?s=460&u=d9ff7e143ff279f8e0db1cee48e56d817637b8a7&v=4"
      />
      <Post
        message="This Works"
        username="aakashkumarjee"
        timestamp="new timestamp"
        image="https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        profilePic="https://avatars3.githubusercontent.com/u/36076849?s=460&u=d9ff7e143ff279f8e0db1cee48e56d817637b8a7&v=4"
      />
      <Post
        message="This Works"
        username="aakashkumarjee"
        timestamp="new timestamp"
        image="https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        profilePic="https://avatars3.githubusercontent.com/u/36076849?s=460&u=d9ff7e143ff279f8e0db1cee48e56d817637b8a7&v=4"
      />
    </div>
  );
}

export default ProfileFeed;
