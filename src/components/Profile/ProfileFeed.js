import React from "react";
import "./ProfileFeed.css";
import Post from "../Feed/Post";
import posts from '../../Data/PostData';
function ProfileFeed() {
  return (
    <div className="profileFeed">
        {posts.map(post =>(
          <Post message= {post.message} username={post.username}
          timestamp={post.timestamp}
          image={post.image} profilePic={post.profilePic}
        />
        ))}
    </div>
  );
}

export default ProfileFeed;
