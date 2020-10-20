import React from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import Post from "./Post";
import QuickUpdate from "./QuickUpdate";
import posts from '../../Data/PostData'
function Feed() {
  return (
    <div className="containerFeed">
      <div className="feed">
        <StoryReel />
        <QuickUpdate />
        {posts.map(post =>(
          <Post message= {post.message} username={post.username}
          timestamp={post.timestamp}
          image={post.image} profilePic={post.profilePic}
        />
        ))}
      </div>
    </div>
  );
}

export default Feed;
